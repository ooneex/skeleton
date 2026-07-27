use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HexagonCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HexagonCheckIcon(props: HexagonCheckIconProps) -> Element {
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
                d: "M43 13.4392L24 1.82806L5 13.4392V34.5608L24 46.172L43 34.5608V13.4392ZM20.6721 32.6684L35.1193 16.9079L32.9078 14.8807L20.5779 28.3316L15 22.7537L12.8787 24.875L20.6721 32.6684Z",
                fill: "currentColor",
            }
        }
    }
}
