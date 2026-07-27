use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CloudIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CloudIcon(props: CloudIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m19,3h0c-6.149.003-11.372,4.245-12.679,10.185-1.823.396-3.437,1.406-4.598,2.896-1.314,1.685-1.894,3.781-1.631,5.902.493,3.983,3.891,7,7.908,7.018h11c7.168,0,13-5.832,13-13S26.168,3,19,3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
