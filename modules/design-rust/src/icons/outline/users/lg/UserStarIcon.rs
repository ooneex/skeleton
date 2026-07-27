use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserStarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserStarIcon(props: UserStarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 19C28.4183 19 32 15.4183 32 11C32 6.58172 28.4183 3 24 3C19.5817 3 16 6.58172 16 11C16 15.4183 19.5817 19 24 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M32.5 24L35.7457 30.2544L43 31.258L37.75 36.1265L38.989 43L32.5 39.7544L26.011 43L27.25 36.1265L22 31.258L29.2543 30.2544L32.5 24Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 42.9414C15.9998 42.746 10.9997 42.0619 6 40.8894C6 31.5622 14.0595 24 24 24C25.0221 24 26.0244 24.08 27 24.2336",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
