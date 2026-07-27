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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.9999 14C21.1786 14 25.8717 16.0706 29.2999 19.4312L30.014 20.1313L31.4141 18.7031L30.7 18.003C26.9131 14.2907 21.723 12 15.9999 12C10.6961 12 5.84999 13.9674 2.15435 17.2104L2.13517 17.1907L1.41954 17.8866C1.3795 17.9253 1.33961 17.9641 1.29987 18.003L2.6971 19.434L2.69996 19.4312L2.8112 19.3231C6.22929 16.0262 10.877 14 15.9999 14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.29292 7.77503L0.187087 19.3662L11.7782 22.472L12.2958 20.5401L2.63658 17.9519L5.22477 8.29267L3.29292 7.77503Z",
                fill: "currentColor",
            }
        }
    }
}
