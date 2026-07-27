use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PlaneTakeOffIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PlaneTakeOffIcon(props: PlaneTakeOffIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.65686 14.6828L8.26419 16.1787L14.0207 13.16L8.99855 7.88945L10.9804 6.28564L20.2201 9.90916L25.9766 6.89048C27.1994 6.24926 28.7104 6.72072 29.3517 7.9435C29.9929 9.16629 29.5214 10.6774 28.2986 11.3186L10.0313 20.8978C9.33273 21.2642 8.48411 21.1857 7.86457 20.6975L2 16.076L4.65686 14.6828Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 27L28 27",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
