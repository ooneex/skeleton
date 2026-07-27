use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderStarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderStarIcon(props: FolderStarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M45 25.5V16C45 13.2386 42.7614 11 40 11H27L19 5H8C5.23858 5 3 7.23858 3 10V36C3 38.7614 5.23858 41 8 41H21.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M33 23L36.2457 29.2544L43.5 30.258L38.25 35.1265L39.489 42L33 38.7544L26.511 42L27.75 35.1265L22.5 30.258L29.7543 29.2544L33 23Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
