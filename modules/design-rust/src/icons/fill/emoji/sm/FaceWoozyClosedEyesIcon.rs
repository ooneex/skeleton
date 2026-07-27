use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceWoozyClosedEyesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceWoozyClosedEyesIcon(props: FaceWoozyClosedEyesIconProps) -> Element {
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
                d: "M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 15.2193L9.42581 13.16L6.58582 16L8.00003 17.4142L9.57425 15.84L12 17.7806L14.4258 15.84L16 17.4142L17.4142 16L14.5742 13.16L12 15.2193ZM13.5 8.5H17.5V10.5H13.5V8.5ZM10.5 8.5H6.5V10.5H10.5V8.5Z",
                fill: "currentColor",
            }
        }
    }
}
