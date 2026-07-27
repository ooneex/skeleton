use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FootballHelmetIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FootballHelmetIcon(props: FootballHelmetIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 15.0001V20.3047L15.9229 20.003L17.66 19.8632L17.7722 21.8542L16.0771 21.9971L11.9912 22.3106C11.828 26.5849 8.31425 30.0001 4 30.0001H2V21.0743L10 20.4581V15.0001H12ZM4 22.9258V28.0001C7.15689 28.0001 9.74166 25.5618 9.97949 22.4659L4 22.9258Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 1C24.2843 1 31 7.71573 31 16V18.333L28.4854 21.6855C28.1702 22.1058 28.0001 22.6172 28 23.1426V24.9824C28 28.3057 25.3057 31 21.9824 31C18.6593 30.9999 15.9658 28.3056 15.9658 24.9824V18C15.9658 16.8956 15.0702 16.0003 13.9658 16H1C1 7.71573 7.71573 1 16 1ZM22 22C20.8954 22 20 22.8954 20 24C20 25.1046 20.8954 26 22 26C23.1046 26 24 25.1046 24 24C24 22.8954 23.1046 22 22 22Z",
                fill: "currentColor",
            }
        }
    }
}
