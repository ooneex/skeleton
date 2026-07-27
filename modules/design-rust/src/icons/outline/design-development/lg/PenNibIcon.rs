use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PenNibIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PenNibIcon(props: PenNibIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 43H43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23.5 11L15.7374 13.8359C12.0287 15.1908 9.46431 18.603 9.19267 22.5445L8.13745 37.8555L23.4524 36.7986C27.3837 36.5273 30.7889 33.9701 32.1479 30.2686L35 22.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M17 28.993L8 37.9929",
                stroke: "currentColor",
                stroke_width: "2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M26.0086 2.99997L20.6987 8.31348L29.1944 16.8151L37.6901 25.3167L43 20.0032L26.0086 2.99997Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 22.6238C15.2405 24.3845 15.2405 27.2393 17 29C18.7595 30.7607 21.6123 30.7607 23.3718 29C25.1313 27.2393 25.1313 24.3845 23.3718 22.6238C21.6123 20.8631 18.7595 20.8631 17 22.6238Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
