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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27.9585 26.5H20.011L23.9973 16.2077L27.9585 26.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 10C4 6.68629 6.68629 4 10 4H38C41.3137 4 44 6.68629 44 10V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V10ZM18.849 29.5L17.1171 33.9715V36H13.1143L22.4099 12H25.5925L34.8292 36H30.8037V33.8928L29.1131 29.5H18.849Z",
                fill: "currentColor",
            }
        }
    }
}
