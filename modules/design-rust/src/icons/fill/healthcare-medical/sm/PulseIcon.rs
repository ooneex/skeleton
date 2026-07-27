use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PulseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PulseIcon(props: PulseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18.5527 12.6562L19.3818 11H23V13H20.6182L18.4473 17.3428L14.5293 8.52832L9.5293 20.5293L5.44629 11.3428L4.61816 13H1V11H3.38184L5.55273 6.65723L9.46973 15.4707L14.4707 3.4707L18.5527 12.6562Z",
                fill: "currentColor",
            }
        }
    }
}
