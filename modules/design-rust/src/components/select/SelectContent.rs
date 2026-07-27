use dioxus::prelude::*;

use super::Select::SelectContext;
use crate::components::scroll_area::ScrollArea;
use crate::hooks::{
    AnchorAlignType, AnchorPositionOptionsType, AnchorSideType, use_anchor_position,
    use_click_outside,
};
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SelectContentProps {
    /// Which side of the trigger the popup opens on.
    #[props(default = AnchorSideType::Bottom)]
    pub side: AnchorSideType,
    /// Pixel gap between trigger and popup.
    #[props(default = 4.0)]
    pub side_offset: f64,
    /// How the popup aligns with the trigger on the cross axis.
    #[props(default = AnchorAlignType::Start)]
    pub align: AnchorAlignType,
    /// Pixel offset applied along the alignment axis.
    #[props(default = 0.0)]
    pub align_offset: f64,
    /// Minimum gap kept between the popup and the viewport edges.
    #[props(default = 15.0)]
    pub collision_padding: f64,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Floating popup that contains the list of select items. Positioned relative
/// to the trigger using `use_anchor_position`, clipped to the available
/// viewport height, and closed on outside clicks.
#[component]
pub fn SelectContent(props: SelectContentProps) -> Element {
    let ctx = use_context::<SelectContext>();
    let is_open = ctx.open;
    let trigger_id = ctx.trigger_id.clone();
    let positioner_id = ctx.positioner_id.clone();
    let viewport_id = ctx.viewport_id.clone();
    let set_open = ctx.set_open;
    let focus_next = ctx.focus_next;
    let focus_prev = ctx.focus_prev;
    let focus_first = ctx.focus_first;
    let focus_last = ctx.focus_last;
    let focus_by_char = ctx.focus_by_char;
    let confirm_focused = ctx.confirm_focused;

    use_anchor_position(
        ReadSignal::new(is_open),
        AnchorPositionOptionsType {
            anchor_id: trigger_id,
            positioner_id: positioner_id.clone(),
            side: props.side,
            align: props.align,
            side_offset: props.side_offset,
            align_offset: props.align_offset,
            collision_padding: props.collision_padding,
        },
    );

    let close_id = positioner_id.clone();
    use_click_outside(close_id, use_callback(move |()| set_open.call(false)));

    if !is_open() {
        return rsx! {};
    }

    let positioner_id_rsx = positioner_id.clone();
    rsx! {
        div {
            id: positioner_id_rsx,
            "data-slot": "select-positioner",
            style: "position: fixed; top: 0; left: 0; z-index: 50;",
            onkeydown: move |event| {
                match event.key() {
                    Key::ArrowDown => {
                        event.prevent_default();
                        focus_next.call(());
                    }
                    Key::ArrowUp => {
                        event.prevent_default();
                        focus_prev.call(());
                    }
                    Key::Home => {
                        event.prevent_default();
                        focus_first.call(());
                    }
                    Key::End => {
                        event.prevent_default();
                        focus_last.call(());
                    }
                    Key::Enter => {
                        event.prevent_default();
                        confirm_focused.call(());
                    }
                    Key::Escape => {
                        event.prevent_default();
                        set_open.call(false);
                    }
                    Key::Character(ref s) => {
                        if let Some(ch) = s.chars().next() {
                            focus_by_char.call(ch);
                        }
                    }
                    _ => {}
                }
            },
            div {
                "data-slot": "select-content",
                class: cn([
                    "bg-popover text-popover-foreground min-w-36 rounded p-1 relative isolate z-50 overflow-hidden w-(--anchor-width) origin-(--transform-origin) ring ring-ring-active",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                ..props.attributes,
                ScrollArea {
                    viewport_class: "h-auto max-h-(--available-height)",
                    div {
                        id: viewport_id,
                        "data-slot": "select-list",
                        role: "listbox",
                        {props.children}
                    }
                }
            }
        }
    }
}
