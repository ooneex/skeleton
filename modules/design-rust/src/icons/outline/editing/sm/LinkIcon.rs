use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LinkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LinkIcon(props: LinkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m19.014,11.943l1.021,1.021c1.953,1.953,1.953,5.118,0,7.071h0c-1.953,1.953-5.118,1.953-7.071,0l-3.121-3.121c-1.953-1.953-1.953-5.118,0-7.071h0c.366-.366.775-.664,1.21-.892",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m12.934,15.056c.44-.23.853-.529,1.223-.899h0c1.953-1.953,1.953-5.118,0-7.071l-3.121-3.121c-1.953-1.953-5.118-1.953-7.071,0h0c-1.953,1.953-1.953,5.118,0,7.071l1.021,1.021",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
