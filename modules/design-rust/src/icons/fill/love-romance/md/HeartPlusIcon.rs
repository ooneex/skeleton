use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HeartPlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HeartPlusIcon(props: HeartPlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m14,20c0-5.514,4.486-10,10-10,2.701,0,5.151,1.081,6.952,2.827.357-3.856-1.755-7.666-5.412-9.179-3.362-1.393-7.113-.509-9.54,2.125-2.426-2.634-6.177-3.518-9.539-2.125C2.02,5.485-.151,10.707,1.621,15.288c2.173,5.621,7.678,10.001,9.312,11.209l5.061,3.747,2.543-1.878c-2.728-1.788-4.537-4.867-4.537-8.365Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m24,12c-4.411,0-8,3.589-8,8s3.589,8,8,8,8-3.589,8-8-3.589-8-8-8Zm4.5,9h-3.5v3.5h-2v-3.5h-3.5v-2h3.5v-3.5h2v3.5h3.5v2Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
