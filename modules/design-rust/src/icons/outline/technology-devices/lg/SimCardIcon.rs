use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SimCardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SimCardIcon(props: SimCardIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 43L36 43C38.7614 43 41 40.7614 41 38L41 10C41 7.23858 38.7614 5 36 5L21.1696 5.00001C19.8698 5.00001 18.6211 5.50619 17.6881 6.41126L8.51849 15.3069C7.54782 16.2486 7 17.5433 7 18.8956L7 38C7 40.7614 9.23857 43 12 43Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M34 36L34 21L29 21L29 31L24 31L24 36L34 36Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 21L14 36L19 36L19 26L24 26L24 21L14 21Z",
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
