use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SubscriptIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SubscriptIcon(props: SubscriptIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23 21H18V20.75L21.8985 17.8818C22.5911 17.3723 23 16.5637 23 15.7039V15.5C23 14.1193 21.8807 13 20.5 13V13C19.1193 13 18 14.1193 18 15.5V15.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13.8737 3H14L4 21H4.12891",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13.8737 21H14L4 3H4.12891",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
