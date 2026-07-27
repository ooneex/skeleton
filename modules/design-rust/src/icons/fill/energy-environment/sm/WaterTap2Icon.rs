use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WaterTap2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WaterTap2Icon(props: WaterTap2IconProps) -> Element {
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
                d: "M6 2H15V4H6V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 2H9V5H2V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M2 7V22H9V18C9 14.6863 11.6863 12 15 12H22V10.5C22 8.567 20.433 7 18.5 7H2Z",
                fill: "currentColor",
            }
            path {
                d: "M20.5 15.5C21.7984 16.5833 23 18.2083 23 19.6042C23 21.0768 21.8806 22 20.5 22C19.1194 22 18 21.0768 18 19.6042C18 18.2083 19.2149 16.5833 20.5 15.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
