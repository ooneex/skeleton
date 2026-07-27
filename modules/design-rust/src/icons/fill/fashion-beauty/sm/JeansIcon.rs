use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct JeansIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn JeansIcon(props: JeansIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 4H17V1H21V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 20C21 21.6569 19.6569 23 18 23H6.63965C5.2096 23 3.9787 21.9902 3.69824 20.5879L1.91406 11.6709L2.29297 11.293L5 8.58594V6H21V20ZM9 10V15.6562L13 18.1826L17 15.6562V10H9Z",
                fill: "currentColor",
            }
            path {
                d: "M9 4H5V1H9V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M15 4H11V1H15V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
