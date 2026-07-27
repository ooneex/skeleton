use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HeadphonesPlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HeadphonesPlusIcon(props: HeadphonesPlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6 13.5V13.5C7.10457 13.5 8 14.3954 8 15.5V21H7C4.79086 21 3 19.2091 3 17V12C3 7.02944 7.02944 3 12 3V3C16.9706 3 21 7.02944 21 12V17C21 19.2091 19.2091 21 17 21H16V15.5C16 14.3954 16.8954 13.5 18 13.5V13.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9.5 9.5L12 9.5L14.5 9.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 7L12 9.5L12 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
