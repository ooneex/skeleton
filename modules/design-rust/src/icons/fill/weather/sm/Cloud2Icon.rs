use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Cloud2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Cloud2Icon(props: Cloud2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m19.892,10.08c-.708-4.091-4.18-7.08-8.392-7.08S3.634,6.239,3.067,10.353c-1.813.746-3.067,2.594-3.067,4.647,0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5,0-2.452-1.775-4.498-4.108-4.92Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
