use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleChevronDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleChevronDownIcon(props: CircleChevronDownIconProps) -> Element {
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
                d: "M12 1C5.92487 1 0.999999 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92486 18.0751 0.999999 12 1ZM8 9.08579L6.58578 10.5L12 15.9142L17.4142 10.5L16 9.08579L12 13.0858L8 9.08579Z",
                fill: "currentColor",
            }
        }
    }
}
