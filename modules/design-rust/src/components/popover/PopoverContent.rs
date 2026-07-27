use dioxus::prelude::*;

use super::popoverContext::{PopoverContentContext, PopoverContext};
use crate::hooks::{
    AnchorAlignType, AnchorPositionOptionsType, AnchorSideType, use_anchor_position,
};
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct PopoverContentProps {
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

/// Popover popup content rendered as a `position: fixed` element anchored to
/// the trigger — no DOM portal needed.
///
/// Handles:
/// - Anchor positioning via `use_anchor_position`
/// - Escape key dismiss
/// - Outside-click dismiss
/// - Auto-focus and focus restoration
/// - `aria-labelledby` / `aria-describedby` wired to `PopoverTitle` / `PopoverDescription`
#[component]
pub fn PopoverContent(props: PopoverContentProps) -> Element {
    let ctx = use_context::<PopoverContext>();
    let open = ctx.open;
    let dismiss = ctx.set_open;

    let side = props.side.unwrap_or(AnchorSideType::Bottom);
    let align = props.align.unwrap_or(AnchorAlignType::Center);

    let anchor_id = ctx.trigger_id.read().clone();
    let positioner_id = ctx.positioner_id.read().clone();

    // Title / description registration context
    let title_id_sig: Signal<Option<String>> = use_signal(|| None);
    let description_id_sig: Signal<Option<String>> = use_signal(|| None);
    use_context_provider(|| PopoverContentContext {
        title_id: title_id_sig,
        description_id: description_id_sig,
    });

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

    // Auto-focus popup on open; restore trigger focus on close.
    let mut was_open = use_signal(|| false);
    {
        let positioner_id_for_focus = positioner_id.clone();
        let tid = anchor_id.clone();
        use_effect(move || {
            let is_open = *open.read();
            let was = *was_open.peek();
            if is_open && !was {
                let p = positioner_id_for_focus.clone();
                spawn(async move {
                    dioxus::document::eval(&format!(
                        r#"document.getElementById("{p}")?.querySelector('[tabindex]')?.focus()
                           ?? document.getElementById("{p}")?.focus();"#
                    ))
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

    // Outside-click dismiss.
    {
        let tid = anchor_id.clone();
        let pid = positioner_id.clone();
        use_future(move || {
            let tid = tid.clone();
            let pid = pid.clone();
            async move {
                let mut ev = dioxus::document::eval(&format!(
                    r#"
                    const handler = (e) => {{
                        const inTrigger = document.getElementById("{tid}")?.contains(e.target);
                        const inPopup = document.getElementById("{pid}")?.contains(e.target);
                        if (!inTrigger && !inPopup) dioxus.send(true);
                    }};
                    document.addEventListener("pointerdown", handler, {{capture: true}});
                    await dioxus.recv();
                    document.removeEventListener("pointerdown", handler, {{capture: true}});
                    "#
                ));
                while ev.recv::<bool>().await.is_ok() {
                    if *open.read() {
                        dismiss.call(false);
                    }
                }
            }
        });
    }

    if !*open.read() {
        return rsx! {};
    }

    let positioner_id_attr = positioner_id.clone();
    let title_id = title_id_sig.read().clone();
    let description_id = description_id_sig.read().clone();

    rsx! {
        div {
            id: positioner_id_attr,
            class: "isolate z-50",
            style: "position: fixed; top: 0; left: 0;",
            div {
                role: "dialog",
                tabindex: "-1",
                "data-slot": "popover-content",
                aria_labelledby: title_id,
                aria_describedby: description_id,
                class: cn([
                    "bg-popover text-popover-foreground flex flex-col gap-4 rounded p-4 text-sm",
                    "shadow-none ring-[0.4px] ring-ring-active z-50 min-w-[var(--anchor-width)]",
                    "origin-[var(--transform-origin)] outline-hidden",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                onkeydown: move |event| {
                    if event.key() == Key::Escape {
                        event.prevent_default();
                        dismiss.call(false);
                    }
                },
                ..props.attributes,
                {props.children}
            }
        }
    }
}
