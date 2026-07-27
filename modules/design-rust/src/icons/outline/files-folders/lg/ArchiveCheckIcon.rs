use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArchiveCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArchiveCheckIcon(props: ArchiveCheckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 30H15V35H33V30H43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M5 10L5 38C5 40.7614 7.23858 43 10 43L38 43C40.7614 43 43 40.7614 43 38L43 10C43 7.23857 40.7614 5 38 5L10 5C7.23857 5 5 7.23857 5 10Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15.5 18L21.5 24L32.5 13",
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
