use dioxus::prelude::*;

/// Own a piece of state that can also be driven from the outside: mirrors
/// `value` when it is set, otherwise keeps its own state seeded with
/// `default_value`, and reports every change through `on_change`.
pub fn use_controlled_state<T: Clone + PartialEq + 'static>(
    value: Option<T>,
    default_value: T,
    on_change: Option<EventHandler<T>>,
) -> (Signal<T>, Callback<T>) {
    let mut state = use_signal(|| value.clone().unwrap_or(default_value));

    let controlled = value;
    use_effect(use_reactive!(|(controlled,)| {
        if let Some(controlled) = controlled {
            state.set(controlled);
        }
    }));

    let set_state = use_callback(move |next: T| {
        state.set(next.clone());

        if let Some(on_change) = on_change {
            on_change.call(next);
        }
    });

    (state, set_state)
}
