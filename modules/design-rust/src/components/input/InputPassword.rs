use dioxus::prelude::*;

use super::InputGroup::{InputGroup, InputGroupSizeType};
use super::InputGroupAddon::{InputGroupAddon, InputGroupAddonAlignType};
use super::InputGroupInput::InputGroupInput;
use crate::icons::outline::design_development::sm::LockPasswordIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct InputPasswordProps {
    #[props(default)]
    pub group_class: Option<String>,
    #[props(default)]
    pub icon_class: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: InputGroupSizeType,
    #[props(default)]
    pub placeholder: Option<String>,
    #[props(extends = input, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InputPassword(props: InputPasswordProps) -> Element {
    let placeholder = props.placeholder.unwrap_or_else(|| "Password".into());
    rsx! {
        InputGroup { size: props.size, class: props.group_class,
            InputGroupInput {
                r#type: "password",
                placeholder: "{placeholder}",
                class: cn(["placeholder:text-sm", props.class.as_deref().unwrap_or_default()]),
                attributes: props.attributes,
            }
            InputGroupAddon { align: InputGroupAddonAlignType::InlineStart,
                LockPasswordIcon { class: props.icon_class }
            }
        }
    }
}
