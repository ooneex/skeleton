use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BroccoliIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BroccoliIcon(props: BroccoliIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 15V13V13.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7 13.5C8.5 16 9.49999 18.5 9.49999 22H15C15 18.6033 15 16.1484 17.2851 13.7214",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M2 10.5C2 12.433 3.567 14 5.5 14C7.0556 14 8.34911 12.9077 8.80469 11.5039L8.86107 11.4796C10.4395 13.475 13.5605 13.475 15.1389 11.4796H15.1789C15.6239 12.9012 16.9316 14 18.5 14C20.433 14 22 12.433 22 10.5C22 8.39566 20.0678 6.73957 17.9998 7.03547L17.9741 7.00786C17.9813 3.56511 13.7641 1.77483 11.2881 4.05964C10.7378 3.41138 9.91694 3 9 3C6.92545 3 5.46917 5.16398 6.19614 7.06923L6.1582 7.10879C4.05135 6.70512 2 8.32747 2 10.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
