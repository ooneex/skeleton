use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Bus2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Bus2Icon(props: Bus2IconProps) -> Element {
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
                d: "M22.5 22V5H25.5V22H22.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 16H6V19H1V16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M42 16H47.02V19H42V16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M43 42H35V39H13V42H5V21H43V42ZM14.02 29V30C14.02 31.6569 12.6769 33 11.02 33H6V29H14.02ZM34 30V29H42.02V33H37C35.3432 33 34 31.6569 34 30Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 7C8.34315 7 7 8.34315 7 10V41H12V37H36V41H41V10C41 8.34315 39.6569 7 38 7H10ZM4 10C4 6.68629 6.68629 4 10 4H38C41.3137 4 44 6.68629 44 10V41C44 42.6569 42.6569 44 41 44H36C34.3431 44 33 42.6569 33 41V40H15V41C15 42.6569 13.6569 44 12 44H7C5.34315 44 4 42.6569 4 41V10Z",
                fill: "currentColor",
            }
        }
    }
}
