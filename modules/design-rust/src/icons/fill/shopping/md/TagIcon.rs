use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TagIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TagIcon(props: TagIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m29.828,15.414L15.414,1H1v14.414l14.414,14.414c.755.755,1.76,1.171,2.828,1.172,1.069,0,2.073-.417,2.829-1.172l8.757-8.757c.756-.755,1.172-1.76,1.172-2.828s-.416-2.073-1.172-2.829Zm-19.328-2.414c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
