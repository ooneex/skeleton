use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StrawberryIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StrawberryIcon(props: StrawberryIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20.5 10C23 10 25 7.1047 25 5.5C25 5.5 22 4.5 19.5 5C18.0266 1.34157 16.0968 1 16 1C15.9032 1 13.9734 1.34157 12.5 5C10 4.5 7 5.5 7 5.5C7 7.02835 9 10 11.5 10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M15.9994 30C11.0561 30 5.59686 20.6886 5.50119 16C5.43691 12.8496 7.97492 10 11.4395 10H16H20.5605C24.0251 10 26.5631 12.8496 26.4988 16C26.4031 20.6885 20.9424 30 15.9994 30Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M16 22L16 23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 16V17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 16V17",
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
