use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PersonIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PersonIcon(props: PersonIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M28.5 46L19.5 46L17.5 31.569L14 29.5L15.5196 18.9913C15.7393 17.6098 16.6422 16.457 17.8978 15.9823C19.266 15.465 21.8508 15 24.0018 15C25.0728 15 27.7849 15.1163 30.0376 15.9571C31.3134 16.4337 32.2588 17.5904 32.4804 18.9913L34 29.5L30.5 31.569L28.5 46Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 11C26.4853 11 28.5 8.98528 28.5 6.5C28.5 4.01472 26.4853 2 24 2C21.5147 2 19.5 4.01472 19.5 6.5C19.5 8.98528 21.5147 11 24 11Z",
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
