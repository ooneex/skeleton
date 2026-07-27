use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DropletsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DropletsIcon(props: DropletsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25.5 3C28.119 5.03815 30 7.90909 30 10.0769C30 12.7957 27.9851 15 25.5 15C23.0149 15 21 12.7957 21 10.0769C21 7.90909 22.881 5.03815 25.5 3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6.5 3C9.119 5.03815 11 7.90909 11 10.0769C11 12.7957 8.98513 15 6.5 15C4.01487 15 2 12.7957 2 10.0769C2 7.90909 3.881 5.03815 6.5 3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 14C19.492 16.7175 22 20.5455 22 23.4359C22 27.0609 19.3135 30 16 30C12.6865 30 10 27.0609 10 23.4359C10 20.5455 12.508 16.7175 16 14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
