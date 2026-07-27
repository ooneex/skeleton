use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoleculeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoleculeIcon(props: MoleculeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.1912 11.0012L4.72456 11.0012L1.96347 6.51395L4.72456 2L10.1912 2L12.9434 6.50796L10.1912 11.0012Z",
                fill: "currentColor",
            }
            path {
                d: "M10.1912 22.0012L4.72456 22.0012L1.96347 17.514L4.72456 13L10.1912 13L12.9434 17.508L10.1912 22.0012Z",
                fill: "currentColor",
            }
            path {
                d: "M20.1536 16.4873L14.6869 16.4873L11.9258 12L14.6869 7.48608L20.1536 7.48608L22.9057 11.994L20.1536 16.4873Z",
                fill: "currentColor",
            }
        }
    }
}
