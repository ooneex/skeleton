use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct FieldDescriptionProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = p, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn FieldDescription(props: FieldDescriptionProps) -> Element {
    rsx! {
        p {
            "data-slot": "field-description",
            class: cn([
                "text-muted-foreground text-left text-sm [[data-variant=legend]+&]:-mt-1.5 leading-normal font-normal group-has-data-[orientation=horizontal]/field:text-balance",
                "last:mt-0 nth-last-2:-mt-1",
                "[&>a:hover]:text-foreground [&>a]:underline [&>a]:underline-offset-4",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
