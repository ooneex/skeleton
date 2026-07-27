use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserContactIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserContactIcon(props: UserContactIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M41 40L41 8C41 5.23858 38.7614 3 36 3L12 3C9.23858 3 7 5.23858 7 8L7 40C7 42.7614 9.23858 45 12 45L36 45C38.7614 45 41 42.7614 41 40Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 20C26.4853 20 28.5 17.9853 28.5 15.5C28.5 13.0147 26.4853 11 24 11C21.5147 11 19.5 13.0147 19.5 15.5C19.5 17.9853 21.5147 20 24 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 25C17.9252 25 13 29.3781 13 34.778C20.3329 36.4073 27.6671 36.4073 35 34.778C35 29.3781 30.0748 25 24 25Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
