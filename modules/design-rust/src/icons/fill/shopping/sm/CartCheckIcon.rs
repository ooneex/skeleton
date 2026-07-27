use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CartCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CartCheckIcon(props: CartCheckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6 23C7.10457 23 8 22.1046 8 21C8 19.8954 7.10457 19 6 19C4.89543 19 4 19.8954 4 21C4 22.1046 4.89543 23 6 23Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.4142 16L16.5 22.9142L12.5858 19L14 17.5858L16.5 20.0858L22 14.5858L23.4142 16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M21.6971 12.6089C21.2788 12.673 20.8887 12.8687 20.5858 13.1716L16.7574 17H16.2426L15.4142 16.1716C15.0391 15.7965 14.5304 15.5858 14 15.5858C13.4696 15.5858 12.9609 15.7965 12.5858 16.1716L11.7574 17H7.734C6.251 17 4.974 15.893 4.764 14.425L3.133 3H0V1H4.867L5.438 5H23.219L21.6971 12.6089Z",
                fill: "currentColor",
            }
        }
    }
}
