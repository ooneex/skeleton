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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 23L25 23L25 9H12V23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M1 23H10V9H1V23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 2H30V30H12V2ZM14 4V28H28V4H14Z",
                fill: "currentColor",
            }
        }
    }
}
