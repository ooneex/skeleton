use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BatteryChargingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BatteryChargingIcon(props: BatteryChargingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "32 20 28 20 28 18 30 18 30 14 28 14 28 12 32 12 32 20",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m26,5H5c-2.206,0-4,1.794-4,4v14c0,2.206,1.794,4,4,4h21c2.206,0,4-1.794,4-4v-14c0-2.206-1.794-4-4-4Zm-3.628,13.364l-6.372-3.641v6l-9.364-5.351.992-1.736,6.372,3.641v-6l9.364,5.351-.992,1.736Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
