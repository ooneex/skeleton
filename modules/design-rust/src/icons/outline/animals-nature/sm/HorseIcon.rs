use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HorseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HorseIcon(props: HorseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 22C8 18 13 17 13 13V8C13 9.06087 12.5786 10.0783 11.8284 10.8284C11.0783 11.5786 10.0609 12 9 12L4.5 15L2.5 13L8 5V2C10.363 1.99596 12.6884 2.59112 14.759 3.72985C16.8295 4.86859 18.5775 6.51371 19.8395 8.51145C21.1016 10.5092 21.8366 12.7943 21.9757 15.1532C22.1148 17.5121 21.6535 19.8678 20.635 22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
