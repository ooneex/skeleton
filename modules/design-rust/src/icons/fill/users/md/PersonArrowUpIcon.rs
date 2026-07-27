use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PersonArrowUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PersonArrowUpIcon(props: PersonArrowUpIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 24.5V10H25V24.5H27Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.9999 15.4142L25.9999 11.4142L29.9999 15.4142L31.4141 14L25.9999 8.58579L20.5857 14L21.9999 15.4142Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.5 4.5C7.5 2.566 9.066 1 11 1C12.934 1 14.5 2.566 14.5 4.5C14.5 6.434 12.934 8 11 8C9.066 8 7.5 6.434 7.5 4.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.2104 9.69751C8.20836 9.31446 9.53849 9 11.0012 9C11.7117 9 13.1455 9.07379 14.7447 9.6798C15.8912 10.1146 16.7275 11.1625 16.923 12.4176L18 19.3039L15.5192 20.6253L14.4228 31H7.57845L6.48087 20.6253L4 19.3039L5.07707 12.4171C5.26889 11.1928 6.0639 10.1375 7.2104 9.69751Z",
                fill: "currentColor",
            }
        }
    }
}
