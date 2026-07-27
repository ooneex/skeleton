use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MilitaryCampIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MilitaryCampIcon(props: MilitaryCampIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 0V3H13V6H11V0H16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M19 5C20.6569 5 22 6.34315 22 8V10H2V8C2 6.34315 3.34315 5 5 5H19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 22H17.6797L17.4189 21.8135C15.3202 20.3144 12.5 17 12 14C11.5 17 8.67981 20.3144 6.58105 21.8135L6.32031 22H2V12H22V22ZM5 17.0098H8V14H5V17.0098ZM16 14V17.0098H19V14H16Z",
                fill: "currentColor",
            }
        }
    }
}
