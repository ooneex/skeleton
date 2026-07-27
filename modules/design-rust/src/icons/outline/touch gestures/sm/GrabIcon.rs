use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GrabIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GrabIcon(props: GrabIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.5 10.0001V6.35338C7.5 5.12005 8.60539 4.18065 9.82257 4.37956L18.2185 5.75166C19.6891 6.1046 20.667 7.497 20.5 9.00011L19.5 20.0001H8V18.0001L5 14.5C4.50533 13.8737 4 13.0239 4 12.1866V10.0001C4 8.34326 5.34315 7.00012 7 7.00012V7.00012",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
