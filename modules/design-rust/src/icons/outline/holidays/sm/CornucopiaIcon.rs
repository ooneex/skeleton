use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CornucopiaIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CornucopiaIcon(props: CornucopiaIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11.0371 20H10.5C8.567 20 7 18.433 7 16.5C7 14.567 8.567 13 10.5 13C12.0285 13 13.3282 13.9799 13.8052 15.3457L13.8564 15.492",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linejoin: "round",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 21C15.5811 21 23 15.9434 23 7.82661C22.9985 5.84927 22.5503 3.77808 21.6338 2H21.5C18.519 6.98803 13.1437 7 8 7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 21C11.3137 21 14 17.866 14 14C14 10.134 11.3137 7 8 7C4.68629 7 2 10.134 2 14C2 17.866 4.68629 21 8 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M18.4231 11C18.7933 11.9093 19.0005 12.9264 19.0005 14C19.0005 15.4872 18.5397 16.687 17.8618 17.8208L18.0045 17.571",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
