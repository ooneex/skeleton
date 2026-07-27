use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BottleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BottleIcon(props: BottleIconProps) -> Element {
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
                d: "M14.4385 7.57422L15.6211 7.95605C17.6225 8.63376 19 10.525 19 12.6758V23H5V12.6758C5 10.4959 6.41821 8.66477 8.43164 7.93262L9.5625 7.58398L9.68555 6H14.3154L14.4385 7.57422ZM15.3643 13.3408C13.206 12.4711 10.794 12.4711 8.63574 13.3408L7 14V19H17V14L15.3643 13.3408Z",
                fill: "currentColor",
            }
            path {
                d: "M14.1592 4L14.0502 1.94701C14.0221 1.41607 13.5833 1 13.0517 1H10.9487C10.4168 1 9.97805 1.41626 9.95004 1.94734L9.8418 4H14.1592Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
