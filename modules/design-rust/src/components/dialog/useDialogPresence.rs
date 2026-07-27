use dioxus::prelude::*;

use super::DialogContext::use_dialog_context;

/// Registers a title's presence with the surrounding dialog context and returns
/// the context-provided `title_id` to wire up `aria-labelledby`. Shared by the
/// title primitives of dialog and alert-dialog.
pub fn use_register_dialog_title() -> Option<String> {
    let ctx = use_dialog_context()?;
    let mut has_title = ctx.has_title;

    use_effect(move || {
        has_title.set(true);
    });

    use_drop(move || {
        has_title.set(false);
    });

    Some(ctx.title_id.read().clone())
}

/// Registers a description's presence with the surrounding dialog context and
/// returns the context-provided `description_id` to wire up `aria-describedby`.
pub fn use_register_dialog_description() -> Option<String> {
    let ctx = use_dialog_context()?;
    let mut has_description = ctx.has_description;

    use_effect(move || {
        has_description.set(true);
    });

    use_drop(move || {
        has_description.set(false);
    });

    Some(ctx.description_id.read().clone())
}
