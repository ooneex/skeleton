use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareRight2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareRight2Icon(props: ShareRight2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m26,30H6c-2.206,0-4-1.794-4-4V6c0-2.206,1.794-4,4-4h10v2H6c-1.103,0-2,.897-2,2v20c0,1.103.897,2,2,2h20c1.103,0,2-.897,2-2v-7h2v7c0,2.206-1.794,4-4,4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m31.976,11L20-.031v6.086c-6.086.436-12,2.693-12,13.944v3l1.8-2.4c2.171-2.895,4.494-4.517,10.2-4.601v6.031l11.976-11.031Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
