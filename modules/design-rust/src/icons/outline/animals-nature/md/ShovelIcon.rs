use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShovelIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShovelIcon(props: ShovelIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 8C22.4378 6.43777 22.3586 3.98452 23.8232 2.51992L24.7071 1.63604L30.364 7.29289L29.4801 8.17678C28.0155 9.64137 25.5622 9.56223 24 8Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 20L24 8L23.5697 8.43026",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4.91505 27.1569C7.51855 29.7603 11.7396 29.7603 14.3431 27.1569L20 21.5L15.286 16.786L10.5719 12.0719L4.91505 17.7288C2.31156 20.3323 2.31156 24.5534 4.91505 27.1569Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
