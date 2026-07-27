use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChurchIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChurchIcon(props: ChurchIconProps) -> Element {
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
                d: "M13 0V7.5H11V0H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 2H15V4H9V2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 10.4648L12 5.79816L5 10.4648V22H19V10.4648ZM12 16C10.8954 16 10 16.8954 10 18V22H14V18C14 16.8954 13.1046 16 12 16Z",
                fill: "currentColor",
            }
            path {
                d: "M21 22L23 22V14.807L21 14.057V22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M3 14.057L1 14.807V22H3V14.057Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
