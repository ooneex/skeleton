use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserListIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserListIcon(props: UserListIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "16",
                y: "5",
                width: "7",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "16",
                y: "9",
                width: "7",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "19",
                y: "13",
                width: "4",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "9.5",
                cy: "6",
                r: "4",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m9.5,12c-4.411,0-8,3.589-8,8v.754l.725.207c2.414.69,4.844,1.035,7.275,1.035s4.861-.345,7.275-1.035l.725-.207v-.754c0-4.411-3.589-8-8-8Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
