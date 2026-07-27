use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OnionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OnionIcon(props: OnionIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 22C16.9706 22 21 18.2116 21 13.5385C21 10.3227 19.092 7.52596 16.2823 6.09426C15.021 5.45155 14 4.27471 14 2.85908V2H10V2.85908C10 4.27471 8.97905 5.45155 7.71772 6.09426C4.908 7.52596 3 10.3227 3 13.5385C3 18.2116 7.02944 22 12 22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12 16V11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16.545 15.4858C17.1265 14.3734 17.1641 12.5892 16.545 11.4858",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7.47327 15.5C6.8917 14.3876 6.85414 12.6034 7.47327 11.5",
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
