use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EmptyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EmptyIcon(props: EmptyIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m19.068,4.932c-1.811-1.811-4.311-2.932-7.068-2.932C6.486,2,2,6.486,2,12c0,2.757,1.122,5.257,2.932,7.068l14.135-14.135Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m7.381,20.861c1.383.724,2.952,1.139,4.619,1.139,5.514,0,10-4.486,10-10,0-1.666-.415-3.235-1.139-4.619l-13.479,13.479Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "-3.142",
                y: "11",
                width: "30.284",
                height: "2",
                transform: "translate(-4.971 12) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
