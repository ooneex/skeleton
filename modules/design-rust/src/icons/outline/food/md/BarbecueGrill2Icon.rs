use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BarbecueGrill2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BarbecueGrill2Icon(props: BarbecueGrill2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 6.51296V2H20V6.51296",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16 12C17.1046 12 18 11.3284 18 10.5C18 9.67157 17.1046 9 16 9C14.8954 9 14 9.67157 14 10.5C14 11.3284 14.8954 12 16 12Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M4.37805 15C5.71018 9.82432 10.4085 6 16 6C21.5915 6 26.2898 9.82432 27.6219 15",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6.03126 30L6.00001 30L8 26L7.92797 26.1441",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M25.9688 30L26 30L24 26L24.1052 26.2104",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M27.9772 19.0016H28C27.4901 24.6031 22.3105 29 15.9982 29C9.68586 29 4.5099 24.6016 4 19H4.02352",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 15H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 19H19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
