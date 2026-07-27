use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MountainIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MountainIcon(props: MountainIconProps) -> Element {
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
                d: "M5.63497 3.73501L9.28631 8.38217L7.71367 9.61782L5.86502 7.26498L1.85985 14.0105L0.140137 12.9895L5.63497 3.73501Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.6995 22L12 0.940872L0.300476 22H23.6995ZM8.20704 11.8864L9.49997 13.4379L12 10.4379L14.5 13.4379L15.7929 11.8864L12 5.05912L8.20704 11.8864Z",
                fill: "currentColor",
            }
        }
    }
}
