use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CurvedArrowDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CurvedArrowDownIcon(props: CurvedArrowDownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.49998 4C6.46242 4.00001 4 6.46244 4 9.5V15H2V9.5C2 5.35787 5.35785 2.00001 9.49997 2C13.6421 1.99999 17 5.35785 17 9.5V21.5H15V9.5C15 6.46243 12.5376 3.99999 9.49998 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.9999 15.0858L15.9999 20.0858L20.9999 15.0858L22.4141 16.5L15.9999 22.9142L9.58569 16.5L10.9999 15.0858Z",
                fill: "currentColor",
            }
        }
    }
}
