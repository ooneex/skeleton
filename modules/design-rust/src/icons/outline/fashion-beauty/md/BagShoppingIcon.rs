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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m3.848,25.325l2.152-9.325v-7h20v7l2.152,9.325c.434,1.88-.994,3.675-2.923,3.675H6.771c-1.929,0-3.357-1.795-2.923-3.675Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m11,13v-7c0-2.761,2.239-5,5-5h0c2.761,0,5,2.239,5,5v7",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
