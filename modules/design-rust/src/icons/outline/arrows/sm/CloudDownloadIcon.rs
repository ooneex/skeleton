use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CloudDownloadIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CloudDownloadIcon(props: CloudDownloadIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 11V20V19.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7.75732 15.7572L12 19.9999L16.2426 15.7572",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19 19C21.2 19 23 17.2 23 15C23 12.8 21.2 11 19 11C18.7 7.1 15.5 4 11.5 4C7.5 4 4.2 7.2 4 11.1C2.3 11.5 1 13.1 1 15C1 17.2 2.8 19 5 19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
