use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HexagonCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HexagonCheckIcon(props: HexagonCheckIconProps) -> Element {
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
                d: "M29.5 8.53275L16 0.329895L2.5 8.53275V23.4673L16 31.6702L29.5 23.4673V8.53275ZM13.7583 21.9709L23.4129 11.4385L21.9386 10.0871L13.7418 19.0291L10.0456 15.0865L8.58655 16.4544L13.7583 21.9709Z",
                fill: "currentColor",
            }
        }
    }
}
