use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BagShopping2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BagShopping2Icon(props: BagShopping2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16.5 20V9.5C16.5 5.35786 19.8579 2 24 2C28.1421 2 31.5 5.35786 31.5 9.5V20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9.96773 24L7.25758 36.9779C6.60906 40.0835 8.97946 43 12.152 43H35.8378C39.0137 43 41.3849 40.0777 40.7306 36.9699L38 24V14H9.96773V24Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
