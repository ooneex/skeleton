use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LegginsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LegginsIcon(props: LegginsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.5 6H19.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16.792 22H19.895C20.4866 22 20.9489 21.4892 20.89 20.9005L19 2H5L3.10995 20.9005C3.05108 21.4892 3.51337 22 4.10499 22H7.20799C7.67204 22 8.07512 21.6808 8.1814 21.229L10.5399 11.2055C10.9027 9.66361 13.0973 9.66361 13.4601 11.2055L15.8186 21.229C15.9249 21.6808 16.328 22 16.792 22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                fill: "none",
            }
        }
    }
}
