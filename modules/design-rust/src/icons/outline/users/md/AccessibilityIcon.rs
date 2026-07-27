use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AccessibilityIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AccessibilityIcon(props: AccessibilityIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 8C17.3807 8 18.5 6.88071 18.5 5.5C18.5 4.11929 17.3807 3 16 3C14.6193 3 13.5 4.11929 13.5 5.5C13.5 6.88071 14.6193 8 16 8Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3 9.99918L12 10.9997L11 30.0002H14L15 21H17L18 30.0002H21L20 10.9997L29 9.99918",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
