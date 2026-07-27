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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34314 22 5 22H19C20.6569 22 22 20.6569 22 19V5ZM11.5 5.5V7.5L8.91421 7.5L11.7071 10.2929L10.2929 11.7071L7.5 8.91421V11.5H5.5V5.5H11.5ZM18.5 12.5H12.5V18.5H18.5V12.5Z",
                fill: "currentColor",
            }
        }
    }
}
