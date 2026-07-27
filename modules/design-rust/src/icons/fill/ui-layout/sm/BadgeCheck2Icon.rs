use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BadgeCheck2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BadgeCheck2Icon(props: BadgeCheck2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20,8.687v-4.687h-4.687l-3.313-3.313-3.313,3.313h-4.687v4.687l-3.313,3.313,3.313,3.313v4.687h4.687l3.313,3.313,3.313-3.313h4.687v-4.687l3.313-3.313-3.313-3.313Zm-9.5,7.228l-3.414-3.414,1.414-1.414,2,2,5-5,1.414,1.414-6.414,6.414Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
