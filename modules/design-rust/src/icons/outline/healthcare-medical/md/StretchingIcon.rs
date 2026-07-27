use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StretchingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StretchingIcon(props: StretchingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25 9.50006C26.6569 9.50006 28 8.15692 28 6.50006C28 4.84321 26.6569 3.50006 25 3.50006C23.3431 3.50006 22 4.84321 22 6.50006C22 8.15692 23.3431 9.50006 25 9.50006Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9.49997 4.00006L17.0726 8.26599L9.74833 12.502C8.61404 13.158 7.72569 14.1673 7.21899 15.3757L2.96826 25.5131L5.46825 27.013L11 18.5001L12 19.0001L16.22 28.4845L18.9683 27.5131L16.6473 16.9244L22.4682 13.5132L24.5 21.5001",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
