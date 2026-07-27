use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FocusModeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FocusModeIcon(props: FocusModeIconProps) -> Element {
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
                cy: "12",
                r: "4",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m7.365,22.028l-.865-.5c-3.392-1.962-5.5-5.613-5.5-9.528S3.107,4.434,6.5,2.472l.865-.5,1.001,1.731-.866.501c-2.776,1.605-4.5,4.593-4.5,7.796s1.725,6.191,4.5,7.796l.866.501-1.001,1.731Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m16.635,22.028l-1.001-1.731.866-.501c2.776-1.605,4.5-4.593,4.5-7.796s-1.725-6.191-4.5-7.796l-.866-.501,1.001-1.731.865.5c3.392,1.962,5.5,5.613,5.5,9.528s-2.107,7.566-5.5,9.528l-.865.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
