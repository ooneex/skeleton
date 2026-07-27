use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlertQuestionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlertQuestionIcon(props: AlertQuestionIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m17.031,23h-2.133l.11-1.124c.437-3.496,2.583-5.079,4.477-6.476,1.875-1.383,3.494-2.578,3.593-5.527.173-5.145-4.535-5.788-5.982-5.863-3.48-.171-6.192,1.831-7.088,5.245l-.254.967-1.935-.508.254-.967c1.132-4.318,4.719-6.977,9.125-6.734,4.939.254,8.032,3.366,7.878,7.927-.132,3.917-2.402,5.591-4.405,7.069-1.759,1.297-3.283,2.422-3.657,4.949l.016,1.041Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "16",
                cy: "28",
                r: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
