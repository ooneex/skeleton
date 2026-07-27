use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckboxChecked3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckboxChecked3Icon(props: CheckboxChecked3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20,1H4c-1.657,0-3,1.343-3,3V20c0,1.657,1.343,3,3,3H20c1.657,0,3-1.343,3-3V4c0-1.657-1.343-3-3-3Zm-.793,6.707l-9,9c-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293l-4-4c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l3.293,3.293L17.793,6.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414Z",
                fill: "currentColor",
            }
        }
    }
}
