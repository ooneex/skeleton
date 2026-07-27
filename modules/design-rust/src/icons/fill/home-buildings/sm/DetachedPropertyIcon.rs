use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DetachedPropertyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DetachedPropertyIcon(props: DetachedPropertyIconProps) -> Element {
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
                d: "M12 1.36993L22.8506 7.08081L21.9191 8.85065L12 3.63003L2.08078 8.85065L1.14929 7.08081L12 1.36993Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 10.627V19C3 20.6568 4.34315 22 6 22H10V17H14V22H18C19.6569 22 21 20.6568 21 19V10.627L12 5.89014L3 10.627ZM11 8.99997V11.01H9V8.99997H11ZM11 13H9V15.01H11V13ZM15 8.99997V11.01H13V8.99997H15ZM15 13H13V15.01H15V13Z",
                fill: "currentColor",
            }
        }
    }
}
