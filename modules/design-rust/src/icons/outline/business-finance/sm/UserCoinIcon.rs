use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UserCoinIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UserCoinIcon(props: UserCoinIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 6C22.105 6 23 5.105 23 4C23 2.895 22.105 2 21 2C19.895 2 19 2.895 19 4C19 5.105 19.895 6 21 6Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6.5 6V7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16.3719 17.0516L15.5001 14L17.7905 10.5642C18.2331 9.90032 18.3105 9.05781 17.9962 8.32444C17.5369 7.25292 16.1129 7.03498 15.3542 7.92011L12.1825 11.6205C11.4557 12.4685 11.2601 13.65 11.6748 14.687L13 18L13.0001 23L15.5001 23L16.4166 17.9588C16.4715 17.657 16.4562 17.3466 16.3719 17.0516Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
