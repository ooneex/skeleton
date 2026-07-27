use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Pen4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Pen4Icon(props: Pen4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.03853 21.0003L1.60229 30.4134L10.9558 27.9114L10.9765 27.8908L4.06227 20.9766L4.03853 21.0003Z",
                fill: "currentColor",
            }
            path {
                d: "M23.8567 15.0107L12.3908 26.4766L5.47656 19.5623L16.9425 8.09644L23.8567 15.0107Z",
                fill: "currentColor",
            }
            path {
                d: "M25.2709 13.5963L28.9531 9.91407C29.7342 9.13302 29.7342 7.86669 28.9531 7.08564L24.8673 2.99985C24.0863 2.2188 22.82 2.2188 22.0389 2.99985L18.3567 6.68208L25.2709 13.5963Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
