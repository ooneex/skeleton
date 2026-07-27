use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LaptopClockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LaptopClockIcon(props: LaptopClockIconProps) -> Element {
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
                d: "M23 18.5C27.1421 18.5 30.5 15.1421 30.5 11C30.5 6.85786 27.1421 3.5 23 3.5C18.8579 3.5 15.5 6.85786 15.5 11C15.5 15.1421 18.8579 18.5 23 18.5ZM24 7H22V11.5352L26.2774 14.3868L27.3868 12.7227L24 10.4648V7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 5C5.89543 5 5 5.89543 5 7V21H3V7C3 4.79086 4.79086 3 7 3H15.5V5H7Z",
                fill: "currentColor",
            }
            path {
                d: "M1 23V26C1 27.1046 1.89543 28 3 28H29C30.1046 28 31 27.1046 31 26V23H22C22 23.5523 21.5523 24 21 24H11C10.4477 24 10 23.5523 10 23H1Z",
                fill: "currentColor",
            }
        }
    }
}
