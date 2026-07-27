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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m22.121,11.207L11.914,1H1v10.914l10.207,10.207c.585.585,1.353.877,2.121.877s1.537-.292,2.122-.877l6.671-6.671c1.17-1.17,1.17-3.073,0-4.243Zm-14.621-2.207c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
