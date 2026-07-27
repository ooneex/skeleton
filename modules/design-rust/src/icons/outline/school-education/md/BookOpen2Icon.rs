use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BookOpen2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BookOpen2Icon(props: BookOpen2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 26.6667V27V6.5V6.83333",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 27C20.4549 24.4115 25.5451 24.4115 30 27V6.94138C25.5451 4.35287 20.4549 4.35287 16 6.94138C11.5451 4.35287 6.45486 4.3531 2 6.9416V27C6.45486 24.4115 11.5451 24.4115 16 27Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6.00073 11.9021C7.98465 11.4441 10.0159 11.4441 11.9998 11.9021",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6 18.9023C7.98442 18.444 10.0162 18.444 12.0006 18.9023",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19.9993 18.9024C21.984 18.444 24.0161 18.444 26.0008 18.9024",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 11.9022C21.9842 11.4441 24.0158 11.4441 26 11.9022",
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
