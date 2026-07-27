use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link4SlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link4SlashIcon(props: Link4SlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m8.419,24.995l-.481-.057c-4.526-.532-7.938-4.375-7.938-8.938C0,11.038,4.038,7,9,7h4v2h-4c-3.86,0-7,3.14-7,7,0,3.391,2.421,6.27,5.705,6.881l1.086-1.086,1.414,1.414-1.786,1.786Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m23.124,10.288l-1.288-1.288h-2.836v-2h4c.359,0,.713.021,1.061.062l2.048.242-2.986,2.984Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m23,25h-4v-2h4c3.86,0,7-3.14,7-7,0-2.159-.974-4.165-2.673-5.503l-.786-.619,1.237-1.571.786.619c2.184,1.72,3.436,4.298,3.436,7.074,0,4.962-4.038,9-9,9Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "-4.799",
                y: "15",
                width: "41.598",
                height: "2",
                transform: "translate(-6.627 16) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            polygon {
                points: "15.437 17.977 14.461 17 8 17 8 15 18.414 15 15.437 17.977",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
