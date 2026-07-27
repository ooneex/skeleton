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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "22",
                y: "4",
                width: "2",
                height: "6",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m17,1H2v22h15c1.654,0,3-1.346,3-3V4c0-1.654-1.346-3-3-3Zm-6,4c1.378,0,2.5,1.122,2.5,2.5s-1.122,2.5-2.5,2.5-2.5-1.122-2.5-2.5,1.122-2.5,2.5-2.5Zm-5.568,13l.125-1.111c.312-2.787,2.653-4.889,5.443-4.889s5.131,2.102,5.443,4.889l.125,1.111H5.432Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
