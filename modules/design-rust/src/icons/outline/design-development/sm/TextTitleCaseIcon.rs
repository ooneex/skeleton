use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextTitleCaseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextTitleCaseIcon(props: TextTitleCaseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 13H11",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M23 7V19.2918C23 21.3398 21.305 23 19.257 23V23C17.8866 23 16.6129 22.2257 16 21V21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15 11V13C15 15.2091 16.7909 17 19 17C21.2091 17 23 15.2091 23 13V11C23 8.79086 21.2091 7 19 7C16.7909 7 15 8.79086 15 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M1.69144 17H1.5L6.38889 3H7.61111L12.5 17H12.2916",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
