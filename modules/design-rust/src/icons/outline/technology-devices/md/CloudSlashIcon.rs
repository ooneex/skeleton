use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CloudSlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CloudSlashIcon(props: CloudSlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m11.657,26h13.843c3.038,0,5.5-2.462,5.5-5.5,0-2.878-2.211-5.235-5.026-5.476.009-.175.026-.347.026-.524,0-.874-.107-1.723-.308-2.535",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m23.857,8.143c-1.918-2.518-4.948-4.143-8.357-4.143-5.747,0-10.409,4.619-10.492,10.346-2.333.822-4.008,3.04-4.008,5.654,0,2.998,2.199,5.483,5.072,5.929",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            line {
                x1: "2",
                y1: "30",
                x2: "30",
                y2: "2",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
