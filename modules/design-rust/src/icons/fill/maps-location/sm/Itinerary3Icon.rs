use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Itinerary3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Itinerary3Icon(props: Itinerary3IconProps) -> Element {
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
                d: "M1 15H9V23H1V15Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0.5 5C0.5 2.51472 2.51472 0.5 5 0.5C7.48528 0.5 9.5 2.51472 9.5 5C9.5 7.48528 7.48528 9.5 5 9.5C2.51472 9.5 0.5 7.48528 0.5 5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.5 4H20C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H11V18H20C20.5523 18 21 17.5523 21 17V7C21 6.44772 20.5523 6 20 6H11.5V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
