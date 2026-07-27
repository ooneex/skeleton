use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberThreeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberThreeIcon(props: NumberThreeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17 16.0049C16.9999 13.7986 15.2112 12.0098 13.0049 12.0098H7.5V10.2529L7.85059 9.95312L14.8281 4H6V2H18V3.92383L10.8662 10.0098H13.0049C16.3158 10.0098 18.9999 12.694 19 16.0049C19 19.3158 16.3158 22 13.0049 22H6V20H13.0049C15.2112 20 17 18.2112 17 16.0049Z",
                fill: "currentColor",
            }
        }
    }
}
