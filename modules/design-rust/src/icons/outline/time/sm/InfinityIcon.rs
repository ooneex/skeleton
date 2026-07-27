use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct InfinityIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InfinityIcon(props: InfinityIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m23,12c0,2.209-1.791,4-4,4-2.5,0-5-2-7-4s-4.5-4-7-4c-2.209,0-4,1.791-4,4s1.791,4,4,4c2.5,0,5-2,7-4s4.5-4,7-4c2.209,0,4,1.791,4,4Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
