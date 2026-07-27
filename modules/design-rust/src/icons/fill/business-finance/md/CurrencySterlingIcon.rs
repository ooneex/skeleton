use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CurrencySterlingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CurrencySterlingIcon(props: CurrencySterlingIconProps) -> Element {
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
                d: "M18.5 4C14.9101 4 12 6.91015 12 10.5V30H10V10.5C10 5.80558 13.8056 2 18.5 2C21.2815 2 23.7511 3.33712 25.3001 5.39942L25.9007 6.19899L24.3016 7.40014L23.701 6.60058C22.5134 5.01954 20.6259 4 18.5 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 28H26V30H6V28Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 16H19V18H6V16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
