use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EnergyDrinkCanIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EnergyDrinkCanIcon(props: EnergyDrinkCanIconProps) -> Element {
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
                d: "M24.9111 4.99609L25.8281 5.91406L25.9648 6.05762C26.6293 6.79132 26.9999 7.74763 27 8.74219V23.2578C26.9999 24.3185 26.5782 25.3359 25.8281 26.0859L24.9111 27.0039L24.2256 30H7.77441L7.08887 27.0039L6.17188 26.0859C5.42184 25.3359 5.00012 24.3185 5 23.2578V8.74219C5.00012 7.68149 5.42184 6.6641 6.17188 5.91406L7.08887 4.99609L7.77441 2H24.2256L24.9111 4.99609ZM15.5 9L10.5 18H15.5L15 23H16.5L21.5 14H16.5L17 9H15.5Z",
                fill: "currentColor",
            }
        }
    }
}
