use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NotepadIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NotepadIcon(props: NotepadIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.97461 1.95641C10.5084 0.689538 13.4916 0.689538 16.0254 1.95641L17 2.44372V5.00036H7V2.44372L7.97461 1.95641Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 5C5.00002 6.10455 5.89544 7 7 7H17C18.1046 7 19 6.10455 19 5V3H21V23H3V3H5V5ZM7 15V17H17V15H7ZM7 13H12V11H7V13Z",
                fill: "currentColor",
            }
        }
    }
}
