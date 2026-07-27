use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct KickScooterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn KickScooterIcon(props: KickScooterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 15H17.8325",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M3 20C4.10457 20 5 19.1046 5 18C5 16.8954 4.10457 16 3 16C1.89543 16 1 16.8954 1 18C1 19.1046 1.89543 20 3 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 20C22.1046 20 23 19.1046 23 18C23 16.8954 22.1046 16 21 16C19.8954 16 19 16.8954 19 18C19 19.1046 19.8954 20 21 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3 13V13C5.76142 13 8 15.2386 8 18V19H15.5L19 13L18.1977 5.77914C18.0851 4.76627 17.229 4 16.2099 4H16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
