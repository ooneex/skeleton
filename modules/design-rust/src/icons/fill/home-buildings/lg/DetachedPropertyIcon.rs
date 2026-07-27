use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DetachedPropertyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DetachedPropertyIcon(props: DetachedPropertyIconProps) -> Element {
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
                d: "M24 2.86292L44.3497 13.5781L42.952 16.2326L24.0002 6.25349L5.0499 16.2347L3.65186 13.5803L24 2.86292Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 28H44V38C44 41.3137 41.3137 44 38 44H27V35H21V44H10C6.68629 44 4 41.3137 4 38V28ZM38 39H32V31L38 31V39ZM10 39H16V31L10 31L10 39Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 18.0715V25H40V18.0687L24.0004 9.64407L8 18.0715ZM21 22V16H15V22H21ZM33 16V22H27V16H33Z",
                fill: "currentColor",
            }
        }
    }
}
