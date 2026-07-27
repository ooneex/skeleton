use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MirrorWithFrameIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MirrorWithFrameIcon(props: MirrorWithFrameIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M40.5 39H7.5V36H40.5V39Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 19.5H7V16.5H12V19.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M41 19.5H36V16.5H41V19.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M39 44L39 4L42 4L42 44L39 44Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 44L6 4L9 4L9 44L6 44Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 5H17C14.2386 5 12 7.23858 12 10V28C12 30.7614 14.2386 33 17 33H31C33.7614 33 36 30.7614 36 28L36 10C36 7.23858 33.7614 5 31 5ZM15 26.1213L27.1213 14L25 11.8787L15 21.8787V26.1213ZM33 15.8787V20.1213L29 24.1213L26.8787 22L33 15.8787Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
