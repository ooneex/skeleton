use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltAutoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltAutoIcon(props: BoltAutoIconProps) -> Element {
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
                d: "M28 28H22V26H28V28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.8159 19H26.1841L30.4618 30H27.8636V28.8369L25 21.4733L22.1253 28.8654V30H19.5381L23.8159 19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.7221 0.538025L14.9101 11.5023H24.6745L9.27792 29.462L10.0899 18.4978H0.325562L15.7221 0.538025Z",
                fill: "currentColor",
            }
        }
    }
}
