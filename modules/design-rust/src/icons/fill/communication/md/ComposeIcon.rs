use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ComposeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ComposeIcon(props: ComposeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m26,30H6c-2.206,0-4-1.794-4-4V6c0-2.206,1.794-4,4-4h15v2H6c-1.103,0-2,.897-2,2v20c0,1.103.897,2,2,2h20c1.103,0,2-.897,2-2v-15h2v15c0,2.206-1.794,4-4,4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "10.894",
                y: "8.5",
                width: "23.213",
                height: "2",
                transform: "translate(-.127 18.692) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
