use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Volume2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Volume2Icon(props: Volume2IconProps) -> Element {
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
                d: "M23 13L20 13L20 11L23 11L23 13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.1924 6.22183L19.0711 8.34315L17.6568 6.92894L19.7782 4.80762L21.1924 6.22183Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.7782 19.1924L17.6568 17.0711L19.0711 15.6569L21.1924 17.7782L19.7782 19.1924Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M15 0.864929L7.63795 6.99997H4C2.34315 6.99997 1 8.34312 1 9.99997V14C1 15.6568 2.34315 17 4 17H7.63795L15 23.135V0.864929Z",
                fill: "currentColor",
            }
        }
    }
}
