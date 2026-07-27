use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceSmirkingGrinIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceSmirkingGrinIcon(props: FaceSmirkingGrinIconProps) -> Element {
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
                d: "M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM14.5528 11.3417L18.3417 9.44724L17.4472 7.65839L13.6584 9.55281L14.5528 11.3417ZM5.65833 9.44724L9.44719 11.3417L10.3416 9.55281L6.55276 7.65839L5.65833 9.44724ZM12 19C14.7614 19 17 16.7614 17 14H7C7 16.7614 9.23858 19 12 19Z",
                fill: "currentColor",
            }
        }
    }
}
