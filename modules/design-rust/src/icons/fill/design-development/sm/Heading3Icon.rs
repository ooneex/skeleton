use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Heading3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Heading3Icon(props: Heading3IconProps) -> Element {
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
                d: "M14 4H23V5.80432L18.3471 10H19C21.7614 10 24 12.2386 24 15C24 17.7614 21.7614 20 19 20H14V18H19C20.6569 18 22 16.6569 22 15C22 13.3431 20.6569 12 19 12H15V10.3252L19.7965 6H14V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 11H12V13H1V11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 4V20H1V4H3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 4V20H10V4H12Z",
                fill: "currentColor",
            }
        }
    }
}
