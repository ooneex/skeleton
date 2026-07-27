use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserStarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserStarIcon(props: UserStarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "11",
                cy: "5.5",
                r: "4.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m11.773,19.977l-2.573-2.492c-.549-.531-.747-1.327-.513-2.053.235-.726.862-1.255,1.617-1.364l3.568-.515.452-.909c-1.03-.411-2.15-.644-3.325-.644-4.962,0-9,4.038-9,9v.781l.757.189c2.735.684,5.489,1.025,8.243,1.025.084,0,.169-.007.253-.008l.52-3.011Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "23.909 16.048 19.303 15.383 17.25 11.253 15.197 15.383 10.591 16.048 13.925 19.275 13.139 23.822 17.25 21.676 21.361 23.822 20.575 19.275 23.909 16.048",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
