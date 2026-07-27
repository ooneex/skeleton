use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BaloonIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BaloonIcon(props: BaloonIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 27V30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12.2896 27H19.7104C20.1231 27 20.3581 26.5282 20.1094 26.1988L18.1429 23.5936C22.636 22.5718 26 18.4035 26 13.4167C26 7.6637 21.5228 3 16 3C10.4772 3 6 7.6637 6 13.4167C6 18.4035 9.36403 22.5718 13.8571 23.5936L11.8906 26.1988C11.6419 26.5282 11.8769 27 12.2896 27Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 13.0698C10 9.71756 12.6863 7 16 7",
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
