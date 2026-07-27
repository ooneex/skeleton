use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PinPlus2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PinPlus2Icon(props: PinPlus2IconProps) -> Element {
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
                d: "M10.1231 21.6038C10.7262 22.2035 11.3577 22.7666 12 23.3233C12.6423 22.7666 13.2738 22.2035 13.8769 21.6038C14.5989 20.886 15.5635 19.8656 16.5307 18.6571C18.4201 16.2963 20.5 12.9991 20.5 9.75768C20.5 4.19409 16.1404 1 12 1C7.85959 1 3.5 4.19409 3.5 9.75768C3.5 12.9991 5.57987 16.2963 7.46926 18.6571C8.43647 19.8656 9.40109 20.886 10.1231 21.6038ZM13 5.5V8.5H16V10.5H13V13.5H11V10.5H8V8.5H11V5.5H13Z",
                fill: "currentColor",
            }
        }
    }
}
