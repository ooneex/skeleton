use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PajamasIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PajamasIcon(props: PajamasIconProps) -> Element {
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
                d: "M11 6.58594V16H13V6.58594L17.5859 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H6.41406L11 6.58594ZM15 14V16.0098H17V14H15ZM15 12.0098H17V10H15V12.0098Z",
                fill: "currentColor",
            }
        }
    }
}
