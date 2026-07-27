use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LoveCardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LoveCardIcon(props: LoveCardIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16.3457 0.568166C18.22 0.149361 19.9998 1.57539 20 3.4959V3.99981L1 3.99688L1.78223 3.82305L16.3457 0.568166Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 6C21.6569 6 23 7.34315 23 9V18C23 19.6569 21.6569 21 20 21H1V6H20ZM14.0771 9.5C13.2336 9.5 12.523 10.0068 12 10.5957C11.477 10.0068 10.7664 9.5 9.92285 9.5C8.5851 9.50022 7.50011 10.5855 7.5 11.9248C7.5 14.2148 11.0017 16.5489 12 17C12.9983 16.5489 16.5 14.2148 16.5 11.9248C16.4999 10.5855 15.4149 9.50022 14.0771 9.5Z",
                fill: "currentColor",
            }
        }
    }
}
