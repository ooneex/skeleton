use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CloudSnowIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CloudSnowIcon(props: CloudSnowIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 29V20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12.1029 26.75L19.8971 22.25",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12.1029 22.25L19.8971 26.75",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24.5 27H25.5C28.538 27 31 24.538 31 21.5C31 18.622 28.789 16.265 25.974 16.024C25.983 15.849 26 15.677 26 15.5C26 9.701 21.299 5 15.5 5C9.753 5 5.091 9.619 5.008 15.346C2.675 16.168 1 18.386 1 21C1 24.314 3.686 27 7 27H7.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
