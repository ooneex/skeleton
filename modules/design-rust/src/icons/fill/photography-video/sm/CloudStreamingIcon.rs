use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CloudStreamingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CloudStreamingIcon(props: CloudStreamingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 20H13V24H11V22H2V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 20H22V22H15V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.0665 8.35256C3.62627 4.24736 7.20427 1 11.5 1C15.7459 1 19.1859 4.0787 19.8907 8.07982C22.2211 8.50238 24 10.5515 24 13C24 15.7523 21.7523 18 19 18H5C2.24772 18 0 15.7523 0 13C0 10.9104 1.26852 9.09035 3.0665 8.35256ZM15.5 10.5L9.5 7V14L15.5 10.5Z",
                fill: "currentColor",
            }
        }
    }
}
