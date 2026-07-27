use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TabletMobile2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TabletMobile2Icon(props: TabletMobile2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m9,20v-9c0-2.757,2.243-5,5-5h3v-2c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h4.101c-.066-.323-.101-.658-.101-1Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "11",
                y: "8",
                width: "11",
                height: "15",
                rx: "3",
                ry: "3",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
