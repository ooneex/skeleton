use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CurrencyEuroIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CurrencyEuroIcon(props: CurrencyEuroIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.4992 4C11.185 4 6 9.3352 6 16C6 22.6648 11.185 28 17.4992 28C20.0794 28 22.4619 27.1142 24.3843 25.612L25.1722 24.9963L26.4037 26.5722L25.6157 27.188C23.3596 28.951 20.5479 30 17.4992 30C10.0072 30 4 23.6946 4 16C4 8.3054 10.0072 2 17.4992 2C20.5479 2 23.3596 3.04905 25.6157 4.81204L26.4037 5.42777L25.1722 7.00369L24.3843 6.38796C22.4619 4.88582 20.0794 4 17.4992 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 12H15V14H1V12Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 18H15V20H1V18Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
