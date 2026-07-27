use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum BadgeVariantType {
    #[default]
    Default,
    Secondary,
    Destructive,
    Outline,
    Ghost,
    Link,
    Success,
    Danger,
    Warning,
    Info,
    Neutral,
}

impl BadgeVariantType {
    pub fn class(&self) -> &'static str {
        match self {
            Self::Default => {
                "bg-primary/5 border-border-alt text-foreground [a]:hover:bg-primary/20"
            }
            Self::Secondary => {
                "bg-secondary/15 border-secondary text-secondary-800 [a]:hover:bg-secondary/20"
            }
            Self::Destructive => {
                "bg-destructive/10 border-destructive text-destructive [a]:hover:bg-destructive/20"
            }
            Self::Outline => {
                "bg-foreground/10 border-foreground text-foreground [a]:hover:bg-foreground/20"
            }
            Self::Ghost => "bg-muted/10 border-muted text-muted-foreground [a]:hover:bg-muted/20",
            Self::Link => {
                "bg-primary/10 border-primary text-foreground underline-offset-4 hover:underline [a]:hover:bg-primary/20"
            }
            Self::Success => {
                "bg-success-100 border-success-500 text-success-700 [a]:hover:bg-success-200"
            }
            Self::Danger => {
                "bg-danger-100 border-danger-500 text-danger-700 [a]:hover:bg-danger-200"
            }
            Self::Warning => {
                "bg-warning-100 border-warning-500 text-warning-700 [a]:hover:bg-warning-200"
            }
            Self::Info => "bg-info-100 border-info-500 text-info-700 [a]:hover:bg-info-200",
            Self::Neutral => {
                "bg-neutral-100 border-neutral-400 text-neutral-700 [a]:hover:bg-neutral-200"
            }
        }
    }

    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Default => "default",
            Self::Secondary => "secondary",
            Self::Destructive => "destructive",
            Self::Outline => "outline",
            Self::Ghost => "ghost",
            Self::Link => "link",
            Self::Success => "success",
            Self::Danger => "danger",
            Self::Warning => "warning",
            Self::Info => "info",
            Self::Neutral => "neutral",
        }
    }
}

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum BadgeSizeType {
    #[default]
    Xs,
    Sm,
    Md,
    Lg,
}

impl BadgeSizeType {
    pub fn class(&self) -> &'static str {
        match self {
            Self::Xs => "gap-1 px-2.5 py-0.5 text-2xs [&>svg]:size-2.5!",
            Self::Sm => "gap-1 px-3 py-0.5 text-xs [&>svg]:size-3!",
            Self::Md => "gap-1.5 px-3.5 py-1 text-sm [&>svg]:size-3.5!",
            Self::Lg => "gap-1.5 px-4 py-1 text-base [&>svg]:size-4!",
        }
    }

    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Xs => "xs",
            Self::Sm => "sm",
            Self::Md => "md",
            Self::Lg => "lg",
        }
    }
}

pub fn badge_variants(
    variant: BadgeVariantType,
    size: BadgeSizeType,
    class: Option<&str>,
) -> String {
    cn([
        "rounded-full border-none font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive overflow-hidden group/badge leading-relaxed",
        variant.class(),
        size.class(),
        class.unwrap_or_default(),
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct BadgeProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub variant: BadgeVariantType,
    #[props(default)]
    pub size: BadgeSizeType,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn Badge(props: BadgeProps) -> Element {
    rsx! {
        span {
            "data-slot": "badge",
            "data-variant": props.variant.as_str(),
            "data-size": props.size.as_str(),
            class: badge_variants(props.variant, props.size, props.class.as_deref()),
            ..props.attributes,
            {props.children}
        }
    }
}
