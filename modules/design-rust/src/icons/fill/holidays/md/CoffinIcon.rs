use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CoffinIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CoffinIcon(props: CoffinIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25.9561 11.5068L26.0244 11.7314L22.8486 31H9.15137L5.97559 11.7314L6.04395 11.5068L9.26074 1H22.7393L25.9561 11.5068ZM15 11H11V13H15V19H17V13H21V11H17V7H15V11Z",
                fill: "currentColor",
            }
        }
    }
}
