use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowCornerUpRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowCornerUpRightIcon(props: ArrowCornerUpRightIconProps) -> Element {
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
                d: "M8 3.5L8 15C8 15.5523 8.44772 16 9 16L20 16L20 18L9 18C7.34315 18 6 16.6569 6 15L6 3.5L8 3.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.9999 11.0858L21.9141 17L15.9999 22.9142L14.5857 21.5L19.0857 17L14.5857 12.5L15.9999 11.0858Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.5001 9.41418L7.00009 4.91418L2.50009 9.41418L1.08588 7.99997L7.00009 2.08576L12.9143 7.99997L11.5001 9.41418Z",
                fill: "currentColor",
            }
        }
    }
}
