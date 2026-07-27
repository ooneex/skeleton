use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Plane2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Plane2Icon(props: Plane2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.26036 8.92725L19.8951 5.57936C20.909 5.31068 21.9563 5.8808 22.281 6.87825C22.6321 7.95663 22.0058 9.10864 20.9099 9.40037L16.362 10.611L14.1509 17L11.5 17L12.0153 11.7757L7.57823 12.9646C6.76326 13.183 5.89891 12.8664 5.41773 12.1734L2.37994 7.79797L4.868 7.1313L7.26036 8.92725Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9.10057 5.33963L7.82896 3.56565L10.1246 2.24024L12.6136 4.39701",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M2 21H22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
