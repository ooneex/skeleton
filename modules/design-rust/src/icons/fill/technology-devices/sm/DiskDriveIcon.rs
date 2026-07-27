use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DiskDriveIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DiskDriveIcon(props: DiskDriveIconProps) -> Element {
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
                d: "M4 15C2.34315 15 1 16.3431 1 18V22H23V18C23 16.3431 21.6569 15 20 15H4ZM5 18V20H19V18H5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 1C7.02944 1 3 5.02944 3 10C3 10.7754 3.09829 11.5293 3.2836 12.2493L3.47683 13H20.5232L20.7164 12.2493C20.9017 11.5293 21 10.7754 21 10C21 5.02944 16.9706 1 12 1ZM14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
