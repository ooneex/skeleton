use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PizzaIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PizzaIcon(props: PizzaIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 26C18.4183 26 22 22.4183 22 18H14V10C9.58172 10 6 13.5817 6 18C6 22.4183 9.58172 26 14 26Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 30V18H2",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M18 6C22.4183 6 26 9.58172 26 14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 30C20.6274 30 26 24.6274 26 18H14V6C7.37258 6 2 11.3726 2 18C2 24.6274 7.37258 30 14 30Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18 14V2H19C25.0751 2 30 6.92487 30 13V14H18Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
