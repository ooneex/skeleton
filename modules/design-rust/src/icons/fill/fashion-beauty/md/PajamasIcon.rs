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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 8.58594V19H17V8.58594L23.5859 2H26C28.2091 2 30 3.79086 30 6V26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V6C2 3.79086 3.79086 2 6 2H8.41406L15 8.58594ZM19 17V19.0137H21V17H19ZM19 15.0137H21V13H19V15.0137Z",
                fill: "currentColor",
            }
        }
    }
}
