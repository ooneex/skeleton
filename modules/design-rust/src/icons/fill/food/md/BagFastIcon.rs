use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BagFastIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BagFastIcon(props: BagFastIconProps) -> Element {
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
                d: "M1 17H8V19H1V17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 2C13.7913 2 12 3.79128 12 6V14H10V6C10 2.68672 12.6867 0 16 0C19.3133 0 22 2.68672 22 6V14H20V6C20 3.79128 18.2087 2 16 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.99992 15.8861V8H26.9999V15.8861L29.1264 25.1005C29.7048 27.607 27.8012 30 25.2288 30H6.77107C4.19873 30 2.2951 27.607 2.87351 25.1006L3.8198 21H8V19H4.28133L4.99992 15.8861ZM6 23V25H14V23H6ZM16 23H19V25H16V23Z",
                fill: "currentColor",
            }
        }
    }
}
