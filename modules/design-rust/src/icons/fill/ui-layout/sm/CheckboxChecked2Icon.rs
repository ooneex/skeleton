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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m11.067,16.481l-5.481-5.481,1.414-1.414,3.933,3.933L20.283,2.299c-.39-.186-.822-.299-1.283-.299H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5c0-.46-.112-.891-.298-1.281l-10.635,12.762Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
