use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsUpRightDownLeft3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsUpRightDownLeft3Icon(props: ArrowsUpRightDownLeft3IconProps) -> Element {
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
                d: "M13 2V22H11V2H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 11H22V13H2V11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 0.585815L16.4142 5.00003L15 6.41424L12 3.41424L9.00003 6.41424L7.58582 5.00003L12 0.585815Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 7.58582L23.4142 12L19 16.4142L17.5858 15L20.5858 12L17.5858 9.00003L19 7.58582Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.00003 17.5858L12 20.5858L15 17.5858L16.4142 19L12 23.4142L7.58582 19L9.00003 17.5858Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6.41424 9.00003L3.41424 12L6.41424 15L5.00003 16.4142L0.585815 12L5.00003 7.58582L6.41424 9.00003Z",
                fill: "currentColor",
            }
        }
    }
}
