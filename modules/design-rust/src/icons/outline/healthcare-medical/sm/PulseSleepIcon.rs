use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PulseSleepIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PulseSleepIcon(props: PulseSleepIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 11.9309C3 16.9396 7.0596 21 12.0674 21C15.4803 21 18.4528 19.1141 20 16.3273C19.4852 16.4181 18.9554 16.4655 18.4145 16.4655C13.4068 16.4655 9.34716 12.4051 9.34716 7.39637C9.34716 5.80122 9.75892 4.30225 10.4819 3C6.23006 3.74996 3 7.46316 3 11.9309Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                stroke_linejoin: "bevel",
                fill: "none",
            }
            path {
                d: "M14 6H15.5L17 3L18.5 6L20 9L21.5 6H23",
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
