use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CurlingStoneIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CurlingStoneIcon(props: CurlingStoneIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 4H14.4384C15.3562 4 16.1561 4.62459 16.3787 5.51493L16.8787 7.51493C16.9403 7.76132 16.754 8 16.5 8V8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M5.20246 9.06326C2.82011 9.44515 1 11.51 1 14V15C1 17.7614 3.23858 20 6 20H18C20.7614 20 23 17.7614 23 15V14C23 11.5082 21.1772 9.44214 18.7923 9.06243",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M17 12H7C5.89543 12 5 11.1046 5 10C5 8.89543 5.89543 8 7 8H17C18.1046 8 19 8.89543 19 10C19 11.1046 18.1046 12 17 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
