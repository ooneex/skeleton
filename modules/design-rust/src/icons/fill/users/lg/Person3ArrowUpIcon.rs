use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Person3ArrowUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Person3ArrowUpIcon(props: Person3ArrowUpIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M40 15L37 15L37 38.5L40 38.5L40 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M32.5 23.1213L38.5 17.1213L44.5 23.1213L46.6213 21L38.5 12.8787L30.3787 21L32.5 23.1213Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M6.44998 37.9516L10.392 19.3541C11.0536 16.2327 13.8092 14 17 14C20.1908 14 22.9463 16.2327 23.608 19.3541L27.55 37.9516L22.6 39.5484L21.5 47L12.5 47L11.4 39.5484L6.44998 37.9516Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 6C12 3.23858 14.2386 1 17 1C19.7614 1 22 3.23858 22 6C22 8.76142 19.7614 11 17 11C14.2386 11 12 8.76142 12 6Z",
                fill: "currentColor",
            }
        }
    }
}
