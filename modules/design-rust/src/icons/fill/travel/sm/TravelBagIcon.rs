use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TravelBagIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TravelBagIcon(props: TravelBagIconProps) -> Element {
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
                d: "M8 3C8 1.89543 8.89543 1 10 1H14C15.1046 1 16 1.89543 16 3V7H14V3H10V7H8V3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V8ZM8 7V19H6V7H8ZM18 7H16V19H18V7Z",
                fill: "currentColor",
            }
        }
    }
}
