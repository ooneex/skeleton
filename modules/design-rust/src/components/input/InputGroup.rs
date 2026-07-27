use dioxus::prelude::*;

use super::Input::InputSizeType;
use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum InputGroupSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl InputGroupSizeType {
    pub fn class(self) -> &'static str {
        match self {
            Self::Xs => "h-6 rounded-[min(var(--radius-md),8px)]",
            Self::Sm => "h-8 rounded-[min(var(--radius-md),10px)]",
            Self::Md => "h-9",
            Self::Lg => "h-10",
        }
    }

    pub fn as_str(self) -> &'static str {
        match self {
            Self::Xs => "xs",
            Self::Sm => "sm",
            Self::Md => "md",
            Self::Lg => "lg",
        }
    }

    pub fn to_input_size(self) -> InputSizeType {
        match self {
            Self::Xs => InputSizeType::Xs,
            Self::Sm => InputSizeType::Sm,
            Self::Md => InputSizeType::Md,
            Self::Lg => InputSizeType::Lg,
        }
    }
}

pub fn input_group_variants(size: InputGroupSizeType, class: Option<&str>) -> String {
    cn([
        "border-border hover:border-ring-active has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive rounded border transition-[color,box-shadow] has-[[data-slot][aria-invalid=true]]:ring-[3px] has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto",
        size.class(),
        class.unwrap_or_default(),
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct InputGroupProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: InputGroupSizeType,
    #[props(extends = fieldset, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn InputGroup(props: InputGroupProps) -> Element {
    rsx! {
        fieldset {
            "data-slot": "input-group",
            "data-size": props.size.as_str(),
            class: input_group_variants(props.size, props.class.as_deref()),
            ..props.attributes,
            {props.children}
        }
    }
}
