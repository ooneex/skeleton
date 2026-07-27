use dioxus::prelude::*;

/// Stops a mouse press from collapsing the document selection, so editor
/// popovers can act on the text still selected in the editable area. Attach the
/// returned handler to `onmousedown`.
pub fn use_preserve_selection() -> EventHandler<MouseEvent> {
    use_hook(|| {
        EventHandler::new(|event: MouseEvent| {
            event.prevent_default();
        })
    })
}
