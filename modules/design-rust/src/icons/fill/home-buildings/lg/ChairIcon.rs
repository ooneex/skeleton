use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChairIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChairIcon(props: ChairIconProps) -> Element {
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
                d: "M34 29V38H31V29H34Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 29V38H14V29H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M33 12L33 20L36 20L36 9C36 6.23858 33.7614 4 31 4L17 4C14.2386 4 12 6.23857 12 9V20H15L15 12H33Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M37 30L37 44H40L40 28C40 25.2386 37.7614 23 35 23L13 23C10.2386 23 8 25.2386 8 28V44H11L11 30H37Z",
                fill: "currentColor",
            }
        }
    }
}
