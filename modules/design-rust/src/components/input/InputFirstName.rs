use dioxus::prelude::*;

use super::InputGroup::{InputGroup, InputGroupSizeType};
use super::InputGroupAddon::{InputGroupAddon, InputGroupAddonAlignType};
use super::InputGroupInput::InputGroupInput;
use crate::icons::outline::users::sm::UserIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct InputFirstNameProps {
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
pub fn InputFirstName(props: InputFirstNameProps) -> Element {
    let placeholder = props.placeholder.unwrap_or_else(|| "First name".into());
    rsx! {
        InputGroup { size: props.size, class: props.group_class,
            InputGroupInput {
                placeholder: "{placeholder}",
                class: cn(["placeholder:text-sm", props.class.as_deref().unwrap_or_default()]),
                attributes: props.attributes,
            }
            InputGroupAddon { align: InputGroupAddonAlignType::InlineStart,
                UserIcon { class: props.icon_class }
            }
        }
    }
}
