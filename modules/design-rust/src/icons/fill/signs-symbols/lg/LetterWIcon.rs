use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterWIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterWIcon(props: LetterWIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14.0264 44L24 18.3545L33.9736 44H36.7266L44.835 4H41.3301V6.19043L34.874 38.0381L25.5264 14H22.4736L13.125 38.0381L6.7041 6.3584V4H3.16504L11.2734 44H14.0264Z",
                fill: "currentColor",
            }
        }
    }
}
