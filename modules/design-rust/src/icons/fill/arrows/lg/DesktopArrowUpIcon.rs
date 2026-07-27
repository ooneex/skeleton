use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DesktopArrowUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DesktopArrowUpIcon(props: DesktopArrowUpIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.4385 44L14.4385 40H33.5614L37.5614 44H10.4385Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 6C4.68629 6 2 8.68629 2 12V31C2 34.3137 4.68629 37 8 37H40C43.3137 37 46 34.3137 46 31V12C46 8.68629 43.3137 6 40 6H8ZM25.5 31H22.5V23.5052H14L24 12L34 23.5052H25.5V31Z",
                fill: "currentColor",
            }
        }
    }
}
