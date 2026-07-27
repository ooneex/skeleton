use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MsgSettingsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MsgSettingsIcon(props: MsgSettingsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21.5242 14.7509C20.2326 18.3758 16.4568 21 12 21C10.2571 21 8.62 20.5972 7.19357 19.8922L2.5 21L3.63 16.917C2.60286 15.5032 2 13.8157 2 12C2 7.94133 4.98544 4.50982 9.08785 3.3876",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 10.75C19.0711 10.75 20.75 9.07107 20.75 7C20.75 4.92893 19.0711 3.25 17 3.25C14.9289 3.25 13.25 4.92893 13.25 7C13.25 9.07107 14.9289 10.75 17 10.75Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16.449 3.29L16.813 2H17.188L17.551 3.29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M19.234 3.98703L20.403 3.33203L20.668 3.59703L20.013 4.76603",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M20.71 6.44897L22 6.81197V7.18697L20.71 7.55097",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M20.013 9.23401L20.668 10.403L20.403 10.668L19.234 10.013",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M17.551 10.71L17.188 12H16.813L16.449 10.71",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14.766 10.013L13.597 10.668L13.332 10.403L13.987 9.23401",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M13.29 7.55097L12 7.18797V6.81297L13.29 6.44897",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M13.987 4.76603L13.332 3.59703L13.597 3.33203L14.766 3.98703",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
