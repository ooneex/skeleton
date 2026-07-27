use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextInputIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextInputIcon(props: TextInputIconProps) -> Element {
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
                d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM9 16H10C10.5523 16 11 15.5523 11 15V9C11 8.44772 10.5523 8 10 8H9V6H10C10.7684 6 11.4692 6.28885 12 6.7639C12.5308 6.28885 13.2316 6 14 6H15V8H14C13.4477 8 13 8.44772 13 9V15C13 15.5523 13.4477 16 14 16H15V18H14C13.2316 18 12.5308 17.7111 12 17.2361C11.4692 17.7111 10.7684 18 10 18H9V16Z",
                fill: "currentColor",
            }
        }
    }
}
