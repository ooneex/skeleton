use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareInfoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareInfoIcon(props: SquareInfoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m26,2H6c-2.206,0-4,1.794-4,4v20c0,2.206,1.794,4,4,4h20c2.206,0,4-1.794,4-4V6c0-2.206-1.794-4-4-4Zm-9,22h-2v-9.5c0-.276-.225-.5-.5-.5h-2.5v-2h2.5c1.379,0,2.5,1.122,2.5,2.5v9.5Zm-1-14c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
