use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltLightningAutoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltLightningAutoIcon(props: BoltLightningAutoIconProps) -> Element {
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
                d: "M6.86218 2H17.5302L15.2533 12H25.1824L9.1483 30.5995L10.3828 19.525L2.73804 19.4951L6.86218 2Z",
                fill: "currentColor",
            }
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
        }
    }
}
