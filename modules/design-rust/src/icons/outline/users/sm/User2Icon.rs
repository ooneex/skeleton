use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct User2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn User2Icon(props: User2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m2,22l4.824-1.378c1.288-.368,2.176-1.545,2.176-2.885v-.737",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m22,22l-4.824-1.378c-1.288-.368-2.176-1.545-2.176-2.885v-.737",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m17.24,12.561l.609-3.656c.602-3.614-2.185-6.905-5.849-6.905s-6.452,3.29-5.849,6.905l.609,3.656c.427,2.561,2.643,4.439,5.24,4.439s4.813-1.877,5.24-4.439Z",
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
        }
    }
}
