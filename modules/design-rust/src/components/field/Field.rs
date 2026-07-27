use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum FieldOrientationType {
    #[default]
    Vertical,
    Horizontal,
    Responsive,
}

impl FieldOrientationType {
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Vertical => "vertical",
            Self::Horizontal => "horizontal",
            Self::Responsive => "responsive",
        }
    }

    pub fn class(&self) -> &'static str {
        match self {
            Self::Vertical => "flex-col [&>*]:w-full [&>.sr-only]:w-auto",
            Self::Horizontal => {
                "flex-row items-center [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
            }
            Self::Responsive => {
                "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
            }
        }
    }
}

pub fn field_variants(orientation: FieldOrientationType, class: Option<&str>) -> String {
    cn([
        "data-[invalid=true]:text-destructive gap-3 group/field flex w-full",
        orientation.class(),
        class.unwrap_or_default(),
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct FieldProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub orientation: FieldOrientationType,
    #[props(extends = fieldset, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn Field(props: FieldProps) -> Element {
    rsx! {
        fieldset {
            "data-slot": "field",
            "data-orientation": props.orientation.as_str(),
            class: field_variants(props.orientation, props.class.as_deref()),
            ..props.attributes,
            {props.children}
        }
    }
}
