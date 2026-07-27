use dioxus::prelude::*;

use super::dropdownMenuContext::DropdownMenuContext;
use crate::hooks::{
    AnchorAlignType, AnchorPositionOptionsType, AnchorSideType, use_anchor_position, use_id,
};
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct DropdownMenuContentProps {
    #[props(default)]
    pub side: Option<AnchorSideType>,
    #[props(default = 4.0)]
    pub side_offset: f64,
    #[props(default)]
    pub align: Option<AnchorAlignType>,
    #[props(default = 0.0)]
    pub align_offset: f64,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Dropdown menu popup content.
///
/// Renders as a `position: fixed` element anchored to the trigger — no DOM
/// portal needed. Handles full keyboard navigation (Arrow keys, Home/End,
/// Tab, Enter/Space, and single-character typeahead), outside-click dismiss,
/// and focus management (auto-focus popup on open; restore trigger focus on close).
#[component]
pub fn DropdownMenuContent(props: DropdownMenuContentProps) -> Element {
    let ctx = use_context::<DropdownMenuContext>();
    let open = ctx.open;
    let close_all = ctx.close_all;

    let side = props.side.unwrap_or(AnchorSideType::Bottom);
    let align = props.align.unwrap_or(AnchorAlignType::Start);

    let anchor_id = ctx.trigger_id.read().clone();
    let positioner_id = ctx.positioner_id.read().clone();
    let group_id = ctx.group_id.read().clone();

    let popup_id_val = use_id("dm-popup");
    let popup_id_sig = use_signal(|| popup_id_val.clone());
    let popup_id = popup_id_sig.read().clone();

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

    // Focus management: auto-focus popup on open; restore focus to trigger on close.
    let mut was_open = use_signal(|| false);
    {
        let pid = popup_id.clone();
        let tid = anchor_id.clone();
        use_effect(move || {
            let is_open = *open.read();
            let was = *was_open.peek();
            if is_open && !was {
                let p = pid.clone();
                spawn(async move {
                    dioxus::document::eval(&format!(r#"document.getElementById("{p}")?.focus();"#))
                        .await
                        .ok();
                });
            } else if !is_open && was {
                let t = tid.clone();
                spawn(async move {
                    dioxus::document::eval(&format!(
                        r#"const a=document.activeElement;if(!a||a===document.body)document.getElementById("{t}")?.focus();"#
                    ))
                    .await
                    .ok();
                });
            }
            was_open.set(is_open);
        });
    }

    // Outside-click dismiss: listen at document level, ignore clicks inside
    // any popup carrying `data-dropdown-popup="{group_id}"` or the trigger.
    {
        let gid = group_id.clone();
        let tid = anchor_id.clone();
        use_future(move || {
            let gid = gid.clone();
            let tid = tid.clone();
            async move {
                let mut ev = dioxus::document::eval(&format!(
                    r#"
                    const handler = (e) => {{
                        const inTrigger = document.getElementById("{tid}")?.contains(e.target);
                        const inPopup = !!e.target.closest?.('[data-dropdown-popup="{gid}"]');
                        if (!inTrigger && !inPopup) dioxus.send(true);
                    }};
                    document.addEventListener("pointerdown", handler, {{capture: true}});
                    await dioxus.recv();
                    document.removeEventListener("pointerdown", handler, {{capture: true}});
                    "#
                ));
                while ev.recv::<bool>().await.is_ok() {
                    if *open.read() {
                        close_all.call(());
                    }
                }
            }
        });
    }

    if !*open.read() {
        return rsx! {};
    }

    let popup_id_kd = popup_id.clone();
    let pid_attr = popup_id.clone();
    let gid_attr = group_id.clone();
    let positioner_id_attr = positioner_id.clone();

    rsx! {
        div {
            id: positioner_id_attr,
            class: "isolate z-50 outline-none",
            style: "position: fixed; top: 0; left: 0;",
            div {
                id: pid_attr,
                role: "menu",
                tabindex: "-1",
                "data-slot": "dropdown-menu-content",
                "data-dropdown-popup": gid_attr,
                class: cn([
                    "bg-popover text-popover-foreground min-w-32 rounded p-1 z-50",
                    "max-h-[var(--available-height)] w-[var(--anchor-width)]",
                    "origin-[var(--transform-origin)]",
                    "overflow-x-hidden overflow-y-auto outline-none shadow-none ring-[0.4px] ring-ring-active",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                onkeydown: move |event| {
                    match event.key() {
                        Key::Escape => {
                            event.prevent_default();
                            close_all.call(());
                        }
                        Key::Tab => {
                            event.prevent_default();
                            close_all.call(());
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
                                dioxus::document::eval(r#"
                                    document.activeElement?.click?.();
                                "#).await.ok();
                            });
                        }
                        Key::Character(ref c) if c == " " => {
                            event.prevent_default();
                            spawn(async move {
                                dioxus::document::eval(r#"
                                    document.activeElement?.click?.();
                                "#).await.ok();
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
