use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SolarPanelIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SolarPanelIcon(props: SolarPanelIconProps) -> Element {
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
                d: "M13 15V23H11V15H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.3321 4.32542C21.2929 4.15527 21.2396 3.99133 21.1737 3.83469C20.7121 2.73824 19.6313 2 18.409 2H5.59102C4.19406 2 2.98197 2.96423 2.66785 4.32542L0.590929 13.3254C0.157118 15.2053 1.58485 17 3.5141 17L20.4859 17C22.4152 17 23.8429 15.2053 23.4091 13.3254L21.3321 4.32542ZM19.8968 7L19.4353 5H13V3L11 3V5H4.56474L4.10321 7H11V11H3.18013L2.71859 13H11V15L13 15V13H21.2814L20.8199 11H13V7H19.8968Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 21H18V23H6V21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
