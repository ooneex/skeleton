use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ConsoleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ConsoleIcon(props: ConsoleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 2H30V30H2V2ZM6.58611 21.9999L12.586 16L6.58603 10.0001L8.00024 8.58587L15.4144 16L8.00032 23.4141L6.58611 21.9999ZM25 17V15H19V17H25ZM15 11H25V9H15V11ZM15 23V21H25V23H15Z",
                fill: "currentColor",
            }
        }
    }
}
