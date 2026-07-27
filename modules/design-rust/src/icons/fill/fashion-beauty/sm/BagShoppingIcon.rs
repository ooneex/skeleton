use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BagShoppingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BagShoppingIcon(props: BagShoppingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m17,9h-2v-4c0-1.654-1.346-3-3-3s-3,1.346-3,3v4h-2v-4c0-2.757,2.243-5,5-5s5,2.243,5,5v4Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m21.139,10.771c-.119-1.554-1.433-2.771-2.991-2.771H5.852c-1.558,0-2.872,1.217-2.991,2.77l-.692,9c-.064.831.224,1.657.79,2.269s1.368.962,2.201.962h13.681c.833,0,1.635-.351,2.201-.962s.854-1.438.79-2.269l-.692-8.999Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
