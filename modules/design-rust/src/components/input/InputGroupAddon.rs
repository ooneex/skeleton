use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum InputGroupAddonAlignType {
    #[default]
    InlineStart,
    InlineEnd,
    BlockStart,
    BlockEnd,
}

impl InputGroupAddonAlignType {
    pub fn as_str(self) -> &'static str {
        match self {
            Self::InlineStart => "inline-start",
            Self::InlineEnd => "inline-end",
            Self::BlockStart => "block-start",
            Self::BlockEnd => "block-end",
        }
    }

    pub fn class(self) -> &'static str {
        match self {
            Self::InlineStart => {
                "pl-2 has-[>button]:ml-[-0.25rem] has-[>kbd]:ml-[-0.15rem] order-first"
            }
            Self::InlineEnd => {
                "pr-2 has-[>button]:mr-[-0.25rem] has-[>kbd]:mr-[-0.15rem] order-last"
            }
            Self::BlockStart => {
                "px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start"
            }
            Self::BlockEnd => {
                "px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start"
            }
        }
    }
}

pub fn input_group_addon_variants(align: InputGroupAddonAlignType, class: Option<&str>) -> String {
    cn([
        "text-foreground h-auto gap-2 py-1.5 text-base font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none",
        align.class(),
        class.unwrap_or_default(),
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct InputGroupAddonProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub align: InputGroupAddonAlignType,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn InputGroupAddon(props: InputGroupAddonProps) -> Element {
    rsx! {
        div {
            role: "presentation",
            "data-slot": "input-group-addon",
            "data-align": props.align.as_str(),
            class: input_group_addon_variants(props.align, props.class.as_deref()),
            ..props.attributes,
            {props.children}
        }
    }
}
