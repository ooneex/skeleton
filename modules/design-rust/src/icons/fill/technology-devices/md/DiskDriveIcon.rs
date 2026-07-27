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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 1C9.37258 1 4 6.37258 4 13C4 14.5376 4.2897 16.01 4.81839 17.3638L5.06686 18H26.9331L27.1816 17.3638C27.7103 16.01 28 14.5376 28 13C28 6.37258 22.6274 1 16 1ZM19 13C19 14.6569 17.6569 16 16 16C14.3431 16 13 14.6569 13 13C13 11.3431 14.3431 10 16 10C17.6569 10 19 11.3431 19 13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 20C3.34315 20 2 21.3431 2 23V27C2 28.6569 3.34315 30 5 30H27C28.6569 30 30 28.6569 30 27V23C30 21.3431 28.6569 20 27 20H5ZM24 26V24L8 24V26L24 26Z",
                fill: "currentColor",
            }
        }
    }
}
