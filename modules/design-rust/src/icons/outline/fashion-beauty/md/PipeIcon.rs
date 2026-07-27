use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PipeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PipeIcon(props: PipeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2.5 15H13",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M13 10V16.5C13 17.8807 14.1193 19 15.5 19C16.8807 19 18 17.8807 18 16.5V12C18 7.02944 22.0294 3 27 3H29.5C29.7761 3 30 3.22386 30 3.5V6.5C30 6.77614 29.7761 7 29.5 7H28C25.7909 7 24 8.79086 24 11V17.1369C24 23.1364 19.1364 28 13.1369 28C6.66241 28 1.62531 22.3722 2.3403 15.9373L3 10H13Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
