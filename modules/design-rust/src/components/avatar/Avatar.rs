use dioxus::prelude::*;

use crate::utils::cn;

/// Image-loading status shared between `AvatarImage` and `AvatarFallback`.
#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum AvatarImageStatusType {
    #[default]
    Idle,
    Loaded,
    Error,
}

/// Visual size of the avatar.
#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum AvatarSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
    Xl,
    TwoXl,
    ThreeXl,
}

impl AvatarSizeType {
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Xs => "xs",
            Self::Sm => "sm",
            Self::Md => "md",
            Self::Lg => "lg",
            Self::Xl => "xl",
            Self::TwoXl => "2xl",
            Self::ThreeXl => "3xl",
        }
    }

    fn size_class(&self) -> &'static str {
        match self {
            Self::Xs => "size-6",
            Self::Sm => "size-8",
            Self::Md => "size-10",
            Self::Lg => "size-12",
            Self::Xl => "size-16",
            Self::TwoXl => "size-20",
            Self::ThreeXl => "size-28",
        }
    }
}

/// Computes the avatar root class for a given `size` and extra `class`.
pub fn avatar_variants(size: AvatarSizeType, class: &str) -> String {
    cn([
        "rounded-full after:rounded-full after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken",
        size.size_class(),
        class,
    ])
}

/// Shared state between an avatar root and its sub-components.
#[derive(Clone, Copy)]
pub(crate) struct AvatarContext {
    pub(crate) status: Signal<AvatarImageStatusType>,
}

#[derive(Props, Clone, PartialEq)]
pub struct AvatarProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: Option<AvatarSizeType>,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn Avatar(props: AvatarProps) -> Element {
    let size = props.size.unwrap_or_default();
    let status = use_signal(|| AvatarImageStatusType::Idle);

    use_context_provider(|| AvatarContext { status });

    rsx! {
        span {
            "data-slot": "avatar",
            "data-size": size.as_str(),
            class: avatar_variants(size, props.class.as_deref().unwrap_or_default()),
            ..props.attributes,
            {props.children}
        }
    }
}
