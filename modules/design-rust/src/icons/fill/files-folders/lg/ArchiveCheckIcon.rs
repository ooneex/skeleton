use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArchiveCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArchiveCheckIcon(props: ArchiveCheckIconProps) -> Element {
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
                d: "M5 30H16V35H32V30H43V38C43 40.7614 40.7614 43 38 43H34H14H10C7.23858 43 5 40.7614 5 38V30Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 44C6.68629 44 4 41.3137 4 38L4 10C4 6.68629 6.68629 4 10 4L38 4C41.3137 4 44 6.68629 44 10L44 38C44 41.3137 41.3137 44 38 44L10 44ZM7 38C7 39.6569 8.34315 41 10 41L38 41C39.6569 41 41 39.6569 41 38L41 10C41 8.34315 39.6569 7 38 7L10 7C8.34315 7 7 8.34314 7 10L7 38Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M34.6213 13L21.5 26.1213L13.3787 18L15.5 15.8787L21.5 21.8787L32.5 10.8787L34.6213 13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
