use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BucketPaintIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BucketPaintIcon(props: BucketPaintIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.7901 12.3666C19.6916 8.46379 21.6683 4.11347 20.2053 2.64991C18.7422 1.18635 14.3934 3.16377 10.492 7.0666C6.5905 10.9694 4.61377 15.3198 6.07682 16.7833C7.53987 18.2469 11.8887 16.2695 15.7901 12.3666Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6.36127 17.0008L18.8806 26.0586C20.5336 27.163 23.7267 25.6276 26.3864 22.9669C29.0461 20.3063 30.4958 17.1004 29.477 15.4586L20.382 2.87272",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M2.25 27.1555C2.25 25.2055 5 22 5 22C5 22 7.75 25.2001 7.75 27.1555C7.75 28.969 6.3405 30 5 30C3.6595 30 2.25 28.969 2.25 27.1555Z",
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
