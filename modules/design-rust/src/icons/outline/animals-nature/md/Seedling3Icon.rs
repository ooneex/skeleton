use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Seedling3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Seedling3Icon(props: Seedling3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 24H24",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M16 16V9.33334",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 29H22C23.1046 29 24 28.1046 24 27V21.9947C24 20.6757 24.2372 19.3674 24.7004 18.1323L25.5 16H6.50002L7.29963 18.1323C7.76277 19.3674 8.00001 20.6756 8.00001 21.9947V27C8.00001 28.1046 8.89544 29 10 29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M16 9.33334C16 9.33334 16.6196 5.12659 19.5295 3.44659C22.4393 1.76659 26.3923 3.33334 26.3923 3.33334C26.3923 3.33334 25.7207 7.57009 22.8628 9.22009C19.953 10.9001 16 9.33334 16 9.33334Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 9.33332C16 9.33332 15.3804 5.12657 12.4705 3.44657C9.56067 1.76657 5.6077 3.33332 5.6077 3.33332C5.6077 3.33332 6.2793 7.57007 9.13719 9.22007C12.047 10.9001 16 9.33332 16 9.33332Z",
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
