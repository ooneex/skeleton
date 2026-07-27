use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UsersShakingHandsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UsersShakingHandsIcon(props: UsersShakingHandsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m4.5,7c1.105,0,2-.895,2-2s-.895-2-2-2-2,.895-2,2,.895,2,2,2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            path {
                d: "m19.5,7c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            path {
                d: "m7,17l-.5,4H2.5l-.405-8.909c-.052-1.139.858-2.091,1.998-2.091h.671c.758,0,1.45.428,1.789,1.106l1.171,2.342c.169.339.516.553.894.553h1.382",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m17,17l.5,4h4l.405-8.909c.052-1.139-.858-2.091-1.998-2.091h-.671c-.758,0-1.45.428-1.789,1.106l-1.171,2.342c-.169.339-.516.553-.894.553h-1.382",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
