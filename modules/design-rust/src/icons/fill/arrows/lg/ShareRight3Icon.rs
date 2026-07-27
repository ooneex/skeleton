use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareRight3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareRight3Icon(props: ShareRight3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22.592 4.23511L46 23.9999L22.592 43.7646V30.9176L16.0002 30.9175C9.26863 30.9174 3.64667 35.6683 2.30448 42H2.00005L2.00003 32.0821C2.00001 23.7978 8.71584 17.082 17.0002 17.0821L22.592 17.0822V4.23511Z",
                fill: "currentColor",
            }
        }
    }
}
