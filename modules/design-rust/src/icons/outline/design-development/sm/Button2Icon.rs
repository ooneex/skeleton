use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Button2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Button2Icon(props: Button2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17.447 20.5217L13.4482 16.4167L13.9175 16.8985",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16.2864 13.5551L7.77574 10.7011L10.6295 19.2119L16.2864 13.5551Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 14V14C22.1046 14 23 13.1046 23 12V6C23 4.89543 22.1046 4 21 4L3 4C1.89543 4 1 4.89543 1 6L1 12C1 13.1046 1.89543 14 3 14H4.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
