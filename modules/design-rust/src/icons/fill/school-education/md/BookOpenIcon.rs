use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BookOpenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BookOpenIcon(props: BookOpenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m15,4.366c-4.488-2.046-9.02-1.792-13.496.765l-.504.288v24.304l1.496-.855c4.209-2.405,8.304-2.49,12.504-.271V4.366Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m30.496,5.132c-4.476-2.557-9.007-2.811-13.496-.765v24.231c4.2-2.219,8.295-2.134,12.504.27l1.496.855V5.419l-.504-.288Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
