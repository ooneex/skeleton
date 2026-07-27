use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareUserIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareUserIcon(props: SquareUserIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m19,2H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3Zm-7,4c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5-3.5-1.57-3.5-3.5,1.57-3.5,3.5-3.5Zm-6.696,14c.868-2.943,3.55-5,6.696-5s5.828,2.057,6.696,5H5.304Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
