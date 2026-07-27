use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Merge3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Merge3Icon(props: Merge3IconProps) -> Element {
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
                d: "M1.58592 29.0001L15.0001 15.5858L15.0001 2.49999L17.0001 2.49999L17.0001 16.4143L3.00014 30.4143L1.58592 29.0001Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29.0001 30.4142L19.5859 21L21.0001 19.5858L30.4143 29L29.0001 30.4142Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24.4853 9.57096L16 1.08569L7.5147 9.57097L8.92891 10.9852L16 3.91411L23.0711 10.9852L24.4853 9.57096Z",
                fill: "currentColor",
            }
        }
    }
}
