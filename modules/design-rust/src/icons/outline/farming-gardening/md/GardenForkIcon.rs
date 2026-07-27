use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GardenForkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GardenForkIcon(props: GardenForkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23 9L15 17",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6.99997 24.9965L15 17L14.3299 17.6701",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11.2573 29.2279L17.1213 23.364C18.2929 22.1924 18.2929 20.2929 17.1213 19.1213L15 17L12.8787 14.8787C11.7071 13.7071 9.80762 13.7071 8.63604 14.8787L2.77204 20.7426",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 9C21.4378 7.43777 21.3586 4.98452 22.8232 3.51992L23.7071 2.63604L29.3639 8.29289L28.4801 9.17678C27.0155 10.6414 24.5622 10.5622 23 9Z",
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
