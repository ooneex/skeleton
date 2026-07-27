use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VolumeUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VolumeUpIcon(props: VolumeUpIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 29L10.5 21.7778H5C3.34315 21.7778 2 20.4346 2 18.7778V13.2222C2 11.5654 3.34315 10.2222 5 10.2222H10.5L19 3V29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M26.9706 8.02937C28.8552 10.1489 30 12.9407 30 16C30 19.0593 28.8552 21.8512 26.9706 23.9706",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23.4246 11.5754C24.4094 12.7813 25 14.3217 25 16C25 17.6783 24.4094 19.2187 23.4246 20.4246",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
