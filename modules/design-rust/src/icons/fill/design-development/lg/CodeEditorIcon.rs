use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CodeEditorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CodeEditorIcon(props: CodeEditorIconProps) -> Element {
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
                d: "M10.5 43C7.73858 43 5.5 40.7614 5.5 38V10C5.5 7.23858 7.73858 5 10.5 5H15V43H10.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 12H27V15H20V12Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28 21H36V24H28V21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 33H30V36H24V33Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 27H36V30H24V27Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M41 38L41 10C41 8.34315 39.6569 7 38 7L10 7C8.34315 7 7 8.34315 7 10L7 38C7 39.6569 8.34315 41 10 41L38 41C39.6569 41 41 39.6569 41 38ZM44 10L44 38C44 41.3137 41.3137 44 38 44L10 44C6.68629 44 4 41.3137 4 38L4 10C4 6.68629 6.68629 4 10 4L38 4C41.3137 4 44 6.68629 44 10Z",
                fill: "currentColor",
            }
        }
    }
}
