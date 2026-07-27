use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PeopleRoofIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PeopleRoofIcon(props: PeopleRoofIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "23.414 6.09 12 .901 .586 6.09 1.414 7.91 12 3.099 22.586 7.91 23.414 6.09",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m5.5,16c-3.033,0-5.5,2.467-5.5,5.5v1.5h11v-1.5c0-3.033-2.467-5.5-5.5-5.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "5.5",
                cy: "11",
                r: "3",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m18.5,16c-3.033,0-5.5,2.467-5.5,5.5v1.5h11v-1.5c0-3.033-2.467-5.5-5.5-5.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "18.5",
                cy: "11",
                r: "3",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
