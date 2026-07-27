use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareLayoutGrid2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareLayoutGrid2Icon(props: SquareLayoutGrid2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V9H1V6Z",
                fill: "currentColor",
            }
            path {
                d: "M1 11V18C1 19.6569 2.34315 21 4 21H9V11H1Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 11V18C23 19.6569 21.6569 21 20 21H11V19H20C20.5523 19 21 18.5523 21 18V11H23Z",
                fill: "currentColor",
            }
        }
    }
}
