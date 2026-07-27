use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GymClassIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GymClassIcon(props: GymClassIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.5 8C16.8807 8 18 6.88071 18 5.5C18 4.11929 16.8807 3 15.5 3C14.1193 3 13 4.11929 13 5.5C13 6.88071 14.1193 8 15.5 8Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15.5 15L14 18.5L17.2074 20.1037C18.7314 20.8656 19.3156 22.7423 18.4934 24.2346L15.8681 28.9999L13.1041 28.9899L14.5001 22.9999L10.2104 22.1483C8.27458 21.764 7.23085 19.6473 8.10454 17.8776L10.6746 12.6719C11.18 11.6481 12.2228 11 13.3646 11H24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M27 9V8C27 7.44772 26.5523 7 26 7H22C21.4477 7 21 7.44772 21 8V9H27Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M27 13V14C27 14.5523 26.5523 15 26 15H22C21.4477 15 21 14.5523 21 14V13H27Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
