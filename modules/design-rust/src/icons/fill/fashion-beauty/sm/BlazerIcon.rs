use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BlazerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BlazerIcon(props: BlazerIconProps) -> Element {
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
                d: "M18.9404 7.77246L19.2207 8.54883L12 12.8467L4.7793 8.54883L5.05957 7.77246L7.49707 1H16.5029L18.9404 7.77246ZM12.001 9.24707L15.0977 3.00098L8.91113 3L12.001 9.24707Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 22H11V14.5771C11.6264 14.9392 12.3996 14.936 13.0225 14.5654L20.2432 10.2676C21.0668 9.77734 21.4269 8.77169 21.1016 7.87012L20.8213 7.09473L19.708 4H23V22ZM13 17V19.0098H15V17H13Z",
                fill: "currentColor",
            }
            path {
                d: "M3.17871 7.09473L2.89844 7.87012C2.5731 8.77169 2.93319 9.77734 3.75684 10.2676L9 13.3877V22H1V4H4.29199L3.17871 7.09473Z",
                fill: "currentColor",
            }
        }
    }
}
