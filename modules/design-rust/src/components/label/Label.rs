use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum LabelSizeType {
    #[default]
    Xs,
    Sm,
    Md,
    Lg,
}

impl LabelSizeType {
    pub fn class(&self) -> &'static str {
        match self {
            Self::Xs => "text-xs",
            Self::Sm => "text-sm",
            Self::Md => "text-base",
            Self::Lg => "text-lg",
        }
    }
}

pub fn label_variants(size: LabelSizeType, class: Option<&str>) -> String {
    cn([
        "gap-2 leading-relaxed font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
        size.class(),
        class.unwrap_or_default(),
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct LabelProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: LabelSizeType,
    #[props(default = false)]
    pub required: bool,
    #[props(extends = label, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn Label(props: LabelProps) -> Element {
    let inner_class = cn([
        "font-semibold uppercase tracking-wider text-muted-foreground",
        &label_variants(props.size, props.class.as_deref()),
        "inline-flex items-baseline gap-0.5",
    ]);
    let required_class = cn([&label_variants(props.size, None), "text-destructive"]);

    rsx! {
        label {
            "data-slot": "label",
            class: label_variants(props.size, props.class.as_deref()),
            ..props.attributes,
            span { class: inner_class,
                {props.children}
                if props.required {
                    span { class: required_class, "*" }
                }
            }
        }
    }
}
