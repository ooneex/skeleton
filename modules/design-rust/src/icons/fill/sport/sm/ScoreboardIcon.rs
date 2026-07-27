use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ScoreboardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ScoreboardIcon(props: ScoreboardIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 15H7V9H10V15Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 3C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6C1 4.34315 2.34315 3 4 3H20ZM5 17H12V7H5V17ZM16.5859 7L13.5859 10L15 11.4141L17 9.41406V17H19V7H16.5859Z",
                fill: "currentColor",
            }
        }
    }
}
