use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CartPenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CartPenIcon(props: CartPenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.821 6H22L21.6 8M1 2H4L5.75469 14.2828C5.89545 15.2681 6.73929 16 7.73459 16H10.3532",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 22C6.55228 22 7 21.5523 7 21C7 20.4477 6.55228 20 6 20C5.44772 20 5 20.4477 5 21C5 21.5523 5.44772 22 6 22Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
            }
            path {
                d: "M16 21.9999L22.3675 15.6323C23.1959 14.8039 23.1959 13.4608 22.3675 12.6323C21.5391 11.8039 20.196 11.8039 19.3675 12.6323L13 18.9999V21.9999H16Z",
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
