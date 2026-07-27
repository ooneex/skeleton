use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FilePlayIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FilePlayIcon(props: FilePlayIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 26L43.9697 36L27 46V26Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.2426 2C19.1818 2 18.1644 2.42143 17.4142 3.17157L7.17157 13.4142C6.42153 14.1643 6 15.1812 6 16.2422V40C6 43.3137 8.68629 46 12 46H24V26C24 24.9234 24.5769 23.9294 25.5116 23.3953C26.4463 22.8611 27.5956 22.8688 28.5231 23.4154L42 31.3571V7.9991C42 4.68516 39.3135 2 36 2H20.2426ZM20 16V5L9 16H20Z",
                fill: "currentColor",
            }
        }
    }
}
