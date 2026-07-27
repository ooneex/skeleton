use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BroomIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BroomIcon(props: BroomIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 17V7C19 4.23857 21.2386 2 24 2C26.7614 2 29 4.23858 29 7L29 17H19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M19.0028 20H28.9976L41.0976 37.7467C42.908 40.4019 41.0064 44 37.7927 44H30V35H27V44H21V35H18V44H10.2078C6.99408 44 5.09247 40.4019 6.90285 37.7467L19.0028 20Z",
                fill: "currentColor",
            }
        }
    }
}
