use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UndoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UndoIcon(props: UndoIconProps) -> Element {
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
                d: "M24 20.5C31.3886 20.5 38.0788 23.3938 42.9611 28.082L44.0431 29.1209L46.1209 26.957L45.039 25.918C39.6141 20.709 32.1854 17.5 24 17.5C16.4435 17.5 9.53189 20.2348 4.24639 24.7534L4.21658 24.7221L3.13221 25.755C3.07495 25.8092 3.01791 25.8635 2.9611 25.918L5.03462 28.0861L5.03896 28.082L5.19714 27.9313C10.0653 23.3319 16.6909 20.5 24 20.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6.43933 11.1631L2.03941 27.5838L18.4601 31.9837L19.2366 29.0859L5.71364 25.4625L9.33711 11.9395L6.43933 11.1631Z",
                fill: "currentColor",
            }
        }
    }
}
