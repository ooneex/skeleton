use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FriedEggIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FriedEggIcon(props: FriedEggIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22.3 23.958C17.4636 24.4545 15.8727 31.7986 7.98182 27.8264C4.03636 25.8403 2 21.2474 2 16.6545C2 9.08247 8.23636 3 16 3C23.7636 3 30 9.08247 30 16.6545C30 20.5026 29.0455 23.2132 22.3 23.958Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M12.5 22C15.5376 22 18 19.5376 18 16.5C18 13.4624 15.5376 11 12.5 11C9.46243 11 7 13.4624 7 16.5C7 19.5376 9.46243 22 12.5 22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14 16.5C14 15.6716 13.3284 15 12.5 15",
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
