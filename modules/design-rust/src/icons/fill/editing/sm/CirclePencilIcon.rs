use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CirclePencilIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CirclePencilIcon(props: CirclePencilIconProps) -> Element {
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
                d: "M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 5L14.625 12H9.375L12 5ZM7.71921 14L6.4482 19.0841C7.97752 20.2843 9.90518 21 12 21C14.0948 21 16.0225 20.2843 17.5518 19.0841L16.2808 14H7.71921Z",
                fill: "currentColor",
            }
        }
    }
}
