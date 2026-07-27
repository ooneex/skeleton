use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SearchContentIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SearchContentIcon(props: SearchContentIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "1",
                y: "11",
                width: "11",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "1",
                y: "19",
                width: "11",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "1",
                y: "27",
                width: "22",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "1",
                y: "3",
                width: "22",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m31.414,25l-4.816-4.816c.876-1.169,1.402-2.615,1.402-4.184,0-3.86-3.141-7-7-7s-7,3.14-7,7,3.141,7,7,7c1.57,0,3.015-.526,4.184-1.402l4.816,4.816,1.414-1.414Zm-15.414-9c0-2.757,2.243-5,5-5s5,2.243,5,5-2.243,5-5,5-5-2.243-5-5Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "21",
                cy: "16",
                r: "3",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
