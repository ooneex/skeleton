use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MushroomIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MushroomIcon(props: MushroomIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.89728 13.5136L5.5 21L6.55224 21.4857C10.0089 23.081 13.9911 23.081 17.4478 21.4857L18.5 21L16.105 13.5252",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M13.3743 2.11389C13.1364 2.69659 13 3.33179 13 4C13 6.76141 15.2386 9 18 9C19.405 9 21.0917 8.4331 22 7.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M8 10.5C9.10457 10.5 10 9.60457 10 8.5C10 7.39543 9.10457 6.5 8 6.5C6.89543 6.5 6 7.39543 6 8.5C6 9.60457 6.89543 10.5 8 10.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M12 2C5.92487 2 1 7.0625 1 11L2.89634 11.862C8.68069 14.4912 15.3193 14.4912 21.1037 11.862L23 11C23 7.0625 18.0751 2 12 2Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
