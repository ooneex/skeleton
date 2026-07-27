use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PharmacyBowlIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PharmacyBowlIcon(props: PharmacyBowlIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.8038 11L15 3.73205C15.5523 2.77547 16.7755 2.44772 17.7321 3V3C18.6886 3.55228 19.0164 4.77547 18.4641 5.73205L15.4226 11",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M15.5 19.1679C18.6786 17.6248 21 16.1006 21 12V11H3V12C3 16.1006 5.22137 17.6248 8.4 19.1679V22H15.5V19.1679Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 4L3 4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6 1L6 7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
