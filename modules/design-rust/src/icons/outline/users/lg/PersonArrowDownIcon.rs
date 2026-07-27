use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PersonArrowDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PersonArrowDownIcon(props: PersonArrowDownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M38.5 16L38.5 38L38.5 37.2856",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M44.5 32L38.5 38L32.5 32",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21.5 46L12.5 46L10.5 31.569L7 29.5L8.51961 18.9913C8.73933 17.6098 9.64223 16.457 10.8978 15.9823C12.266 15.465 14.8508 15 17.0018 15C18.0728 15 20.7849 15.1163 23.0376 15.9571C24.3134 16.4337 25.2588 17.5904 25.4804 18.9913L27 29.5L23.5 31.569L21.5 46Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 11C19.4853 11 21.5 8.98528 21.5 6.5C21.5 4.01472 19.4853 2 17 2C14.5147 2 12.5 4.01472 12.5 6.5C12.5 8.98528 14.5147 11 17 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
