use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UTurnToRight2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UTurnToRight2Icon(props: UTurnToRight2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 2H5C3.34315 2 2 3.34315 2 5V15C2 16.6569 3.34315 18 5 18H21V16H5C4.44772 16 4 15.5523 4 15V5C4 4.44772 4.44772 4 5 4H12V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.5859 12L19.5859 17L14.5859 22L16.0001 23.4142L22.4143 17L16.0001 10.5858L14.5859 12Z",
                fill: "currentColor",
            }
        }
    }
}
