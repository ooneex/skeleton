use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Cloud2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Cloud2Icon(props: Cloud2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m25.974,15.024c.009-.175.026-.347.026-.524,0-5.799-4.701-10.5-10.5-10.5-5.747,0-10.409,4.619-10.492,10.346-2.333.822-4.008,3.04-4.008,5.654,0,3.314,2.686,6,6,6h18.5c3.038,0,5.5-2.462,5.5-5.5,0-2.878-2.211-5.235-5.026-5.476Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
