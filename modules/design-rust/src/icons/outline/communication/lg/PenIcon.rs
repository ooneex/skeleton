use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PenIcon(props: PenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6 42L17.2594 39.1852L42.2509 14.1936C44.5828 11.8617 44.5828 8.08096 42.2509 5.74907C39.919 3.41718 36.1383 3.41718 33.8064 5.74907L8.81484 30.7406L6 42Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
