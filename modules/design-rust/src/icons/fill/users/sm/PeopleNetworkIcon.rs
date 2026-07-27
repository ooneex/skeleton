use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PeopleNetworkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PeopleNetworkIcon(props: PeopleNetworkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "12",
                cy: "13",
                r: "3",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "12",
                cy: "3",
                r: "3",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "5",
                cy: "8",
                r: "3",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "19",
                cy: "8",
                r: "3",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m12,17c-2.655,0-5.05,1.473-6.251,3.845-.234.466-.211,1.009.062,1.453.271.439.741.702,1.257.702h9.865c.516,0,.985-.263,1.257-.702.272-.444.296-.987.061-1.455-1.2-2.37-3.595-3.843-6.25-3.843Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
