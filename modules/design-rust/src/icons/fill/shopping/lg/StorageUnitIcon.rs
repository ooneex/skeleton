use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StorageUnitIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StorageUnitIcon(props: StorageUnitIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M42 44H25.5V29H31.5L31.5 34L36 34L36 29H42V44Z",
                fill: "currentColor",
            }
            path {
                d: "M22.5 44H6V29H12L12 34L16.5 34L16.5 29H22.5V44Z",
                fill: "currentColor",
            }
            path {
                d: "M32.25 27H15.75V12H21.75L21.75 17L24 17H26.25L26.25 12H32.25V27Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 1.323L46.0125 12.3292L44.6708 15.0125L24 4.6771L3.32919 15.0125L1.98755 12.3292L24 1.323Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
