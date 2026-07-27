use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DrawingTabletIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DrawingTabletIcon(props: DrawingTabletIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 5L5 5C3.34315 5 2 6.34314 2 8L2 24C2 25.6569 3.34315 27 5 27L27 27C28.6569 27 30 25.6569 30 24L30 13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 10C8.68629 10 6 12.6863 6 16C6 19.3137 8.68629 22 12 22C15.2127 22 17.843 19.5227 18.0004 16.3518",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21.9297 15.6663L30.2021 7.39391C31.195 6.40091 31.195 4.79097 30.202 3.79798C29.2091 2.80498 27.5991 2.80498 26.6061 3.79797L18.3338 12.0703L18 16L21.9297 15.6663Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
