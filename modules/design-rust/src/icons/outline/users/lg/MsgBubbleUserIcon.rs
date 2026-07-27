use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MsgBubbleUserIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MsgBubbleUserIcon(props: MsgBubbleUserIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M43 3H25C23.3431 3 22 4.34315 22 6V19V23L28 19H43C44.6569 19 46 17.6569 46 16V6C46 4.34315 44.6569 3 43 3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12.5 28C15.2614 28 17.5 25.7614 17.5 23C17.5 20.2386 15.2614 18 12.5 18C9.73858 18 7.5 20.2386 7.5 23C7.5 25.7614 9.73858 28 12.5 28Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M12.5 32C6.70137 32 2 36.3781 2 41.778C8.99956 43.4073 16.0004 43.4073 23 41.778C23 36.3781 18.2986 32 12.5 32Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
