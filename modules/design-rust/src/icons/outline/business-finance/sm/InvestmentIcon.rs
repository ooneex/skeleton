use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct InvestmentIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InvestmentIcon(props: InvestmentIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 21.5C13 21.5 13.5958 17.6919 16.2631 16.1519C18.9305 14.6119 22.5263 16 22.5263 16C22.5263 16 21.8829 19.8356 19.2631 21.3481C16.5958 22.8881 13 21.5 13 21.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11 21.5C11 21.5 10.4042 17.6919 7.73686 16.1519C5.06951 14.6119 1.47372 16 1.47372 16C1.47372 16 2.11714 19.8356 4.73686 21.3481C7.40421 22.8881 11 21.5 11 21.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 13C15.0376 13 17.5 10.5376 17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5C6.5 10.5376 8.96243 13 12 13Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 6V9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
