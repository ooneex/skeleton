use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CurrencyDollarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CurrencyDollarIcon(props: CurrencyDollarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22.75 5H12.5C9.46243 5 7 7.46243 7 10.5V10.5C7 13.5376 9.46243 16 12.5 16H19.5C22.5376 16 25 18.4624 25 21.5V21.5C25 24.5376 22.5376 27 19.5 27H9.25",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 2V30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
