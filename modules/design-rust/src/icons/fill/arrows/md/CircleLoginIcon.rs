use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleLoginIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleLoginIcon(props: CircleLoginIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.0451 15C10.0152 15.3294 10 15.663 10 16C10 16.337 10.0152 16.6706 10.0451 17L1 17V15H10.0451Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M10.047 17L18 17V21.9638L26.2002 16L18 10.0363V15L10.047 15C10.5506 9.67007 15.0383 5.5 20.5 5.5C26.2672 5.5 30.9484 10.1496 30.9996 15.9047C30.9998 15.9364 31 15.9682 31 16C31 16.0318 30.9998 16.0636 30.9996 16.0953C30.9484 21.8504 26.2672 26.5 20.5 26.5C15.0383 26.5 10.5506 22.3299 10.047 17Z",
                fill: "currentColor",
            }
        }
    }
}
