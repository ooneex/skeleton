use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Gauge5IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Gauge5Icon(props: Gauge5IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m17.414,16l-1.414-1.414-7.981,7.981c-.595-.351-1.28-.567-2.019-.567-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4c0-.74-.215-1.424-.567-2.019l7.981-7.981Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m6,1h-1v6h2v-3.979c5.589.24,10.651,2.502,14.517,6.048l-2.788,2.789,1.414,1.414,2.788-2.789c3.546,3.866,5.807,8.928,6.048,14.517h-3.979v2h6v-1C31,12.215,19.785,1,6,1Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
