use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceSadCryingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceSadCryingIcon(props: FaceSadCryingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 17C8 14.7909 9.79086 13 12 13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            circle {
                cx: "8.5",
                cy: "9.5",
                r: "1.5",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            circle {
                cx: "15.5",
                cy: "9.5",
                r: "1.5",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M15.5 13.5C16.4089 14.25 17.25 15.375 17.25 16.3413C17.25 17.3609 16.4664 18 15.5 18C14.5336 18 13.75 17.3609 13.75 16.3413C13.75 15.375 14.6004 14.25 15.5 13.5Z",
                fill: "currentColor",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
