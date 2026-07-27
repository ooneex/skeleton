use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ZippedFile2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ZippedFile2Icon(props: ZippedFile2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21.6 37H26.4L28 45H24H20L21.6 37Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 10C2 6.68629 4.68629 4 8 4H19.3333L27.3333 10H40C43.3137 10 46 12.6863 46 16V36C46 39.3137 43.3137 42 40 42H30.4594L29.3429 36.4174C29.0657 35.0152 27.8348 34 26.4 34H21.6C20.165 34 18.9339 35.0156 18.657 36.4182L17.5406 42H8C4.68629 42 2 39.3137 2 36V10ZM25.5 20H22.5V24H25.5V20ZM25.5 13V17H22.5V13H25.5ZM25.5 27H22.5V31H25.5V27Z",
                fill: "currentColor",
            }
        }
    }
}
