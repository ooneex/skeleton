use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BagIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BagIcon(props: BagIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 -2.18557e-07C14.7614 -9.78513e-08 17 2.23858 17 5L17 6L15 6L15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5L9 6L7 6L7 5C7 2.23858 9.23858 -2.10411e-07 12 -2.18557e-07Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 11H9V6H15V11H17V6H22V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V6H7V11ZM9 16V18H15V16H9Z",
                fill: "currentColor",
            }
        }
    }
}
