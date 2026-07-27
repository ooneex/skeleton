use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ResizeX2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ResizeX2Icon(props: ResizeX2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.5002 22.4143L27.9144 16.0001L21.5002 9.58588L20.0859 11.0001L25.0859 16.0001L20.0859 21.0001L21.5002 22.4143Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.4998 22.4143L4.08564 16.0001L10.4998 9.58588L11.9141 11.0001L6.91406 16.0001L11.9141 21.0001L10.4998 22.4143Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 3V29H1V3H3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 3V29H29V3H31Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
