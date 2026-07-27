use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct KeyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn KeyIcon(props: KeyIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "9.5",
                cy: "22.5",
                r: "2.5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m24,2l-11.337,11.288c-.692-.182-1.414-.288-2.163-.288-4.694,0-8.5,3.806-8.5,8.5s3.806,8.5,8.5,8.5,8.5-3.806,8.5-8.5c0-.756-.108-1.484-.293-2.182l2.293-2.318v-4h4v-4h3l2-2V2h-6Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
