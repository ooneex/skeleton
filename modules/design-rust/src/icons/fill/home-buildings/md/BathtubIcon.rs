use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BathtubIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BathtubIcon(props: BathtubIconProps) -> Element {
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
                d: "M12 3C10.3431 3 9 4.34315 9 6V17H7V6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H15V6C15 4.34315 13.6569 3 12 3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26.3675 30.2649L28.2649 29.6325L26.9487 25.6838L25.0513 26.3162L26.3675 30.2649Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5.63247 30.2649L3.73511 29.6325L5.05134 25.6838L6.9487 26.3162L5.63247 30.2649Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 17L31 18C31 24.0751 26.0751 29 20 29L12 29C5.92487 29 1 24.0751 1 18L1 17C1 15.8954 1.89543 15 3 15L29 15C30.1046 15 31 15.8954 31 17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.4286 6C19.401 6 21 7.59898 21 9.57143C21 10.3604 20.3604 11 19.5714 11L12.4286 11C11.6396 11 11 10.3604 11 9.57143C11 7.59898 12.599 6 14.5714 6L17.4286 6Z",
                fill: "currentColor",
            }
        }
    }
}
