use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CarGalleryIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CarGalleryIcon(props: CarGalleryIconProps) -> Element {
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
                d: "M0 11H3V13H0V11Z",
                fill: "currentColor",
            }
            rect {
                x: "17",
                y: "2",
                width: "5",
                height: "5",
                fill: "currentColor",
                "data-color": "color-2",
            }
            rect {
                x: "17",
                y: "9",
                width: "5",
                height: "5",
                fill: "currentColor",
                "data-color": "color-2",
            }
            rect {
                x: "24",
                y: "2",
                width: "5",
                height: "5",
                fill: "currentColor",
                "data-color": "color-2",
            }
            rect {
                x: "24",
                y: "9",
                width: "5",
                height: "5",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 14C15 15.1046 15.8954 16 17 16H30.6377C30.8704 16.4724 31 16.9984 31 17.5449V26.5C31 27.8807 29.8807 29 28.5 29H26.5C25.1193 29 24 27.8807 24 26.5V26H8V26.5C8 27.8807 6.88071 29 5.5 29H3.5C2.11929 29 1 27.8807 1 26.5V17.5449C1.00006 16.2194 1.74906 15.0079 2.93457 14.415L4.13379 13.8154L5.43945 8.96973C5.90638 7.21876 7.49255 6.00007 9.30469 6H15V14ZM4 20.5H6.5C7.88071 20.5 9 19.3807 9 18H4V20.5ZM23 18C23 19.3807 24.1193 20.5 25.5 20.5H28V18H23Z",
                fill: "currentColor",
            }
        }
    }
}
