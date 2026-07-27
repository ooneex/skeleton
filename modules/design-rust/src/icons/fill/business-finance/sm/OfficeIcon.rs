use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OfficeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OfficeIcon(props: OfficeIconProps) -> Element {
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
                d: "M13 0V3H11V0H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 22L22 8H12V22H22ZM18.01 12H16L16 14H18.01V12ZM16 18L16 16L18.01 16L18.01 18L16 18Z",
                fill: "currentColor",
            }
            path {
                d: "M7 3.21924L17 0.719238V6H12C10.8954 6 10 6.89543 10 8V12.171L7 11.171V3.21924Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 11.6125L10 14.2792L10 22H2V11.6125ZM7.01001 16V18H5.00001V16H7.01001Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
