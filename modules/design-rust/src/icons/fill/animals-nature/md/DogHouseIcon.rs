use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DogHouseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DogHouseIcon(props: DogHouseIconProps) -> Element {
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
                d: "M16 1.7283L31.4042 13.8316L30.1685 15.4042L16 4.2718L1.83153 15.4042L0.595886 13.8316L16 1.7283Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 16.2438V27H2V29H30V27H28V16.2438L16 6.81525L4 16.2438ZM11.5 27V21.5C11.5 19.0147 13.5147 17 16 17C18.4853 17 20.5 19.0147 20.5 21.5V27H11.5ZM14 12V14H18V12H14Z",
                fill: "currentColor",
            }
        }
    }
}
