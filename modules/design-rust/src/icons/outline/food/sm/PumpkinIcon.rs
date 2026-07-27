use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PumpkinIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PumpkinIcon(props: PumpkinIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 1H14C12.8954 1 12 1.89543 12 3L12 4V3.96238",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9.73288 21H9.5C4.91635 20.7078 1 19.3504 1 14.8239C1 8.73407 3.54841 5 9.5 5H9.68457",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14.2544 21H14.5C19.0837 20.7078 23 19.3504 23 14.8239C23 8.73407 20.4516 5 14.5 5H14.2819",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12 22C14.7614 22 17 17.9706 17 13C17 8.02944 14.7614 4 12 4C9.23858 4 7 8.02944 7 13C7 17.9706 9.23858 22 12 22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
