use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BottleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BottleIcon(props: BottleIconProps) -> Element {
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
                d: "M28.1035 8.98828L28.46 15.9814L29.29 16.1768C33.8072 17.2396 37 21.2706 37 25.9111V46H11V25.9111C11 21.2706 14.1928 17.2396 18.71 16.1768L19.5391 15.9814L19.8965 8.98828H28.1035ZM14 38H34V28H14V38Z",
                fill: "currentColor",
            }
            path {
                d: "M27.5 1C28.6046 1 29.5 1.89543 29.5 3V6H18.5V3C18.5 1.89543 19.3954 1 20.5 1H27.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
