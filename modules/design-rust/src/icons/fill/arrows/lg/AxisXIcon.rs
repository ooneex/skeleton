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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 2V27H44V30H20.1213L4.99998 45.1213L2.87866 43L18 27.8787V2H21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M33.3935 41.2279L46.1214 28.5L33.3935 15.7721L31.2721 17.8934L41.8787 28.5L31.2721 39.1066L33.3935 41.2279Z",
                fill: "currentColor",
            }
        }
    }
}
