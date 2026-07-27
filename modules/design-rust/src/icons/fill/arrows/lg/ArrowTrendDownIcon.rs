use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTrendDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTrendDownIcon(props: ArrowTrendDownIconProps) -> Element {
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
                d: "M25.9772 12.86L45.5606 32.4435L43.4393 34.5648L26.0228 17.1482L14.5228 29.1482L0.878662 15.5041L2.99998 13.3828L14.4772 24.86L25.9772 12.86Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 35.004H46V20.004H43V32.004H31V35.004Z",
                fill: "currentColor",
            }
        }
    }
}
