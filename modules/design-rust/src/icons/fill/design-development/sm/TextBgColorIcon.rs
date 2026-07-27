use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextBgColorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextBgColorIcon(props: TextBgColorIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13.823 13H10.177L12 8.44258L13.823 13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM9.37703 15L8.61948 16.8939V18H6.02297L10.823 6H13.177L17.977 18H15.381V16.895L14.623 15H9.37703Z",
                fill: "currentColor",
            }
        }
    }
}
