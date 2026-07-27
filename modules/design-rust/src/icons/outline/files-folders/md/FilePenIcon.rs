use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FilePenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FilePenIcon(props: FilePenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 2V11H4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12 30H7C5.34315 30 4 28.6569 4 27V11.2426C4 10.447 4.31607 9.68393 4.87868 9.12132L11.1213 2.87868C11.6839 2.31607 12.447 2 13.2426 2H25C26.6569 2 28 3.34315 28 5V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19.9298 29.6662L28.2022 21.3939C29.1952 20.4009 29.1952 18.7909 28.2022 17.7979C27.2092 16.8049 25.5992 16.8049 24.6063 17.7979L16.3338 26.0702L16 29.9999L19.9298 29.6662Z",
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
