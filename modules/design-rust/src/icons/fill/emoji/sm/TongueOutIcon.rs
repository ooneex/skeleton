use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TongueOutIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TongueOutIcon(props: TongueOutIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 6H6V15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15V6H13V13H11V6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 7H4V5H20V7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1.3904 1.72394L2.33324 2.05718C3.88548 2.60582 4.99999 4.08613 4.99999 5.82932C4.99999 7.57251 3.88548 9.05281 2.33324 9.60145L1.3904 9.9347L0.723907 8.04902L1.66675 7.71577C2.44489 7.44074 2.99999 6.69857 2.99999 5.82932C2.99999 4.96007 2.44489 4.2179 1.66675 3.94286L0.723907 3.60962L1.3904 1.72394Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.6096 1.72394L21.6668 2.05718C20.1145 2.60582 19 4.08613 19 5.82932C19 7.57251 20.1145 9.05281 21.6668 9.60145L22.6096 9.9347L23.2761 8.04902L22.3333 7.71577C21.5551 7.44074 21 6.69857 21 5.82932C21 4.96007 21.5551 4.2179 22.3333 3.94286L23.2761 3.60962L22.6096 1.72394Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
