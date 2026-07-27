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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m23.775,11.565c-.169-.35-4.225-8.565-11.775-8.565S.394,11.215.225,11.565l-.21.435.21.435c.169.35,4.224,8.565,11.775,8.565s11.606-8.215,11.775-8.565l.21-.435-.21-.435Zm-11.775,4.435c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
