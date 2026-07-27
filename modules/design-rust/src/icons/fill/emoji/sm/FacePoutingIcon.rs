use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FacePoutingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FacePoutingIcon(props: FacePoutingIconProps) -> Element {
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
                d: "M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM18 9H14V11H18V9ZM6 9H10V11H6V9ZM12 12C9.23858 12 7 14.2386 7 17L17 17C17 14.2386 14.7614 12 12 12Z",
                fill: "currentColor",
            }
        }
    }
}
