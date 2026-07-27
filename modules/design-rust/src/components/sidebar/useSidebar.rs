use dioxus::prelude::*;

/// Open/collapsed state label.
#[derive(Clone, Copy, PartialEq, Eq)]
pub enum SidebarStateType {
    Expanded,
    Collapsed,
}

impl SidebarStateType {
    pub fn as_str(self) -> &'static str {
        match self {
            Self::Expanded => "expanded",
            Self::Collapsed => "collapsed",
        }
    }
}

/// Context provided by SidebarProvider.
#[derive(Clone, Copy)]
pub struct SidebarContextValue {
    pub state: SidebarStateType,
    pub open: Signal<bool>,
    pub set_open: Callback<bool>,
    pub open_mobile: Signal<bool>,
    pub set_open_mobile: Callback<bool>,
    pub is_mobile: ReadSignal<bool>,
    pub toggle_sidebar: Callback<()>,
}

/// Reads the sidebar context. Panics if used outside a SidebarProvider.
pub fn use_sidebar() -> SidebarContextValue {
    use_context::<SidebarContextValue>()
}
