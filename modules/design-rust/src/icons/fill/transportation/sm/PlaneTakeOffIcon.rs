use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PlaneTakeOffIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PlaneTakeOffIcon(props: PlaneTakeOffIconProps) -> Element {
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
                d: "M1 19H23V21H1V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M0.777344 11.2188L5.82479 15.8243C6.76523 16.6412 8.11265 16.7919 9.21035 16.203L21.4039 9.66155C22.7843 8.92097 23.3522 7.23555 22.7015 5.81055C21.9913 4.25546 20.1182 3.61944 18.6079 4.42061L13.7443 7.00081L7.79052 4.23232L5.61266 6.40884L9.24382 9.38817L6.24198 10.9821L3.52859 9.76076L0.777344 11.2188Z",
                fill: "currentColor",
            }
        }
    }
}
