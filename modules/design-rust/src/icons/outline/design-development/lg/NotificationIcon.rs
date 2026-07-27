use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NotificationIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NotificationIcon(props: NotificationIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M39 15C42.3137 15 45 12.3137 45 9C45 5.68629 42.3137 3 39 3C35.6863 3 33 5.68629 33 9C33 12.3137 35.6863 15 39 15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M29 5H10C7.23858 5 5 7.23858 5 10V38C5 40.7614 7.23858 43 10 43H38C40.7614 43 43 40.7614 43 38V19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
