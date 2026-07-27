use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SportsBraIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SportsBraIcon(props: SportsBraIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 17H19",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4.99998 21V16.4186L4.84945 16.268C2.78393 14.2025 2.0084 11.2569 2.8263 8.45261L4.99998 2H7.00001L6.802 3.38602C6.6034 4.77623 6.7312 6.1936 7.17529 7.52586C7.6678 9.00339 9.05051 10 10.608 10H13.392C14.9495 10 16.3322 9.00339 16.8247 7.52586C17.2688 6.1936 17.3966 4.77623 17.198 3.38601L17 2H19L21.1737 8.45261C21.9916 11.2569 21.216 14.2025 19.1505 16.268L19 16.4186V21H4.99998Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
