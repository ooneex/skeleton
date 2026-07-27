use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserRefreshIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserRefreshIcon(props: UserRefreshIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26.5 24.1616C25.6829 24.0551 24.8483 24 24 24C14.0595 24 6 31.5622 6 40.8894C12.3329 42.3746 18.6665 43.076 25 42.9935",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 19C28.4183 19 32 15.4183 32 11C32 6.58172 28.4183 3 24 3C19.5817 3 16 6.58172 16 11C16 15.4183 19.5817 19 24 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M45 27.5V33.5H39",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M43.9025 33.2085C43.8947 33.1418 43.9254 33.3669 43.9161 33.3007C43.3333 29.1742 39.7873 26 35.5 26C30.8056 26 27 29.8056 27 34.5C27 39.1944 30.8056 43 35.5 43C38.1075 43 40.4408 41.8259 42 39.9775",
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
