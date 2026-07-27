use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTurnUp2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTurnUp2Icon(props: ArrowTurnUp2IconProps) -> Element {
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
                d: "M12 28C16.9706 28 21 23.9706 21 19L21 2.5L23 2.5L23 19C23 25.0751 18.0751 30 12 30L2 30L2 28L12 28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29.0001 10.9142L22.0001 3.91418L15.0001 10.9142L13.5859 9.49997L22.0001 1.08576L30.4143 9.49997L29.0001 10.9142Z",
                fill: "currentColor",
            }
        }
    }
}
