use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Globe2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Globe2Icon(props: Globe2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 22V18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 22H15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11 14C13.7614 14 16 11.7614 16 9C16 6.23858 13.7614 4 11 4C8.23858 4 6 6.23858 6 9C6 11.7614 8.23858 14 11 14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18 2L17.364 2.63605C20.8787 6.15077 20.8787 11.8493 17.364 15.364C13.8492 18.8787 8.15075 18.8787 4.63603 15.364L4 16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
