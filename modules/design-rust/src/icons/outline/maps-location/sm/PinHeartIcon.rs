use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PinHeartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PinHeartIcon(props: PinHeartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9.73456 19.7581C7.52667 17.3593 4.5 13.4056 4.5 9.75775C4.5 4.81188 8.34409 2.00007 12 2.00007C15.6559 2.00007 19.5 4.81188 19.5 9.75775C19.5 9.86202 19.4975 9.96655 19.4927 10.0713",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 12C13.3807 12 14.5 10.8807 14.5 9.5C14.5 8.11929 13.3807 7 12 7C10.6193 7 9.5 8.11929 9.5 9.5C9.5 10.8807 10.6193 12 12 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18 22.5C19.109 22 23 19.229 23 16.689C23 15.204 21.794 14 20.308 14C19.328 14 18.596 14.614 18 15.303C17.405 14.613 16.672 14 15.692 14C14.205 14 13 15.204 13 16.689C13 19.229 16.891 22 18 22.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
