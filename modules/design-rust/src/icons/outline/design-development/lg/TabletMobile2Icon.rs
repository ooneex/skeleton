use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TabletMobile2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TabletMobile2Icon(props: TabletMobile2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 39H10C7.23858 39 5 36.7614 5 34V8C5 5.23858 7.23858 3 10 3H29C31.7614 3 34 5.23858 34 8V16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M39 21H29C26.7909 21 25 22.7909 25 25V41C25 43.2091 26.7909 45 29 45H39C41.2091 45 43 43.2091 43 41V25C43 22.7909 41.2091 21 39 21Z",
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
