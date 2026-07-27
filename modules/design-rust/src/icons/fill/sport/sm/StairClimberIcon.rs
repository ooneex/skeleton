use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StairClimberIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StairClimberIcon(props: StairClimberIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 20V22H1V20H22Z",
                fill: "currentColor",
            }
            path {
                d: "M4 9.57422V12H2V8.4248L14.7607 1H18.7373L4 9.57422Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M22 6V14.5742L16.1279 18H2V14H8V10H14V6H22Z",
                fill: "currentColor",
            }
        }
    }
}
