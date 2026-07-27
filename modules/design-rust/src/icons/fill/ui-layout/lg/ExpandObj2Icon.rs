use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ExpandObj2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ExpandObj2Icon(props: ExpandObj2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M37 16C37 13.2386 34.7614 11 32 11H16C13.2386 11 11 13.2386 11 16V32C11 34.7614 13.2386 37 16 37H32C34.7614 37 37 34.7614 37 32V16Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M46 20L46 2L28 2L28 5L43 5L43 20L46 20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 28L2 46H20V43H5L5 28H2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
