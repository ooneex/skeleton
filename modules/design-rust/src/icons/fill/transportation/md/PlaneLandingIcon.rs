use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PlaneLandingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PlaneLandingIcon(props: PlaneLandingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12.764 3.89178L12.5942 10.9286L8.10183 9.52698L6.60884 5.91845L1.82538 4.42602L2.88602 13.3725C3.02531 14.5474 3.84217 15.5308 4.97164 15.8832L24.6622 22.0266C26.5074 22.6023 28.47 21.5731 29.0458 19.7279C29.6215 17.8826 28.5923 15.92 26.747 15.3443L20.9779 13.5443L16.9566 4.33382L12.764 3.89178Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 26L29 26L29 28L3 28L3 26Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
