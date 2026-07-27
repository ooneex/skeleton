use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AxisYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AxisYIcon(props: AxisYIconProps) -> Element {
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
                d: "M23 16L9.4957 16L3 22.4957L1.58579 21.0815L8.08149 14.5858L8.08149 2.10056L10.0815 2.10056L10.0815 14L23 14L23 16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.4454 7.34311L9.03116 0.928895L2.61694 7.34311L4.03116 8.75732L9.03116 3.75732L14.0312 8.75732L15.4454 7.34311Z",
                fill: "currentColor",
            }
        }
    }
}
