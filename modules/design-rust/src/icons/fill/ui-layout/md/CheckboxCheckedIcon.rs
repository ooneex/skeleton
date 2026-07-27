use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckboxCheckedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckboxCheckedIcon(props: CheckboxCheckedIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m26,2H6c-2.206,0-4,1.794-4,4v20c0,2.206,1.794,4,4,4h20c2.206,0,4-1.794,4-4V6c0-2.206-1.794-4-4-4Zm-12.43,20.985l-5.984-5.985,1.414-1.414,4.43,4.429,9.437-11.423,1.542,1.273-10.838,13.119Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
