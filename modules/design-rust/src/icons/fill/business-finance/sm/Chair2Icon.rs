use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Chair2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Chair2Icon(props: Chair2IconProps) -> Element {
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
                d: "M13 18V24H11V18H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 22H17V24H7V22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M18.5 4C18.5 2.34315 17.1569 1 15.5 1H8.5C6.84315 1 5.5 2.34315 5.5 4V13L18.5 13L18.5 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.1716 12.4142L21.5 11.0858L22.9142 12.5L21.5858 13.8284C21.2107 14.2035 21 14.7122 21 15.2426V17C21 18.6569 19.6569 20 18 20L6 20C4.34315 20 3 18.6569 3 17L3 15.2426C3 14.7122 2.78929 14.2035 2.41421 13.8284L1.08579 12.5L2.5 11.0858L3.82843 12.4142C4.52118 13.107 4.93359 14.0277 4.99264 15H19.0074C19.0664 14.0277 19.4788 13.107 20.1716 12.4142Z",
                fill: "currentColor",
            }
        }
    }
}
