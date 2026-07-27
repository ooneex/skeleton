use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct House7IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn House7Icon(props: House7IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m12,5.876l-8,6.546v7.578c0,1.654,1.346,3,3,3h4v-4h2v4h4c1.654,0,3-1.346,3-3v-7.578l-8-6.546Zm2,10.124h-4v-4h4v4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "12 .708 5 6.435 5 4 3 4 3 8.072 .367 10.226 1.633 11.774 12 3.292 22.367 11.774 23.633 10.226 12 .708",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
