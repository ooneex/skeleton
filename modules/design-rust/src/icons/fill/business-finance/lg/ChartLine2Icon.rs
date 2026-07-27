use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartLine2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartLine2Icon(props: ChartLine2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.57586 11.4584L10.1113 23.1289L16.0849 14.1686L29.9683 37.9686L44.4172 11.9618L47.0397 13.4188L30.0318 44.0314L15.9152 19.8315L9.88867 28.8712L0.958344 12.9242L3.57586 11.4584Z",
                fill: "currentColor",
            }
        }
    }
}
