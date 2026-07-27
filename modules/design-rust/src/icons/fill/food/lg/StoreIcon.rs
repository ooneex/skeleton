use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StoreIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StoreIcon(props: StoreIconProps) -> Element {
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
                d: "M25.5 8.5V23.5H22.5V8.5H25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.0466 9.44179L11.5 17.3983V23.4999H8.5V16.6016L13.4418 7.95337L16.0466 9.44179Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31.9534 9.44179L36.5 17.3983V23.4999H39.5V16.6016L34.5582 7.95337L31.9534 9.44179Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26.5829 9.09177L29.5 17.2597V23.4999H32.5V16.7401L29.4081 8.08276L26.5829 9.09177Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.4171 9.09177L18.5 17.2597V23.4999H15.5V16.7401L18.5919 8.08276L21.4171 9.09177Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 4H40V9.19543L46 16.6237V23.5H2V16.6274L8 9.19881V4ZM11 10.0073L5 17.6876V20.5H43V17.684L37 10.0073H11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M38 44C41.3137 44 44 41.3137 44 38V26H4V38C4 41.3137 6.68629 44 10 44H25V31H34V44H38ZM11 31H19V38H11V31Z",
                fill: "currentColor",
            }
        }
    }
}
