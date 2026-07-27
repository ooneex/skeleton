use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Itinerary6IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Itinerary6Icon(props: Itinerary6IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 0.233887L23.9437 5.00008L16 9.76627V0.233887Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 19C1 16.7909 2.79086 15 5 15C7.20914 15 9 16.7909 9 19C9 21.2091 7.20914 23 5 23C2.79086 23 1 21.2091 1 19Z",
                fill: "currentColor",
            }
            path {
                d: "M8.67426 4H14V6H11.3257L15.3257 20H10.917C10.9716 19.6748 11 19.3407 11 19C11 18.6593 10.9716 18.3252 10.917 18H12.6743L8.67426 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
