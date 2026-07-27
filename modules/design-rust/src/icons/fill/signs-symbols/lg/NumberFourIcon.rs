use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberFourIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberFourIcon(props: NumberFourIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 34H9V31.1553L29.9951 4H33V31H38V34H33V44H30V34ZM12.9121 31H30V8.89746L12.9121 31Z",
                fill: "currentColor",
            }
        }
    }
}
