use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShieldIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShieldIcon(props: ShieldIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14.5859 11.5L12 14.0859L9.41406 11.5L12 8.91406L14.5859 11.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 4V12.25C22 16.1125 19.4234 18.8114 17.0781 20.4727C15.5288 21.5701 13.8033 22.4545 12 23.0537C10.1968 22.4526 8.47193 21.5706 6.92188 20.4727C4.57662 18.8114 2 16.1125 2 12.25V4L12 1.5L22 4ZM6.58594 11.5L12 16.9141L17.4141 11.5L12 6.08594L6.58594 11.5Z",
                fill: "currentColor",
            }
        }
    }
}
