use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ConnectedDots3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ConnectedDots3Icon(props: ConnectedDots3IconProps) -> Element {
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
                d: "M17.2395 22.805L15.7605 20.1949L30.7605 11.6949L32.2395 14.305L17.2395 22.805Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30.7605 36.3051L32.2395 33.695L17.2395 25.195L15.7605 27.8051L30.7605 36.3051Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 24C4 20.134 7.13401 17 11 17C14.866 17 18 20.134 18 24C18 27.866 14.866 31 11 31C7.13401 31 4 27.866 4 24Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 11C30 7.13401 33.134 4 37 4C40.866 4 44 7.13401 44 11C44 14.866 40.866 18 37 18C33.134 18 30 14.866 30 11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 38C30 34.134 33.134 31 37 31C40.866 31 44 34.134 44 38C44 41.866 40.866 45 37 45C33.134 45 30 41.866 30 38Z",
                fill: "currentColor",
            }
        }
    }
}
