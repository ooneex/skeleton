use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceWoozyClosedEyesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceWoozyClosedEyesIcon(props: FaceWoozyClosedEyesIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16ZM24 12H18V14H24V12ZM8 12H14V14H8V12ZM16 20.6829L12.4477 17.6381L8.58582 21.5L10 22.9142L12.5523 20.3619L16 23.3171L19.4477 20.3619L22 22.9142L23.4142 21.5L19.5523 17.6381L16 20.6829Z",
                fill: "currentColor",
            }
        }
    }
}
