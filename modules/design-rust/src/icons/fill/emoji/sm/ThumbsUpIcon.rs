use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ThumbsUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ThumbsUpIcon(props: ThumbsUpIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 9L10.5722 2.25652C10.828 1.50518 11.5337 1 12.3273 1C13.3771 1 14.2176 1.87077 14.1803 2.9199L14 8.00001L20.1621 8.00001C21.5452 8.00001 22.5108 9.3702 22.0456 10.6727L18.7891 19.7905C18.3255 21.0886 17.037 21.9037 15.6654 21.7665L8 21V9Z",
                fill: "currentColor",
            }
            path {
                d: "M6 9H3V20.5L6 20.8V9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
