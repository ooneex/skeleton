use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FuelCanIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FuelCanIcon(props: FuelCanIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3.43932 5.56067L4.49998 4.50001L5.56064 3.43935",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 19L20 5C20 3.89543 19.1046 3 18 3L11.8284 3C11.298 3 10.7893 3.21071 10.4142 3.58579L4.58579 9.41421C4.21071 9.78929 4 10.298 4 10.8284L4 19C4 20.1046 4.89543 21 6 21L18 21C19.1046 21 20 20.1046 20 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 7L16 7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 10.5C13.2984 11.5833 14.5 13.2083 14.5 14.6042C14.5 16.0768 13.3806 17 12 17C10.6194 17 9.5 16.0768 9.5 14.6042C9.5 13.2083 10.7149 11.5833 12 10.5Z",
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
