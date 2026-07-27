use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Shovel2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Shovel2Icon(props: Shovel2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17 30.9948L34.4948 13.5L34.1185 13.8764",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M34.4948 13.5C32.1515 11.1566 32.1515 7.35807 34.4948 5.01472L36.0095 3.50002L44.4948 11.9853L42.9801 13.5C40.6367 15.8434 36.8382 15.8434 34.4948 13.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.3015 19.5512L8.90777 24.945C7.32509 26.5277 6.13956 28.4625 5.44817 30.5913C4.82661 32.5051 4.61948 34.5293 4.84056 36.5293L5.5 42.4949L11.4631 43.1571C13.468 43.3797 15.4973 43.1715 17.4152 42.5465C19.5365 41.8552 21.4644 40.6726 23.042 39.095L28.4436 33.6933L14.3015 19.5512Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
