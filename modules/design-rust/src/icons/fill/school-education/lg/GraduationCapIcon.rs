use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GraduationCapIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GraduationCapIcon(props: GraduationCapIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M40 38.9307L36.4287 40.875C28.6797 45.0921 19.3203 45.0921 11.5713 40.875L8 38.9307V25.5693L22.46 34.2197C23.4083 34.7869 24.5918 34.787 25.54 34.2197L40 25.5664V38.9307Z",
                fill: "currentColor",
            }
            path {
                d: "M43 23H46V34H43V23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M1.02297 17.9007L23.9998 31.6451L46.9739 17.8979V15.7131L23.9998 1.97974L1.02366 15.7151L1.02297 17.9007Z",
                fill: "currentColor",
            }
        }
    }
}
