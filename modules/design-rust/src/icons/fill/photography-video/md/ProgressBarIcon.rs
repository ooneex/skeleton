use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ProgressBarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ProgressBarIcon(props: ProgressBarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "9.057 3 16 12.721 22.943 3 9.057 3",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m29.5,16H2.5c-1.378,0-2.5,1.122-2.5,2.5v5c0,1.378,1.122,2.5,2.5,2.5h27c1.378,0,2.5-1.122,2.5-2.5v-5c0-1.378-1.122-2.5-2.5-2.5Zm.5,7.5c0,.276-.224.5-.5.5h-13.5v-6h13.5c.276,0,.5.224.5.5v5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
