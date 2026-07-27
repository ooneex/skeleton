use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserHeartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserHeartIcon(props: UserHeartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 16C15.6632 16 15.3297 16.0134 15 16.0396C8.84082 16.529 4 21.4984 4 27.5559C8.1664 28.5587 12.3332 29.0393 16.5 28.9975",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 12C18.7614 12 21 9.76142 21 7C21 4.23858 18.7614 2 16 2C13.2386 2 11 4.23858 11 7C11 9.76142 13.2386 12 16 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 30C25.5526 29.2941 31 25.3821 31 21.7962C31 19.6998 29.3116 18 27.2312 18C25.8592 18 24.8344 18.8668 24 19.8395C23.167 18.8654 22.1408 18 20.7688 18C18.687 18 17 19.6998 17 21.7962C17 25.3821 22.4474 29.2941 24 30Z",
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
