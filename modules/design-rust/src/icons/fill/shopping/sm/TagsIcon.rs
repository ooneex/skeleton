use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TagsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TagsIcon(props: TagsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "21 10.414 12.586 2 4 2 4 0 13.414 0 22.414 9 21 10.414",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m20.098,12.684L11.414,4H2v9.414l8.684,8.684c.585.585,1.353.877,2.122.877s1.536-.292,2.121-.877l5.171-5.171c1.17-1.169,1.17-3.073,0-4.243Zm-12.598-1.684c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
