use dioxus::prelude::*;

use super::dropdownMenuContext::{DropdownMenuContext, DropdownMenuSubContext};
use crate::hooks::{
    AnchorAlignType, AnchorPositionOptionsType, AnchorSideType, use_anchor_position,
};
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct DropdownMenuSubContentProps {
    #[props(default)]
    pub side: Option<AnchorSideType>,
    #[props(default = 0.0)]
    pub side_offset: f64,
    #[props(default)]
    pub align: Option<AnchorAlignType>,
    #[props(default = -3.0)]
    pub align_offset: f64,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Popup content for a nested submenu.
///
/// Positioned relative to its `DropdownMenuSubTrigger` using the same
/// `position: fixed` + `use_anchor_position` pattern as `DropdownMenuContent`.
/// Keyboard: `ArrowLeft` closes the submenu and returns focus to the trigger;
/// `Escape`/`Tab` close the whole menu tree.
#[component]
pub fn DropdownMenuSubContent(props: DropdownMenuSubContentProps) -> Element {
    let ctx = use_context::<DropdownMenuContext>();
    let sub = use_context::<DropdownMenuSubContext>();

    let open = sub.open;
    let side = props.side.unwrap_or(AnchorSideType::Right);
    let align = props.align.unwrap_or(AnchorAlignType::Start);

    let anchor_id = sub.trigger_id.read().clone();
    let positioner_id = sub.positioner_id.read().clone();
    let group_id = ctx.group_id.read().clone();
    let popup_id = sub.popup_id.read().clone();

    use_anchor_position(
        ReadSignal::new(open),
        AnchorPositionOptionsType {
            anchor_id: anchor_id.clone(),
            positioner_id: positioner_id.clone(),
            side,
            align,
            side_offset: props.side_offset,
            align_offset: props.align_offset,
            collision_padding: 8.0,
        },
    );

    if !*open.read() {
        return rsx! {};
    }

    let popup_id_kd = popup_id.clone();
    let popup_id_attr = popup_id.clone();
    let gid_attr = group_id.clone();
    let positioner_id_attr = positioner_id.clone();
    let sub_trigger_id = anchor_id.clone();

    rsx! {
        div {
            id: positioner_id_attr,
            class: "isolate z-50 outline-none",
            style: "position: fixed; top: 0; left: 0;",
            div {
                id: popup_id_attr,
                role: "menu",
                tabindex: "-1",
                "data-slot": "dropdown-menu-sub-content",
                "data-dropdown-popup": gid_attr,
                class: cn([
                    "bg-popover text-popover-foreground min-w-32 rounded p-1 z-50",
                    "max-h-[var(--available-height)] w-auto shadow-md shadow-black/20",
                    "origin-[var(--transform-origin)]",
                    "overflow-x-hidden overflow-y-auto outline-none shadow-none ring-[0.4px] ring-ring-active",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                onpointerenter: move |_| sub.cancel_close.call(()),
                onpointerleave: move |_| sub.schedule_close.call(()),
                onkeydown: move |event| {
                    match event.key() {
                        Key::ArrowLeft => {
                            event.prevent_default();
                            sub.set_open.call(false);
                            let tid = sub_trigger_id.clone();
                            spawn(async move {
                                dioxus::document::eval(&format!(
                                    r#"document.getElementById("{tid}")?.focus();"#
                                ))
                                .await
                                .ok();
                            });
                        }
                        Key::Escape | Key::Tab => {
                            event.prevent_default();
                            ctx.close_all.call(());
                        }
                        Key::ArrowDown => {
                            event.prevent_default();
                            let pid = popup_id_kd.clone();
                            spawn(async move {
                                dioxus::document::eval(&format!(r#"
                                    const popup=document.getElementById("{pid}");if(!popup)return;
                                    const items=Array.from(popup.querySelectorAll('[role^="menuitem"]:not([data-disabled])'));
                                    const idx=items.indexOf(document.activeElement);
                                    (items[idx+1]??items[0])?.focus();
                                "#)).await.ok();
                            });
                        }
                        Key::ArrowUp => {
                            event.prevent_default();
                            let pid = popup_id_kd.clone();
                            spawn(async move {
                                dioxus::document::eval(&format!(r#"
                                    const popup=document.getElementById("{pid}");if(!popup)return;
                                    const items=Array.from(popup.querySelectorAll('[role^="menuitem"]:not([data-disabled])'));
                                    const idx=items.indexOf(document.activeElement);
                                    (idx>0?items[idx-1]:items[items.length-1])?.focus();
                                "#)).await.ok();
                            });
                        }
                        Key::Home => {
                            event.prevent_default();
                            let pid = popup_id_kd.clone();
                            spawn(async move {
                                dioxus::document::eval(&format!(r#"
                                    document.getElementById("{pid}")?.querySelector('[role^="menuitem"]:not([data-disabled])')?.focus();
                                "#)).await.ok();
                            });
                        }
                        Key::End => {
                            event.prevent_default();
                            let pid = popup_id_kd.clone();
                            spawn(async move {
                                dioxus::document::eval(&format!(r#"
                                    const items=Array.from(document.getElementById("{pid}")?.querySelectorAll('[role^="menuitem"]:not([data-disabled])') ?? []);
                                    items[items.length-1]?.focus();
                                "#)).await.ok();
                            });
                        }
                        Key::Enter => {
                            event.prevent_default();
                            spawn(async move {
                                dioxus::document::eval(r#"document.activeElement?.click?.();"#)
                                    .await
                                    .ok();
                            });
                        }
                        Key::Character(ref c) if c == " " => {
                            event.prevent_default();
                            spawn(async move {
                                dioxus::document::eval(r#"document.activeElement?.click?.();"#)
                                    .await
                                    .ok();
                            });
                        }
                        Key::Character(ref c) if c.len() == 1 => {
                            event.prevent_default();
                            let ch = c.to_lowercase();
                            let pid = popup_id_kd.clone();
                            spawn(async move {
                                dioxus::document::eval(&format!(r#"
                                    const popup=document.getElementById("{pid}");if(!popup)return;
                                    const items=Array.from(popup.querySelectorAll('[role^="menuitem"]:not([data-disabled])'));
                                    const idx=items.indexOf(document.activeElement);
                                    const ch="{ch}";
                                    const next=items.slice(idx+1).find(el=>(el.textContent||"").trim().toLowerCase().startsWith(ch))
                                        ||items.find(el=>(el.textContent||"").trim().toLowerCase().startsWith(ch));
                                    if(next)next.focus();
                                "#)).await.ok();
                            });
                        }
                        _ => {}
                    }
                },
                ..props.attributes,
                {props.children}
            }
        }
    }
}
