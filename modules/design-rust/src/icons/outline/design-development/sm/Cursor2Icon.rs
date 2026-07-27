use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Cursor2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Cursor2Icon(props: Cursor2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.49997 4.50003L16.5 7.50003L13.4981 10.6698L18.5857 15.7573C19.3668 16.5383 19.3668 17.8047 18.5858 18.5857V18.5857C17.8047 19.3668 16.5384 19.3668 15.7574 18.5858L10.6697 13.4982L7.49994 16.5001L4.49997 4.50003Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
