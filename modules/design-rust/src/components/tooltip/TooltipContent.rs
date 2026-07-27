use dioxus::prelude::*;

use super::tooltipContext::TooltipContext;
use crate::hooks::{
    AnchorAlignType, AnchorPositionOptionsType, AnchorSideType, use_anchor_position,
};
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct TooltipContentProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub side: Option<AnchorSideType>,
    #[props(default = 4.0)]
    pub side_offset: f64,
    #[props(default)]
    pub align: Option<AnchorAlignType>,
    #[props(default = 0.0)]
    pub align_offset: f64,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Tooltip popup content. Rendered as a `position: fixed` element anchored to
/// the trigger; no DOM portal is needed because fixed positioning takes the
/// element out of normal flow.
#[component]
pub fn TooltipContent(props: TooltipContentProps) -> Element {
    let ctx = use_context::<TooltipContext>();
    let open = ctx.open;

    let side = props.side.unwrap_or(AnchorSideType::Top);
    let align = props.align.unwrap_or(AnchorAlignType::Center);

    let anchor_id = ctx.trigger_id.read().clone();
    let positioner_id = ctx.positioner_id.read().clone();

    use_anchor_position(
        ReadSignal::new(open),
        AnchorPositionOptionsType {
            anchor_id,
            positioner_id: positioner_id.clone(),
            side,
            align,
            side_offset: props.side_offset,
            align_offset: props.align_offset,
            collision_padding: 8.0,
        },
    );

    // Keyboard: Escape closes the tooltip while it is open.
    use_effect(move || {
        if !*open.read() {
            return;
        }
        let mut ev = dioxus::document::eval(
            r#"
            const handler = (e) => { if (e.key === "Escape") dioxus.send(true); };
            document.addEventListener("keydown", handler);
            await dioxus.recv();
            document.removeEventListener("keydown", handler);
            "#,
        );
        spawn(async move {
            if ev.recv::<bool>().await.is_ok() {
                ctx.set_open.call(false);
            }
        });
    });

    if !*open.read() {
        return rsx! {};
    }

    rsx! {
        div {
            id: positioner_id,
            class: "isolate z-50",
            style: "position: fixed; top: 0; left: 0;",
            div {
                role: "tooltip",
                "data-slot": "tooltip-content",
                class: cn([
                    "rounded px-3 py-1.5 text-sm bg-white text-foreground z-50 w-fit max-w-xs origin-(--transform-origin)",
                    "font-normal shadow-md shadow-black/20",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                ..props.attributes,
                {props.children}
            }
        }
    }
}
