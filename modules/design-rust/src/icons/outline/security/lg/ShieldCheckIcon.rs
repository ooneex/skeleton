use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShieldCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShieldCheckIcon(props: ShieldCheckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 24.8421L20.25 30L33 16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7 8C12.1 8 18.9 8.2 24 4C29.1 8.2 35.9 8 41 8V25.4286C41 38.2857 24 44 24 44C24 44 7 38.2857 7 25.4286V8Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
