use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AddressBookIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AddressBookIcon(props: AddressBookIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 8V14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23 2H4V30H23C24.6569 30 26 28.6569 26 27V5C26 3.34315 24.6569 2 23 2Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 14C16.6569 14 18 12.6569 18 11C18 9.34315 16.6569 8 15 8C13.3431 8 12 9.34315 12 11C12 12.6569 13.3431 14 15 14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M15 17C11.6863 17 9 19.6863 9 23L10.1493 23.2873C13.3341 24.0835 16.6659 24.0835 19.8507 23.2873L21 23C21 19.6863 18.3137 17 15 17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
        }
    }
}
