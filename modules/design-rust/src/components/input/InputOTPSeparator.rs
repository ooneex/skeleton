use dioxus::prelude::*;

use crate::icons::outline::ui_layout::sm::MinusIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct InputOTPSeparatorProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InputOTPSeparator(props: InputOTPSeparatorProps) -> Element {
    rsx! {
        div {
            "data-slot": "input-otp-separator",
            "aria-hidden": "true",
            class: cn([
                "flex items-center text-muted-foreground",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            MinusIcon { class: "size-4" }
        }
    }
}
