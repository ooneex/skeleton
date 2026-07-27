use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HandshakeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HandshakeIcon(props: HandshakeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12.5 10.5L16.4985 13.8321C17.5085 14.6738 17.4456 16.2443 16.3715 17.0025L11.2641 20.6077C10.5197 21.1331 9.51435 21.0891 8.81883 20.5005L3.5 16H1V7H5",
                stroke: "currentColor",
                stroke_width: "2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M13.5 9.5L10.1193 12.1294C9.47987 12.6268 8.57013 12.5701 7.9973 11.9973V11.9973C7.42679 11.4268 7.368 10.5216 7.85994 9.88208L11.201 5.5387C11.6862 4.9079 12.4993 4.62482 13.2713 4.81783L18 6.00001H23V15H21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12.5 19.4658L11.5 18.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 17.4999L13.5 15.9999",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
