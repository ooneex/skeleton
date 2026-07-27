use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DeleteLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DeleteLeftIcon(props: DeleteLeftIconProps) -> Element {
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
                d: "M2.68774 24L17.9819 6H38C41.3137 6 44 8.68629 44 12L44 36C44 39.3137 41.3137 42 38 42H17.9819L2.68774 24ZM20.5 14.3787L28 21.8787L35.5 14.3787L37.6213 16.5L30.1213 24L37.6213 31.5L35.5 33.6213L28 26.1213L20.5 33.6213L18.3787 31.5L25.8787 24L18.3787 16.5L20.5 14.3787Z",
                fill: "currentColor",
            }
        }
    }
}
