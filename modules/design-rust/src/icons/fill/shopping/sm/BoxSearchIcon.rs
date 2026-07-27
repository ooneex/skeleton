use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoxSearchIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoxSearchIcon(props: BoxSearchIconProps) -> Element {
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
                d: "M1 8L1 2L23 2L23 8L1 8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.5 14C16.1193 14 15 15.1193 15 16.5C15 17.8807 16.1193 19 17.5 19C18.8807 19 20 17.8807 20 16.5C20 15.1193 18.8807 14 17.5 14ZM13 16.5C13 14.0147 15.0147 12 17.5 12C19.9853 12 22 14.0147 22 16.5C22 18.9853 19.9853 21 17.5 21C15.0147 21 13 18.9853 13 16.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M14.0343 22H5C3.34315 22 2 20.6569 2 19V10H17.5C13.9101 10 11 12.9101 11 16.5C11 18.8158 12.211 20.8487 14.0343 22Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.975 17.5608L23.9142 21.5L22.5 22.9142L18.5608 18.975L19.975 17.5608Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
