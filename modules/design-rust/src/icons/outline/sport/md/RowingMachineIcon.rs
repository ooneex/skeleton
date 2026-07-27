use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RowingMachineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RowingMachineIcon(props: RowingMachineIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 10L18 8L17.5 8.1",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8.5 19H8L6 24H6.0845",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23.5 19H24L26 24H25.9155",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 15C27.3137 15 30 12.3137 30 9C30 5.68629 27.3137 3 24 3C20.6863 3 18 5.68629 18 9C18 12.3137 20.6863 15 24 15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 11C25.1046 11 26 10.1046 26 9C26 7.89543 25.1046 7 24 7C22.8954 7 22 7.89543 22 9C22 10.1046 22.8954 11 24 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23 19H11M11 19H2V15.1173C2 14.5213 2.51807 14.0576 3.11043 14.1234L10.1104 14.9012C10.6169 14.9574 11 15.3855 11 15.895V19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 19V15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 28H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
