use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct KnifeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn KnifeIcon(props: KnifeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.44941 15.7932L3.98017 19.2625C2.9903 20.2526 2.99032 21.8576 3.98017 22.8477C4.97028 23.8378 6.57591 23.8384 7.56611 22.8484L11.7072 18.7073L7.44941 15.7932Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.4795 2.96441C13.2132 0.230916 17.6453 0.230799 20.3789 2.96441L23.9141 6.49957L10.4795 19.9351L1.99414 11.4498L10.4795 2.96441ZM9.36816 13.2593L10.7822 14.6744L16.2637 9.19293L14.8496 7.77789L9.36816 13.2593Z",
                fill: "currentColor",
            }
        }
    }
}
