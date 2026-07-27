use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MergeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MergeIcon(props: MergeIconProps) -> Element {
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
                d: "M1 4H6.45993L13.3171 12L6.45993 20H1V18H5.54007L10.6829 12L5.54006 6H1V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.5 13V11H21.5V13H11.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.5857 17L20.5857 12L15.5857 6.99997L16.9999 5.58576L23.4141 12L16.9999 18.4142L15.5857 17Z",
                fill: "currentColor",
            }
        }
    }
}
