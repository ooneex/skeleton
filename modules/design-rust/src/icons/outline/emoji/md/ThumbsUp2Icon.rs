use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ThumbsUp2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ThumbsUp2Icon(props: ThumbsUp2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m9,27l3.212,1.285c1.181.472,2.442.715,3.714.715h6.947c1.312,0,2.472-.853,2.863-2.105l3.125-10c.604-1.932-.84-3.895-2.863-3.895h-7.998l2.097-6.99c.492-1.639-.485-3.357-2.146-3.772l-.951-.238c-2.302,5.069-4.987,8.662-8,11",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            rect {
                x: "3",
                y: "13",
                width: "6",
                height: "17",
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
