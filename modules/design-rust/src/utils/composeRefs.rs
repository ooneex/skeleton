use std::rc::Rc;

use dioxus::prelude::*;

/// Where the handle of a freshly mounted element can be delivered: into a
/// signal the component reads back later, or to a handler that reacts to the
/// mount itself — the two shapes Dioxus offers in place of a React ref object
/// and a React callback ref.
#[derive(Clone, Copy)]
pub enum ElementRefType {
    /// Stores the handle so it can be read after mount.
    Signal(Signal<Option<Rc<MountedData>>>),
    /// Hands the handle to a caller-supplied handler.
    Handler(EventHandler<Rc<MountedData>>),
}

impl From<Signal<Option<Rc<MountedData>>>> for ElementRefType {
    fn from(signal: Signal<Option<Rc<MountedData>>>) -> Self {
        Self::Signal(signal)
    }
}

impl From<EventHandler<Rc<MountedData>>> for ElementRefType {
    fn from(handler: EventHandler<Rc<MountedData>>) -> Self {
        Self::Handler(handler)
    }
}

/// Merge several element refs into the single `onmounted` handler an element
/// accepts, so a component can keep its own handle while still forwarding it to
/// whatever its caller passed in. Refs that are not set are skipped.
///
/// Dioxus reports mounts only, with no unmount counterpart, so — unlike the
/// React original — the refs are filled when the element appears and never
/// reset when it goes away.
pub fn compose_refs(refs: Vec<Option<ElementRefType>>) -> EventHandler<MountedEvent> {
    EventHandler::new(move |event: MountedEvent| {
        let element = event.data();

        for &target in refs.iter().flatten() {
            match target {
                ElementRefType::Signal(mut signal) => signal.set(Some(element.clone())),
                ElementRefType::Handler(handler) => handler.call(element.clone()),
            }
        }
    })
}
