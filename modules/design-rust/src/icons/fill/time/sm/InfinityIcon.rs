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
                d: "m19,17c-2.691,0-5.185-1.895-7-3.605-1.815,1.71-4.309,3.605-7,3.605-2.757,0-5-2.243-5-5s2.243-5,5-5c2.691,0,5.185,1.895,7,3.605,1.815-1.71,4.309-3.605,7-3.605,2.757,0,5,2.243,5,5s-2.243,5-5,5Zm-5.561-5c2.169,2.017,3.994,3,5.561,3,1.654,0,3-1.346,3-3s-1.346-3-3-3c-1.567,0-3.392.983-5.561,3Zm-8.439-3c-1.654,0-3,1.346-3,3s1.346,3,3,3c1.567,0,3.392-.983,5.561-3-2.169-2.017-3.994-3-5.561-3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
