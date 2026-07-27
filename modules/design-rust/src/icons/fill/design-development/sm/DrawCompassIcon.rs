use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DrawCompassIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DrawCompassIcon(props: DrawCompassIconProps) -> Element {
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
                d: "M13 13V19H11V13H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 0V4H11V0H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 15H22V17H2V15Z",
                fill: "currentColor",
            }
            path {
                d: "M12 2.5C10.067 2.5 8.5 4.067 8.5 6C8.5 7.933 10.067 9.5 12 9.5C13.933 9.5 15.5 7.933 15.5 6C15.5 4.067 13.933 2.5 12 2.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M8.13886 9.91675L1.65186 22.4274L3.42736 23.348L9.80663 11.0452C9.1818 10.7731 8.61733 10.3885 8.13886 9.91675Z",
                fill: "currentColor",
            }
            path {
                d: "M14.1934 11.0452L20.5726 23.348L22.3481 22.4274L15.8611 9.91675C15.3827 10.3885 14.8182 10.7731 14.1934 11.0452Z",
                fill: "currentColor",
            }
        }
    }
}
