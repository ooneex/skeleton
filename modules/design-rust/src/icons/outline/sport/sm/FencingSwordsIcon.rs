use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FencingSwordsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FencingSwordsIcon(props: FencingSwordsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16.2379 15.2379L16.5 15.5L14.8572 13.8572",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21.5 20.5L19.5 18.5L19.6453 18.6453",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M2.5 20.5L4.5 18.5L4.35467 18.6453",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 3L12 11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 3L7.5 15.5L7.65201 15.348",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7.65686 15.3384C6.09476 13.7763 3.5621 13.7763 2 15.3384L2 16L7 21L7.65686 20.9953C9.21895 19.4332 9.21895 16.9005 7.65686 15.3384Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16.3384 15.3384C17.9005 13.7763 20.4332 13.7763 21.9953 15.3384L21.9953 16L17 21L16.3384 20.9953C14.7763 19.4332 14.7763 16.9005 16.3384 15.3384Z",
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
