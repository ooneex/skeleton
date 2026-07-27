use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HotspotIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HotspotIcon(props: HotspotIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m16.742,21.806c3.131-1.689,5.258-4.999,5.258-8.806,0-5.523-4.477-10-10-10C6.477,3,2,7.477,2,13c0,3.807,2.127,7.117,5.258,8.806",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m14.845,18.284c1.878-1.014,3.155-3,3.155-5.284,0-3.314-2.686-6-6-6-3.314,0-6,2.686-6,6,0,2.284,1.276,4.27,3.155,5.284",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            circle {
                cx: "12",
                cy: "13",
                r: "2",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
        }
    }
}
