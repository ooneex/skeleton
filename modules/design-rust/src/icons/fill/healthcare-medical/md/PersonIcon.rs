use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PersonIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PersonIcon(props: PersonIconProps) -> Element {
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
                d: "M12.5 4.5C12.5 2.566 14.066 1 16 1C17.934 1 19.5 2.566 19.5 4.5C19.5 6.434 17.934 8 16 8C14.066 8 12.5 6.434 12.5 4.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12.2104 9.69751C13.2084 9.31446 14.5385 9 16.0012 9C16.7117 9 18.1455 9.07379 19.7447 9.6798C20.8912 10.1146 21.7275 11.1625 21.923 12.4176L23 19.3039L20.5192 20.6253L19.4228 31H12.5785L11.4809 20.6253L9 19.3039L10.0771 12.4171C10.2689 11.1928 11.0639 10.1375 12.2104 9.69751Z",
                fill: "currentColor",
            }
        }
    }
}
