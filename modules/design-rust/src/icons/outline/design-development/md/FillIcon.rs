use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FillIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FillIcon(props: FillIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5.5 11.5V11.5C8.55448 15.4708 13.6201 17.3314 18.5186 16.2817L24.3321 15.036",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M26.5 21C28.537 22.5286 30 24.2686 30 26.3077C30 28.3468 28.4329 30 26.5 30C24.5671 30 23 28.3468 23 26.3077C23 24.2686 24.463 22.5286 26.5 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M25.0416 14.3137L13.7279 3L3.12133 13.6066C1.94976 14.7782 1.94976 16.6777 3.12133 17.8492L10.1924 24.9203C11.364 26.0919 13.2635 26.0919 14.435 24.9203L25.0416 14.3137Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
