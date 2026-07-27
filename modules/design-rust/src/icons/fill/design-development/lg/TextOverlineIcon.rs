use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextOverlineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextOverlineIcon(props: TextOverlineIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M33 35.5H15V32.5H33V35.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.2122 11H25.7872L37.8619 43H33.7381V40.5688L24.0005 14.7626L14.2423 40.6645V43H10.1566L22.2122 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 4.5H4V7.5H44V4.5Z",
                fill: "currentColor",
            }
        }
    }
}
