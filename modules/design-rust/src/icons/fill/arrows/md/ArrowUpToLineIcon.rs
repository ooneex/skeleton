use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowUpToLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowUpToLineIcon(props: ArrowUpToLineIconProps) -> Element {
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
                d: "M15 30L15 9H17L17 30L15 30Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.00015 19.4143L16.0002 10.4143L25.0002 19.4143L26.4144 18.0001L16.0002 7.58588L5.58594 18.0001L7.00015 19.4143Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 3L30 5L2 5L2 3L30 3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
