use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SuitcasePlayIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SuitcasePlayIcon(props: SuitcasePlayIconProps) -> Element {
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
                d: "M10.0001 2H22.0001V9.00002H20.0001V4H12.0001V9.00002H10.0001V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 11C2 8.79086 3.79086 7 6 7H26C28.2091 7 30 8.79086 30 11V25C30 27.2091 28.2091 29 26 29H6C3.79086 29 2 27.2091 2 25V11ZM23 18.0001L12 12V24L23 18.0001Z",
                fill: "currentColor",
            }
        }
    }
}
