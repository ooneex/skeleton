use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CalculatorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CalculatorIcon(props: CalculatorIconProps) -> Element {
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
                d: "M18 1C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34314 23 3 21.6569 3 20V4C3 2.34315 4.34315 1 6 1H18ZM6 4L18 4V10H6V4ZM13 13V15.01H11V13H13ZM13 17H11V19.01H13V17ZM9 17V19.01H7V17H9ZM17 17H15V19.01H17V17ZM17 13V15.01H15V13H17ZM9 13H7V15.01H9V13Z",
                fill: "currentColor",
            }
        }
    }
}
