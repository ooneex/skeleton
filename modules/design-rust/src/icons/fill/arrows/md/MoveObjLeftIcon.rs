use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoveObjLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoveObjLeftIcon(props: MoveObjLeftIconProps) -> Element {
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
                d: "M30.0042 30L19.0042 30L19.0042 2L30.0042 2L30.0042 30Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.0042 17L2.50415 17L2.50415 15L16.0042 15L16.0042 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.4183 9.50003L3.91833 16L10.4183 22.5001L9.00412 23.9143L1.08991 16L9.00412 8.08582L10.4183 9.50003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
