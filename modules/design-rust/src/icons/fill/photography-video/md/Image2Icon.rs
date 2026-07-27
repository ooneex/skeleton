use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Image2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Image2Icon(props: Image2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20.5391 7.9314L12.9033 21.1667L8.96443 15.7508L0.131592 29H31.6586L20.5391 7.9314Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 7.5C4 5.01472 6.01472 3 8.5 3C10.9853 3 13 5.01472 13 7.5C13 9.98528 10.9853 12 8.5 12C6.01472 12 4 9.98528 4 7.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
