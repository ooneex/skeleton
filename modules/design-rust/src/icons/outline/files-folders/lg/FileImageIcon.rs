use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileImageIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileImageIcon(props: FileImageIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 3V16H7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14.228 45H12C9.23857 45 7 42.7699 7 40.0084C7 32.8718 7 20.4779 7 16.2381C7 15.4424 7.31607 14.6839 7.87868 14.1213L18.1213 3.87868C18.6839 3.31607 19.447 3 20.2426 3H36C38.7614 3 41 5.23838 41 7.99981C41 14.6422 41 25.4969 41 34",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M42 45L33.2 31L27.7 39.8958L25.5 37.125L20 45H42Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M24 32C25.6569 32 27 30.6569 27 29C27 27.3431 25.6569 26 24 26C22.3431 26 21 27.3431 21 29C21 30.6569 22.3431 32 24 32Z",
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
