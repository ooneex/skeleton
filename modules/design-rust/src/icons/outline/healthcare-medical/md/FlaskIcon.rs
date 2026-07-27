use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FlaskIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FlaskIcon(props: FlaskIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m16,7h7V2h-14v5h7",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m13,11v5l-6.612,9.256c-.963,1.348-.651,3.222.697,4.185.509.364,1.119.559,1.745.559h14.34c1.657,0,3-1.342,3.001-2.999,0-.626-.195-1.236-.559-1.745l-6.612-9.256v-5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
