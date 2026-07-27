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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16.2857 4L10 4C7.79086 4 6 5.79086 6 8V8C6 10.2091 7.79086 12 10 12H14C16.2091 12 18 13.7909 18 16V16C18 18.2091 16.2091 20 14 20H7.71429",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 2V22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
