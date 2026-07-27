use dioxus::prelude::*;

use super::dropdownMenuContext::DropdownMenuSubContext;
use crate::hooks::{use_controlled_state, use_id};

#[derive(Props, Clone, PartialEq)]
pub struct DropdownMenuSubProps {
    #[props(default)]
    pub open: Option<bool>,
    #[props(default = false)]
    pub default_open: bool,
    pub on_open_change: Option<EventHandler<bool>>,
    pub children: Element,
}

/// Provides context for a nested submenu level.
///
/// Wrap `DropdownMenuSubTrigger` and `DropdownMenuSubContent` with this
/// component. Hover-delay close (150 ms) is managed here; pointer re-entry
/// on either the trigger or the content cancels the pending close.
#[component]
pub fn DropdownMenuSub(props: DropdownMenuSubProps) -> Element {
    let (open, set_open) =
        use_controlled_state(props.open, props.default_open, props.on_open_change);

    let trigger_id_val = use_id("dm-sub-trigger");
    let positioner_id_val = use_id("dm-sub-positioner");
    let popup_id_val = use_id("dm-sub-popup");

    let trigger_id = use_signal(|| trigger_id_val.clone());
    let positioner_id = use_signal(|| positioner_id_val.clone());
    let popup_id = use_signal(|| popup_id_val.clone());

    // Generation counter: incrementing it cancels any in-flight close timer.
    let mut close_gen = use_signal(|| 0_u64);

    let cancel_close = use_callback(move |()| {
        let next = *close_gen.peek() + 1;
        close_gen.set(next);
    });

    let schedule_close = use_callback(move |()| {
        let new_gen = *close_gen.peek() + 1;
        close_gen.set(new_gen);
        let mut ev = dioxus::document::eval(
            "await new Promise(r => setTimeout(r, 150)); dioxus.send(true);",
        );
        spawn(async move {
            if ev.recv::<bool>().await.is_ok() && *close_gen.peek() == new_gen {
                set_open.call(false);
            }
        });
    });

    use_context_provider(|| DropdownMenuSubContext {
        open,
        set_open,
        trigger_id,
        positioner_id,
        popup_id,
        cancel_close,
        schedule_close,
    });

    rsx! { {props.children} }
}
