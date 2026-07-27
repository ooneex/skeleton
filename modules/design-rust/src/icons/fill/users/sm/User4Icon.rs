use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct User4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn User4Icon(props: User4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m6.876,18.016l-3.702,1.061c-1.287.369-2.174,1.545-2.174,2.884v1.039h22v-1.039c0-1.339-.887-2.515-2.174-2.884l-3.702-1.061c-1.275-.356-2.154-.477-2.154-1.774v-1.613c1.147-.769,1.975-1.975,2.217-3.4l.603-3.541c.596-3.501-2.163-6.688-5.791-6.688s-6.387,3.187-5.791,6.688l.603,3.541c.243,1.425,1.07,2.632,2.217,3.4v1.613c0,1.297-.879,1.418-2.154,1.774Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
