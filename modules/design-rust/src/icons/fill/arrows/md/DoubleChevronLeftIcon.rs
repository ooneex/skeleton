use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DoubleChevronLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DoubleChevronLeftIcon(props: DoubleChevronLeftIconProps) -> Element {
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
                d: "M16.0001 29.4142L2.58588 16L16.0001 2.58582L17.4143 4.00003L5.41431 16L17.4143 28L16.0001 29.4142Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27.0001 29.4142L13.5859 16L27.0001 2.58582L28.4143 4.00003L16.4143 16L28.4143 28L27.0001 29.4142Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
