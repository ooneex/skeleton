use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UTurnToLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UTurnToLeftIcon(props: UTurnToLeftIconProps) -> Element {
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
                d: "M20 9.49998C20 6.46242 17.5376 4 14.5 4L9.00002 4L9.00002 2L14.5 2C18.6421 2 22 5.35785 22 9.49997C22 13.6421 18.6421 17 14.5 17L2.50002 17L2.50002 15L14.5 15C17.5376 15 20 12.5376 20 9.49998Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.91431 11L3.91431 16L8.91431 21L7.50009 22.4142L1.08588 16L7.50009 9.58582L8.91431 11Z",
                fill: "currentColor",
            }
        }
    }
}
