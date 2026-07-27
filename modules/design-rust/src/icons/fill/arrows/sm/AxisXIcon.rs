use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AxisXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AxisXIcon(props: AxisXIconProps) -> Element {
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
                d: "M8 0.999998L7.99997 14.5043L1.50427 21L2.91848 22.4142L9.41419 15.9185L21.4185 15.9185L21.4185 13.9185L9.99997 13.9185L10 1L8 0.999998Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.9999 8.58573L23.4141 14.9999L16.9999 21.4142L15.5857 19.9999L20.5857 14.9999L15.5857 9.99994L16.9999 8.58573Z",
                fill: "currentColor",
            }
        }
    }
}
