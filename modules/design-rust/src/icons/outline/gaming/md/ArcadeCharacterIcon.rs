use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArcadeCharacterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArcadeCharacterIcon(props: ArcadeCharacterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M31 16C31 17.933 29.433 19.5 27.5 19.5C25.567 19.5 24 17.933 24 16C24 14.067 25.567 12.5 27.5 12.5C29.433 12.5 31 14.067 31 16Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6.10051 6.10051C0.633173 11.5678 0.633171 20.4322 6.10051 25.8995C11.5679 31.3668 20.4322 31.3668 25.8995 25.8995L16 16L25.8995 6.10051C20.4322 0.633166 11.5679 0.633167 6.10051 6.10051Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14 11C12.8954 11 12 10.1046 12 9C12 7.89543 12.8954 7 14 7C15.1046 7 16 7.89543 16 9C16 10.1046 15.1046 11 14 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
