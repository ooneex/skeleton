use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileFigIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileFigIcon(props: FileFigIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21H20V19.5H18V17.5H22V23H18.5C16.0147 23 14 20.9853 14 18.5C14 16.0147 16.0147 14 18.5 14H20V16H18.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.5 14V23H10.5V14H12.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.5 14H8.5V16H4.5V17.5H7.5V19.5H4.5V23H2.5V14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 7.58579V12L4 12V3C4 1.89543 4.89543 1 6 1H13.4142L20 7.58579ZM13 3V8H18L13 3Z",
                fill: "currentColor",
            }
        }
    }
}
