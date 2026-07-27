use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BellIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BellIcon(props: BellIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20,15v-6c0-4.411-3.589-8-8-8S4,4.589,4,9v6c0,1.103-.897,2-2,2v2h20v-2c-1.103,0-2-.897-2-2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m8.538,21l.875,1.503c.537.924,1.528,1.497,2.587,1.497s2.05-.573,2.587-1.497l.875-1.503h-6.924Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
