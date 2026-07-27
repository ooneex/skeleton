use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Eye2SlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Eye2SlashIcon(props: Eye2SlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m11.757,20.243c-1.086-1.086-1.757-2.586-1.757-4.243,0-3.314,2.686-6,6-6,1.657,0,3.157.672,4.243,1.757",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m21.991,15.667c.006.11.009.221.009.333,0,3.314-2.686,6-6,6-.115,0-.229-.003-.342-.01",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m8.322,23.681c-4.431-2.954-6.322-7.681-6.322-7.681,0,0,4-10,14-10,3.125,0,5.664.977,7.678,2.319",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            path {
                d: "m26.706,10.951c2.281,2.516,3.294,5.049,3.294,5.049,0,0-4,10-14,10-1.387,0-2.658-.192-3.819-.523",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "2",
                y1: "30",
                x2: "30",
                y2: "2",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
