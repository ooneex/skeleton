use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserClockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserClockIcon(props: UserClockIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "11",
                cy: "5.5",
                r: "4.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m10,18c0-2.312.992-4.392,2.566-5.854-.51-.09-1.031-.146-1.566-.146-4.962,0-9,4.038-9,9v.781l.757.189c2.735.684,5.489,1.025,8.243,1.025.248,0,.496-.018.744-.023-1.089-1.367-1.744-3.093-1.744-4.973Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m18,12c-3.309,0-6,2.691-6,6s2.691,6,6,6,6-2.691,6-6-2.691-6-6-6Zm2,9.414l-3-3v-3.914h2v3.086l2.414,2.414-1.414,1.414Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
