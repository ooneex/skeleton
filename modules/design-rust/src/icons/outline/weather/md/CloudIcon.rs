use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CloudIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CloudIcon(props: CloudIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m19,4c-5.872.003-10.878,4.258-11.828,10.053-3.837.475-6.562,3.97-6.088,7.806.432,3.495,3.394,6.125,6.916,6.141h11c6.627,0,12-5.373,12-12s-5.373-12-12-12Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
