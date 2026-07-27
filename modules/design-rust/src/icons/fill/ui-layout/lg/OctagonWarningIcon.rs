use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OctagonWarningIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OctagonWarningIcon(props: OctagonWarningIconProps) -> Element {
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
                d: "M33.1122 2H14.8878L2 14.8878V33.1122L14.8878 46H33.1122L46 33.1122V14.8878L33.1122 2ZM25.5 29V11H22.5V29H25.5ZM26 35C26 36.1046 25.1046 37 24 37C22.8954 37 22 36.1046 22 35C22 33.8954 22.8954 33 24 33C25.1046 33 26 33.8954 26 35Z",
                fill: "currentColor",
            }
        }
    }
}
