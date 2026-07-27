use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HorseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HorseIcon(props: HorseIconProps) -> Element {
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
                d: "M12 12V13C12 14.5135 11.0962 15.4929 9.70233 16.7601C9.6069 16.8468 9.50896 16.935 9.40916 17.0249C8.14233 18.1656 6.57502 19.5768 6.02986 21.7575L5.71923 23H21.2656L21.5373 22.431C22.6287 20.1462 23.123 17.622 22.9739 15.0943C22.8249 12.5667 22.0373 10.118 20.685 7.97735C19.3326 5.83668 17.4595 4.07384 15.2409 2.85363C13.0222 1.63342 10.5304 0.995671 7.99829 1L7 1.00171V4.68941L1.20471 13.1189L4.37258 16.2868L9.31794 12.9899C10.2919 12.9279 11.2237 12.5822 12 12Z",
                fill: "currentColor",
            }
        }
    }
}
