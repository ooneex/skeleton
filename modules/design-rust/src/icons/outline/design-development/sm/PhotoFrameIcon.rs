use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PhotoFrameIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PhotoFrameIcon(props: PhotoFrameIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 17.5C14.2091 17.5 16 15.0376 16 12C16 8.96243 14.2091 6.5 12 6.5C9.79086 6.5 8 8.96243 8 12C8 15.0376 9.79086 17.5 12 17.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 19.6667V4.33333C18.1592 4.33333 16.6667 2.84083 16.6667 1H7.33333C7.33333 2.84083 5.84083 4.33333 4 4.33333V19.6667C5.84083 19.6667 7.33333 21.1592 7.33333 23H16.6667C16.6667 21.1592 18.1592 19.6667 20 19.6667Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
