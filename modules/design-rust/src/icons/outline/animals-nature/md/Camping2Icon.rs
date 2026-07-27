use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Camping2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Camping2Icon(props: Camping2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 19C16.6364 19 23 20.875 23 29H9C9 20.875 15.3636 19 16 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 19L16 28.9999",
                stroke: "currentColor",
                stroke_width: "2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M22.2821 17.5L22 18L25.3846 12L29.4872 21.1429L27.9487 21.7143L30 28H26.9487",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 14L13 11.6429L11.4615 11.0714L16 2.5L20.5 11L18.9615 11.5714L20 14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9.61948 17.3254L10 18L6.61538 12L2.51282 21.1429L4.05128 21.7143L2 28H5.05128",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
