use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MarketingTargetIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MarketingTargetIcon(props: MarketingTargetIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29.6778 13C28.3045 6.70964 22.7022 2 16 2C8.26801 2 2 8.26801 2 16C2 22.7022 6.70964 28.3045 13 29.6778",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M22.9297 12C21.5465 9.60879 18.9611 8 16 8C11.5817 8 8 11.5817 8 16C8 18.9611 9.60879 21.5465 12 22.9297",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15.9999 16L27.0494 17.1499L23.9558 20.2435L29.7123 26.0001L25.9999 29.7124L20.2435 23.9558L17.1499 27.0494L15.9999 16Z",
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
