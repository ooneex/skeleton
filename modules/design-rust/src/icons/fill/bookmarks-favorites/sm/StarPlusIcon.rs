use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StarPlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StarPlusIcon(props: StarPlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m12,18.902v-.902c0-1.104.896-2,2-2h2v-2c0-1.104.896-2,2-2h2c.183,0,.357.032.525.078l3.46-3.372-8.281-1.204L12,0l-3.704,7.502L.015,8.706l5.993,5.841-1.415,8.248,7.407-3.893Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "24 18 20 18 20 14 18 14 18 18 14 18 14 20 18 20 18 24 20 24 20 20 24 20 24 18",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
