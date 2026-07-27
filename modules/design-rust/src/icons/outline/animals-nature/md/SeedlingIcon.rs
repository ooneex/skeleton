use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SeedlingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SeedlingIcon(props: SeedlingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 23H15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 27V17H20V27C20 29.2091 18.2091 31 16 31C13.7909 31 12 29.2091 12 27Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 17V10.6667",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16.0096 11C16.0096 11 16.8675 5.88591 20.5048 3.78591C24.1421 1.68591 29 3.50001 29 3.50001C29 3.50001 28.0772 8.65161 24.5048 10.7141C20.8675 12.8141 16.0096 11 16.0096 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 11C16 11 15.1421 5.88593 11.5048 3.78594C7.8675 1.68594 3.00961 3.50004 3.00961 3.50004C3.00961 3.50004 3.93245 8.65164 7.5048 10.7141C11.1421 12.8141 16 11 16 11Z",
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
