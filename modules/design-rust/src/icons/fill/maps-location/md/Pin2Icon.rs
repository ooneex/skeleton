use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Pin2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Pin2Icon(props: Pin2IconProps) -> Element {
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
                d: "M17 18V28H15V18H17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 28H29V30H24V28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 28H3V30H8V28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.634 23.634L26.094 21.059L27.094 22.7911L22.634 25.3661L21.634 23.634Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.366 23.634L5.906 21.059L4.906 22.7911L9.36603 25.3661L10.366 23.634Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 2C11.0294 2 7 6.02944 7 11C7 15.9706 11.0294 20 16 20C20.9706 20 25 15.9706 25 11C25 6.02944 20.9706 2 16 2ZM13 11C13 9.34315 14.3431 8 16 8H17V6H16C13.2386 6 11 8.23858 11 11V12H13V11Z",
                fill: "currentColor",
            }
        }
    }
}
