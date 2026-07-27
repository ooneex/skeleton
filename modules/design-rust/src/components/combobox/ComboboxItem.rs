use dioxus::prelude::*;

use super::comboboxContext::ComboboxContext;
use crate::icons::outline::ui_layout::sm::CheckIcon;
use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum ComboboxItemSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl ComboboxItemSizeType {
    pub fn as_str(self) -> &'static str {
        match self {
            Self::Xs => "xs",
            Self::Sm => "sm",
            Self::Md => "md",
            Self::Lg => "lg",
        }
    }

    pub fn item_class(self) -> &'static str {
        match self {
            Self::Xs => "text-xs",
            Self::Sm => "text-sm",
            Self::Md => "text-base",
            Self::Lg => "text-lg",
        }
    }

    pub fn icon_class(self) -> &'static str {
        match self {
            Self::Xs => "size-3",
            Self::Sm => "size-3.5",
            Self::Md => "size-4",
            Self::Lg => "size-4.5",
        }
    }
}

pub fn combobox_item_variants(size: ComboboxItemSizeType, class: Option<&str>) -> String {
    cn([
        "gap-2 rounded py-1.5 pr-8 pl-2 [&_svg:not([class*='size-'])]:size-3 relative flex w-full cursor-pointer items-center outline-hidden select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        size.item_class(),
        class.unwrap_or_default(),
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct ComboboxItemProps {
    pub value: String,
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: ComboboxItemSizeType,
    #[props(default)]
    pub disabled: bool,
    pub children: Element,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ComboboxItem(props: ComboboxItemProps) -> Element {
    let mut ctx = use_context::<ComboboxContext>();
    let value = props.value.clone();
    let is_selected = ctx.is_selected(&value);
    let is_highlighted = *ctx.highlighted_value.read() == value;

    let variants = combobox_item_variants(props.size, props.class.as_deref());
    let class = cn([
        variants.as_str(),
        if is_highlighted { "bg-accent" } else { "" },
    ]);

    rsx! {
        div {
            "data-slot": "combobox-item",
            "data-size": props.size.as_str(),
            role: "option",
            "aria-selected": if is_selected { "true" } else { "false" },
            tabindex: "0",
            class: class,
            onmouseenter: {
                let value = value.clone();
                move |_| { ctx.highlighted_value.set(value.clone()); }
            },
            onmouseleave: move |_| { ctx.highlighted_value.set(String::new()); },
            onclick: {
                let value = value.clone();
                move |_| {
                    if !props.disabled && !ctx.disabled {
                        ctx.select_value(value.clone());
                    }
                }
            },
            ..props.attributes,
            {props.children}
            if is_selected {
                span {
                    class: "pointer-events-none absolute right-2 flex size-4 items-center justify-center",
                    CheckIcon { class: props.size.icon_class() }
                }
            }
        }
    }
}
