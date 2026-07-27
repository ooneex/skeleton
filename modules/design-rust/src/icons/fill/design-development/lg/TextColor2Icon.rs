use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextColor2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextColor2Icon(props: TextColor2IconProps) -> Element {
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
                d: "M22.4558 4H25.5448L35.1535 30H16.03L12 40.8866V43H8.01871L22.4558 4ZM17.1406 27H30.8465L23.9992 8.47214L17.1406 27Z",
                fill: "currentColor",
            }
            path {
                d: "M38 31.5C40.7273 34.3 43 37.2 43 40C43 43 40.7612 45 38 45C35.2387 45 33 43 33 40C33 37.2 35.2727 34.3 38 31.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
