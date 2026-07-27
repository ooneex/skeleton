use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Person3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Person3Icon(props: Person3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13.4499 37.9516L17.3919 19.3541C18.0535 16.2327 20.8091 14 23.9999 14C27.1907 14 29.9462 16.2327 30.6079 19.3541L34.5499 37.9516L29.5999 39.5484L28.4999 47L19.4999 47L18.3999 39.5484L13.4499 37.9516Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 6C19 3.23858 21.2386 1 24 1C26.7614 1 29 3.23858 29 6C29 8.76142 26.7614 11 24 11C21.2386 11 19 8.76142 19 6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
