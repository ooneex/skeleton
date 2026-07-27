use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Eye2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Eye2Icon(props: Eye2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m30.929,15.628c-.174-.434-4.373-10.628-14.929-10.628S1.245,15.195,1.071,15.628l-.148.372.148.372c.174.434,4.373,10.628,14.929,10.628s14.755-10.195,14.929-10.628l.148-.372-.148-.372Zm-14.929,6.372c-3.314,0-6-2.686-6-6s2.686-6,6-6,6,2.686,6,6-2.686,6-6,6Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
