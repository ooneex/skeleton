use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FeatherIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FeatherIcon(props: FeatherIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20.93,2.002c-8.143.576-13.542,2.909-15.615,6.747-1.381,2.558-1.149,5.629.67,8.882l.138.247.247.138c.232.13.459.227.689.341l4.942-4.942-2.566,5.845c.772.198,1.53.316,2.262.316,1.262,0,2.456-.296,3.555-.889,3.838-2.073,6.171-7.472,6.747-15.615l.081-1.149-1.149.081Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: ".136",
                y: "15.5",
                width: "14.728",
                height: "2",
                transform: "translate(-9.471 10.136) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
