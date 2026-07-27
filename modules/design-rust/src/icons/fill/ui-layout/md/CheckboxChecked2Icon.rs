use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckboxChecked2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckboxChecked2Icon(props: CheckboxChecked2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m15.067,21.481l-7.481-7.481,1.414-1.414,5.933,5.933L28.162,2.644c-.625-.404-1.364-.644-2.162-.644H6c-2.206,0-4,1.794-4,4v20c0,2.206,1.794,4,4,4h20c2.206,0,4-1.794,4-4V6c0-.675-.184-1.302-.481-1.861l-14.452,17.342Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
