use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum ButtonVariantType {
    #[default]
    Default,
    Outline,
    Secondary,
    Ghost,
    Destructive,
    Link,
}

impl ButtonVariantType {
    pub fn class(&self) -> &'static str {
        match self {
            Self::Default => "bg-primary text-primary-foreground hover:bg-primary/95",
            Self::Outline => "ring-1 ring-ring bg-background hover:bg-muted aria-expanded:bg-muted",
            Self::Secondary => {
                "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground"
            }
            Self::Ghost => "hover:bg-muted aria-expanded:bg-muted",
            Self::Destructive => {
                "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 text-destructive"
            }
            Self::Link => "text-primary underline-offset-4 hover:underline",
        }
    }
}

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum ButtonSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
    Icon,
    IconXs,
    IconSm,
    IconLg,
}

impl ButtonSizeType {
    pub fn class(&self) -> &'static str {
        match self {
            Self::Xs => {
                "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3"
            }
            Self::Sm => {
                "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 text-sm in-data-[slot=button-group]:rounded has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5"
            }
            Self::Md => {
                "h-9 gap-1.5 px-2.5 text-base in-data-[slot=button-group]:rounded has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-4"
            }
            Self::Lg => {
                "h-10 gap-1.5 px-2.5 text-lg has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-4.5"
            }
            Self::Icon => "size-9",
            Self::IconXs => {
                "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded [&_svg:not([class*='size-'])]:size-3"
            }
            Self::IconSm => {
                "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded"
            }
            Self::IconLg => "size-10",
        }
    }
}

pub fn button_variants(
    variant: ButtonVariantType,
    size: ButtonSizeType,
    class: Option<&str>,
) -> String {
    cn([
        "focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 rounded bg-clip-padding text-sm focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none cursor-pointer tracking-wide leading-relaxed",
        variant.class(),
        size.class(),
        class.unwrap_or_default(),
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct ButtonProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub variant: ButtonVariantType,
    #[props(default)]
    pub size: ButtonSizeType,
    #[props(default)]
    pub onclick: Option<EventHandler<MouseEvent>>,
    #[props(default)]
    pub onkeydown: Option<EventHandler<KeyboardEvent>>,
    #[props(default)]
    pub onmouseenter: Option<EventHandler<MouseEvent>>,
    #[props(default)]
    pub onmouseleave: Option<EventHandler<MouseEvent>>,
    #[props(default)]
    pub onfocus: Option<EventHandler<FocusEvent>>,
    #[props(default)]
    pub onblur: Option<EventHandler<FocusEvent>>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn Button(props: ButtonProps) -> Element {
    let onclick = props.onclick;
    let onkeydown = props.onkeydown;
    let onmouseenter = props.onmouseenter;
    let onmouseleave = props.onmouseleave;
    let onfocus = props.onfocus;
    let onblur = props.onblur;

    rsx! {
        button {
            "data-slot": "button",
            class: button_variants(props.variant, props.size, props.class.as_deref()),
            onclick: move |event| {
                if let Some(handler) = onclick {
                    handler.call(event);
                }
            },
            onkeydown: move |event| {
                if let Some(handler) = onkeydown {
                    handler.call(event);
                }
            },
            onmouseenter: move |event| {
                if let Some(handler) = onmouseenter {
                    handler.call(event);
                }
            },
            onmouseleave: move |event| {
                if let Some(handler) = onmouseleave {
                    handler.call(event);
                }
            },
            onfocus: move |event| {
                if let Some(handler) = onfocus {
                    handler.call(event);
                }
            },
            onblur: move |event| {
                if let Some(handler) = onblur {
                    handler.call(event);
                }
            },
            ..props.attributes,
            {props.children}
        }
    }
}
