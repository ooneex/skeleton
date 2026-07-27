use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LabelIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LabelIcon(props: LabelIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m12,.086L3,9.086v10.914c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3v-10.914L12,.086Zm0,7.914c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm5,11H7v-2h10v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
