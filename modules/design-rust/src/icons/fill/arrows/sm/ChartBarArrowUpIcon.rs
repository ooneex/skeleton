use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartBarArrowUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartBarArrowUpIcon(props: ChartBarArrowUpIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18 12H22V22H18V12Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M2 16H6V22H2V16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M12 1L6.5 8L10 8L10 22L14 22L14 8L17.5 8L12 1Z",
                fill: "currentColor",
            }
        }
    }
}
