use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberSevenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberSevenIcon(props: NumberSevenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 21C10 15.5848 11.5351 10.2806 14.4268 5.70215L15.501 4H6V2H18V3.78906L17.8457 4.03418L16.1172 6.77051C13.4276 11.0292 12 15.963 12 21V22H10V21Z",
                fill: "currentColor",
            }
        }
    }
}
