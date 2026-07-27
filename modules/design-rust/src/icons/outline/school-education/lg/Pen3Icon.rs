use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Pen3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Pen3Icon(props: Pen3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.49365 40.5L5 42.9937",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M37.5 20.3932L42.6068 25.5L34.5 33.6068",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M32.7734 9.53296L36.3066 5.99975C37.8788 4.42758 40.4278 4.42758 42 5.99976V5.99976V5.99976C43.5722 7.57193 43.5722 10.1209 42 11.6931L38.4621 15.231",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16.7144 24.208L7.49991 33.4226C5.54732 35.3752 5.54733 38.541 7.49994 40.4936V40.4936V40.4936C9.45253 42.4462 12.6183 42.4462 14.5709 40.4936L23.7853 31.279",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M30.7932 7.3008L40.6927 17.2003L25.1997 32.6932L20.25 27.7435L15.3003 22.7937L30.7932 7.3008Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
