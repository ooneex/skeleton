use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CursorGrabIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CursorGrabIcon(props: CursorGrabIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 24V29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30 24V29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12.8337 19.1252V11.9875C12.8337 8.86918 15.6568 6.51161 18.7252 7.06764L33.7391 9.78838C37.8405 10.5316 40.684 14.2995 40.2738 18.4475L38.0435 41H15.1304V36.625L8.08889 27.7839C7.38388 26.8987 7 25.8005 7 24.6688V19.75C7 16.9886 9.23858 14.75 12 14.75H12.4758",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
