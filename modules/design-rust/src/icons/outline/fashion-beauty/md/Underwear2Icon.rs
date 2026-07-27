use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Underwear2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Underwear2Icon(props: Underwear2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 10L11.316 11.8285C11.7464 14.3186 10.975 16.8656 9.23537 18.6984L8 20",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M21 10L20.684 11.8285C20.2536 14.3186 21.025 16.8656 22.7646 18.6984L24 20",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M2 10H30",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M30 5V18.1875L27.1363 18.6669C23.2809 19.3123 20.283 22.3727 19.7171 26.2406L19.6061 27H12.3939L12.2829 26.2406C11.717 22.3727 8.71908 19.3123 4.86366 18.6669L2 18.1875V5H30Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
