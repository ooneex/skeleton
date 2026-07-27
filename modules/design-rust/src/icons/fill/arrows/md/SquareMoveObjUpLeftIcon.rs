use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareMoveObjUpLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareMoveObjUpLeftIcon(props: SquareMoveObjUpLeftIconProps) -> Element {
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
                d: "M26 30C28.2091 30 30 28.2091 30 26L30 6C30 3.79086 28.2091 2 26 2L6 2C3.79086 2 2 3.79086 2 6L2 26C2 28.2091 3.79086 30 6 30L26 30ZM25 16L16 16L16 25L25 25L25 16ZM10.4141 9L16 9L16 7L7 7L7 16L9 16L9 10.4143L14 15.4143L15.4142 14.0001L10.4141 9Z",
                fill: "currentColor",
            }
        }
    }
}
