use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StarIcon(props: StarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "12 3 14.234 10 21 10 15.615 14.125 17.849 21 12 16.751 6.151 21 8.385 14.125 3 10 9.766 10 12 3",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
