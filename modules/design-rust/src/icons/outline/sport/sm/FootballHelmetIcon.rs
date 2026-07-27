use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FootballHelmetIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FootballHelmetIcon(props: FootballHelmetIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 11V17C8 19.2091 6.20914 21 4 21H2L2 16.5L12 15.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M21.9506 12C21.9506 6.47715 17.4735 2 11.9506 2C6.76528 2 2.50172 5.94668 2 11H9.95062C11.0552 11 11.9506 11.8954 11.9506 13V18C11.9506 20.2091 13.7415 22 15.9506 22C18.1598 22 19.9506 20.2091 19.9506 18V17.1056C19.9506 16.7107 20.0675 16.3247 20.2865 15.9962L21.9506 13.5L21.9506 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 19C16.5523 19 17 18.5523 17 18C17 17.4477 16.5523 17 16 17C15.4477 17 15 17.4477 15 18C15 18.5523 15.4477 19 16 19Z",
                fill: "currentColor",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
