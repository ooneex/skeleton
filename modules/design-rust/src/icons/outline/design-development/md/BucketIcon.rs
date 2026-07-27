use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BucketIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BucketIcon(props: BucketIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 7L7 25.3333C7.35822 27.5511 11.482 29 16 29C20.518 29 24.7075 27.5012 25 25.3333L28 7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16 11C22.6274 11 28 9.20914 28 7C28 4.79086 22.6274 3 16 3C9.37258 3 4 4.79086 4 7C4 9.20914 9.37258 11 16 11Z",
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
