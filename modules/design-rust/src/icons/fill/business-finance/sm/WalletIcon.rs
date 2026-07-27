use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WalletIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WalletIcon(props: WalletIconProps) -> Element {
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
                d: "M4 5C4 4.44772 4.44772 4 5 4H18V2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V9C22 7.34315 20.6569 6 19 6H5C4.44772 6 4 5.55228 4 5ZM14 14C14 15.657 15.343 17 17 17H20V11H17C15.343 11 14 12.343 14 14Z",
                fill: "currentColor",
            }
        }
    }
}
