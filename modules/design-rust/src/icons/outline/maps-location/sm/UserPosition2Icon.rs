use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserPosition2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserPosition2Icon(props: UserPosition2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 7C13.6569 7 15 5.65685 15 4C15 2.34315 13.6569 1 12 1C10.3431 1 9 2.34315 9 4C9 5.65685 10.3431 7 12 7Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22 15.8313C22.642 16.3392 23 16.9044 23 17.5C23 19.7092 18.0751 21.5 12 21.5C5.92487 21.5 1 19.7092 1 17.5C1 16.9044 1.35799 16.3392 2 15.8313",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 10.5C8.41037 10.5 6 13.0637 6 16.5C10.3331 17.5368 13.6669 17.5368 18 16.5C18 13.0637 15.5896 10.5 12 10.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
