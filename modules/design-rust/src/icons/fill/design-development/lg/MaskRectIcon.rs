use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MaskRectIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MaskRectIcon(props: MaskRectIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 11L39 11L39 37L20 37L20 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M2 11L16 11L16 37L2 37L2 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 2H46V46H19V2ZM22 5V43H43V5H22Z",
                fill: "currentColor",
            }
        }
    }
}
