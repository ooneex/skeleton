use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AtmMachineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AtmMachineIcon(props: AtmMachineIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M44 37H4V44H44V37Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M34 2C37.3137 2 40 4.68629 40 8V34H8V8C8 4.68629 10.6863 2 14 2H34ZM13 7L35 7V17L13 17L13 7ZM16.5 21H13V24H16.5V21ZM23 21V24H19.5V21H23ZM23 27H19.5V30H23V27ZM16.5 27V30H13V27H16.5ZM26 23.5V21H35V23.5L33 23.75V24H33.5V30H27.5V24H28V23.75L26 23.5Z",
                fill: "currentColor",
            }
        }
    }
}
