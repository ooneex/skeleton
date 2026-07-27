use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DoorOpen2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DoorOpen2Icon(props: DoorOpen2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6.33401 2H5V25.6197L20 31.4627V7.38304L6.33401 2ZM17 17H15V21H17V17Z",
                fill: "currentColor",
            }
            path {
                d: "M22 26H27V2H11.7911L22 6.02127V26Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
