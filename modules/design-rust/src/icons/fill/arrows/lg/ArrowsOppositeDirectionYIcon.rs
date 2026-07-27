use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsOppositeDirectionYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsOppositeDirectionYIcon(props: ArrowsOppositeDirectionYIconProps) -> Element {
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
                d: "M3.99998 17.1213L13 8.12134L22 17.1213L24.1213 15L13 3.8787L1.87866 15L3.99998 17.1213Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.5 31L11.5 6L14.5 6L14.5 31L11.5 31Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26 30.8787L35 39.8787L44 30.8787L46.1213 33L35 44.1213L23.8787 33L26 30.8787Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M33.5 17L33.5 42L36.5 42L36.5 17L33.5 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
