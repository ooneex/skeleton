use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ScaleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ScaleIcon(props: ScaleIconProps) -> Element {
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
                d: "M13 1.49329V22.4933H11V1.49329H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 20.4933H18V22.4933H6V20.4933Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.36351 4.49329H19.6365L24 12.5739C24 15.334 21.823 17.4933 19.04 17.4933C16.2588 17.4933 14.08 15.3355 14.08 12.5761L17.3316 6.49329H6.66845L9.92 12.5761C9.92 15.3355 7.74122 17.4933 4.96 17.4933C2.17698 17.4933 0 15.334 0 12.5739L4.36351 4.49329ZM4.97563 7.56895L2.31649 12.4933H7.60792L4.97563 7.56895ZM16.3921 12.4933H21.6835L19.0244 7.56894L16.3921 12.4933Z",
                fill: "currentColor",
            }
        }
    }
}
