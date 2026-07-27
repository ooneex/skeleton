use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FlaskIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FlaskIcon(props: FlaskIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "8",
                y: "1",
                width: "16",
                height: "6",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m26.426,24.674l-6.426-8.995v-6.68h-8v6.68l-6.426,8.995c-1.282,1.794-.865,4.298.929,5.58.683.488,1.487.746,2.327.746h14.341c1.068,0,2.072-.416,2.828-1.171.756-.755,1.172-1.76,1.172-2.828,0-.839-.258-1.643-.745-2.327Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
