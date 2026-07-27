use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextColor2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextColor2Icon(props: TextColor2IconProps) -> Element {
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
                d: "M18.8906 18V20H9.5V18H18.8906Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.6493 3H17.3507L22.3518 15.8599L20.4878 16.5848L16 5.04474L7.11922 27.8811V29H4.53816L14.6493 3Z",
                fill: "currentColor",
            }
            path {
                d: "M24 18C26 20 28 22.5 28 24.6328C28 27.0446 26.209 29 24 29C21.791 29 20 27.0446 20 24.6328C20 22.2209 22 20 24 18Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
