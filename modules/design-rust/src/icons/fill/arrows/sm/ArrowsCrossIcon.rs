use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsCrossIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsCrossIcon(props: ArrowsCrossIconProps) -> Element {
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
                d: "M1.58582 3.00003L20.0858 21.5L21.5 20.0858L3.00003 1.58582L1.58582 3.00003Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.00003 22.4143L10.4142 15.0001L9.00003 13.5858L1.58582 21.0001L3.00003 22.4143ZM15 10.4143L21.5 3.91424L20.0858 2.50003L13.5858 9.00006L15 10.4143Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M22.0001 10L14.0002 1.99997L22.0002 2.00007L22.0001 10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M22.0001 14L14.0002 22L22.0002 21.9999L22.0001 14Z",
                fill: "currentColor",
            }
        }
    }
}
