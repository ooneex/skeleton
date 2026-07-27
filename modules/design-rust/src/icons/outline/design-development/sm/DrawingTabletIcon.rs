use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DrawingTabletIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DrawingTabletIcon(props: DrawingTabletIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 4L4 4C2.89543 4 2 4.89543 2 6L2 18C2 19.1046 2.89543 20 4 20L20 20C21.1046 20 22 19.1046 22 18L22 11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12.9999 12.7052C12.9081 14.5549 11.3738 16 9.49977 16C7.56683 16 5.99988 14.433 5.99988 12.5C5.99988 10.7367 7.30374 9.27801 8.99988 9.03543",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 12L22 6C22.8284 5.17157 22.8284 3.82843 22 3C21.1716 2.17157 19.8284 2.17157 19 3L13 9V12H16Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
