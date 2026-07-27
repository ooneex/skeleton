use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BasketShopping2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BasketShopping2Icon(props: BasketShopping2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2.383 11L3.309 19.331C3.478 20.852 4.76 22 6.29 22H17.71C19.24 22 20.522 20.853 20.691 19.331L21.617 11H2.383Z",
                fill: "currentColor",
            }
            path {
                d: "M19.578 7.00003L15.617 0.134033L13.884 1.13403L17.269 7.00003H6.731L10.116 1.13403L8.383 0.134033L4.422 7.00003H0V9.00003H24V7.00003H19.578Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
