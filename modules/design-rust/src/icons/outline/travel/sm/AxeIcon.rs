use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AxeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AxeIcon(props: AxeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5.41406 9.414L3.25245 7.35864C2.51878 6.66103 2.5041 5.49593 3.21997 4.78005V4.78005C3.92584 4.07418 5.0712 4.07712 5.77343 4.78662L7.38415 6.414",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M9.77294 13.6714L18.5 22.5L19.5 21.5L21 20L13 11.8209",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M18 8.8L8.3 14.3L6.5 12.5L4.7 10.7L10.2 1C11.2243 1 12.2386 1.20175 13.1849 1.59374C14.1313 1.98573 14.9911 2.56027 15.7154 3.28457C16.4397 4.00886 17.0143 4.86873 17.4063 5.81507C17.7983 6.76141 18 7.77569 18 8.8Z",
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
