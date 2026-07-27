use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserLaptopIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserLaptopIcon(props: UserLaptopIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 12C18.7614 12 21 9.76142 21 7C21 4.23858 18.7614 2 16 2C13.2386 2 11 4.23858 11 7C11 9.76142 13.2386 12 16 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 16C9.373 16 4 21.1741 4 27.5559C4.66666 27.7163 5.33332 27.8634 6 27.9972",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 29H25.8261L30 20H18.1739L14 29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 29L10 29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
