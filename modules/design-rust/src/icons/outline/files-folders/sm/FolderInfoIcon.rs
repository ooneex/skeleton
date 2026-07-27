use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderInfoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderInfoIcon(props: FolderInfoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 8.5V8C22 6.89543 21.1046 6 20 6H13L10 3H4C2.89543 3 2 3.89543 2 5V18C2 19.1046 2.89543 20 4 20H15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20 22V17H19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 14C20.6904 14 21.25 13.4404 21.25 12.75C21.25 12.0596 20.6904 11.5 20 11.5C19.3096 11.5 18.75 12.0596 18.75 12.75C18.75 13.4404 19.3096 14 20 14Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
