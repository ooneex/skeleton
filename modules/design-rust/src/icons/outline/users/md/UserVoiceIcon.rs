use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserVoiceIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserVoiceIcon(props: UserVoiceIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 14C16.7614 14 19 11.7614 19 9C19 6.23858 16.7614 4 14 4C11.2386 4 9 6.23858 9 9C9 11.7614 11.2386 14 14 14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 17.5C7.64912 17.5 2.5 22.2761 2.5 28.167C10.1662 29.9443 17.8338 29.9443 25.5 28.167C25.5 22.2761 20.3509 17.5 14 17.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M27.0711 16.0711C28.8807 14.2614 30 11.7614 30 9C30 6.23858 28.8807 3.73858 27.0711 1.92893",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24.2426 13.2426C25.3284 12.1569 26 10.6569 26 9C26 7.34315 25.3284 5.84315 24.2426 4.75736",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
