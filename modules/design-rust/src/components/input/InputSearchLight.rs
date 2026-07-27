use dioxus::prelude::*;

use super::InputGroup::{InputGroup, InputGroupSizeType};
use super::InputGroupAddon::{InputGroupAddon, InputGroupAddonAlignType};
use super::InputGroupInput::InputGroupInput;
use crate::icons::outline::filtering_sorting::sm::MagnifierIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct InputSearchLightProps {
    #[props(default)]
    pub group_class: Option<String>,
    #[props(default)]
    pub icon_class: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(default = InputGroupSizeType::Md)]
    pub size: InputGroupSizeType,
    #[props(default)]
    pub placeholder: Option<String>,
    #[props(extends = input, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InputSearchLight(props: InputSearchLightProps) -> Element {
    let placeholder = props.placeholder.unwrap_or_else(|| "Search...".into());
    rsx! {
        InputGroup {
            size: props.size,
            class: cn([
                "border-none w-fit has-[[data-slot=input-group-control]:focus-visible]:border-transparent has-[[data-slot=input-group-control]:focus-visible]:ring-0",
                props.group_class.as_deref().unwrap_or_default(),
            ]),
            InputGroupInput {
                class: "p-0 placeholder:text-sm",
                placeholder: "{placeholder}",
                attributes: props.attributes,
            }
            InputGroupAddon { align: InputGroupAddonAlignType::InlineStart, class: "p-0",
                MagnifierIcon { class: props.icon_class }
            }
        }
    }
}
