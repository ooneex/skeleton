use std::collections::HashSet;

use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct FieldErrorProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub errors: Vec<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    #[props(default)]
    pub children: Option<Element>,
}

#[component]
pub fn FieldError(props: FieldErrorProps) -> Element {
    let FieldErrorProps {
        class,
        errors,
        attributes,
        children,
    } = props;

    let mut seen = HashSet::new();
    let mut unique_errors = Vec::new();
    for error in errors {
        if !error.is_empty() && seen.insert(error.clone()) {
            unique_errors.push(error);
        }
    }

    if children.is_none() && unique_errors.is_empty() {
        return rsx! {};
    }

    rsx! {
        div {
            role: "alert",
            "data-slot": "field-error",
            class: cn(["text-destructive text-sm font-normal", class.as_deref().unwrap_or_default()]),
            ..attributes,
            if let Some(children) = children {
                {children}
            } else if unique_errors.len() == 1 {
                {unique_errors.first().cloned().unwrap_or_default()}
            } else {
                ul { class: "ml-4 flex list-disc flex-col gap-1",
                    for error in unique_errors {
                        li { "{error}" }
                    }
                }
            }
        }
    }
}
