use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderOpen2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderOpen2Icon(props: FolderOpen2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 18.4613V5C2 3.89543 2.89543 3 4 3H9.6L12.45 5.82353H18C19.1046 5.82353 20 6.71896 20 7.82353V10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M17.1458 20L3.50896 20C2.44776 20 1.72213 18.9282 2.11625 17.9429L5.29342 10H22.4999L19.0028 18.7428C18.6991 19.5021 17.9636 20 17.1458 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
