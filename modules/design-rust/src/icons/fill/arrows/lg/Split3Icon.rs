use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Split3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Split3Icon(props: Split3IconProps) -> Element {
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
                d: "M20 3.99975L3.99997 3.99975L3.99998 19.9998L6.99998 19.9998L6.99997 6.99975L20 6.99975L20 3.99975Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 23.3787L6.56071 4.43937L4.43939 6.56069L22.5 24.6213L22.5 44L25.5 44L25.5 23.3787Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29.5 20.6213L27.3787 18.5L41.4393 4.43933L43.5606 6.56065L29.5 20.6213Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27.9999 3.99988L43.9999 3.99988L43.9999 19.9999L40.9999 19.9999L40.9999 6.99988L27.9999 6.99988L27.9999 3.99988Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
