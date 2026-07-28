use dioxus::prelude::*;

/// Shared state of a drawer, provided by DrawerContent.
#[derive(Clone, Copy)]
pub(crate) struct DrawerContextValue {
    /// Mirrors the `open`/`dismiss` pair the TypeScript `drawerContext` exposes
    /// (DrawerContent.tsx:50). No child consumes either one there or here, but
    /// the shape is kept so the two modules stay comparable.
    #[allow(dead_code)]
    pub(crate) open: Signal<bool>,
    #[allow(dead_code)]
    pub(crate) dismiss: Callback<()>,
    pub(crate) title_id: Signal<String>,
    pub(crate) description_id: Signal<String>,
    pub(crate) has_title: Signal<bool>,
    pub(crate) has_description: Signal<bool>,
    /// Stable element ID of the drawer panel, used for focus management.
    pub(crate) popup_id: Signal<String>,
}

pub(crate) fn use_drawer_context() -> Option<DrawerContextValue> {
    try_use_context::<DrawerContextValue>()
}

/// Registers the title presence; returns the title_id to wire aria-labelledby.
pub fn use_register_drawer_title() -> Option<String> {
    let ctx = use_drawer_context()?;
    let mut has_title = ctx.has_title;
    use_effect(move || {
        has_title.set(true);
    });
    use_drop(move || {
        has_title.set(false);
    });
    Some(ctx.title_id.read().clone())
}

/// Registers the description presence; returns description_id.
pub fn use_register_drawer_description() -> Option<String> {
    let ctx = use_drawer_context()?;
    let mut has_description = ctx.has_description;
    use_effect(move || {
        has_description.set(true);
    });
    use_drop(move || {
        has_description.set(false);
    });
    Some(ctx.description_id.read().clone())
}

/// Returns the drawer panel element ID from the nearest DrawerContent context.
pub fn use_drawer_content_ref() -> Option<String> {
    Some(use_drawer_context()?.popup_id.read().clone())
}
