use dioxus::prelude::*;

/// Run several event handlers in order, skipping the ones that are not set.
pub fn chain_handlers<T: Clone + 'static>(
    handlers: Vec<Option<EventHandler<T>>>,
) -> EventHandler<T> {
    EventHandler::new(move |event: T| {
        for handler in handlers.iter().flatten() {
            handler.call(event.clone());
        }
    })
}
