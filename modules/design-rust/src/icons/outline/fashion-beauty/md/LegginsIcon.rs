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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5.38596 17.3266L11 26",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M26.6304 17.2809L21 26",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6.5 7H25.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M22.7709 30H26.8871C27.4816 30 27.9448 29.4845 27.8814 28.8935L25 2H7L4.11856 28.8935C4.05523 29.4845 4.51842 30 5.11287 30H9.22911C9.68338 30 10.0806 29.6938 10.1962 29.2545L14.5494 12.7123C14.9418 11.2213 17.0582 11.2213 17.4506 12.7123L21.8038 29.2545C21.9194 29.6938 22.3166 30 22.7709 30Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                fill: "none",
            }
        }
    }
}
