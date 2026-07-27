use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SpadesSuitIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SpadesSuitIcon(props: SpadesSuitIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 21.5H8V21.0455C8.9559 19.9447 9.96996 19.0116 10 17.5H7.8456C5.169 17.5 3 15.3753 3 12.7547C3 8.27235 10.0038 3.38235 12 2.5C13.9962 3.38235 21 8.27235 21 12.7547C21 15.3753 18.8292 17.5 16.1544 17.5H14C14.0296 19.0117 15.0441 19.9447 16 21.0455L16 21.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
