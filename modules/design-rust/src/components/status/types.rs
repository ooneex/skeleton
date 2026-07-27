use dioxus::prelude::*;

use crate::components::badge::BadgeSizeType;

/// Props shared by every `Status*Badge` component — mirrors the TS
/// `StatusBadgePropsType` which is `HTMLAttributes<span>` (minus `children`)
/// merged with `{ size?: BadgeSizeType, children?: ReactNode }`.
///
/// **Dependency**: `BadgeSizeType` is exported by `crate::components::badge`,
/// which is ported by a separate agent. This file will not compile until that
/// module is available.
#[derive(Props, Clone, PartialEq)]
pub struct StatusBadgeProps {
    /// Badge size forwarded to the underlying `Badge` component.
    #[props(default)]
    pub size: Option<BadgeSizeType>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    /// Optional label override. Defaults to the status name (e.g. "Active").
    #[props(default)]
    pub children: Option<Element>,
}
