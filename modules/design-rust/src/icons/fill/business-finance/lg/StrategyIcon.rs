use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StrategyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StrategyIcon(props: StrategyIconProps) -> Element {
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
                d: "M43 7.12126L16.5607 33.5606L14.4393 31.4393L40.8787 4.99994L43 7.12126Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 3.87866L22.1213 18L20 20.1213L5.87868 5.99998L8 3.87866Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 25.8787L44.1213 40L42 42.1213L27.8787 28L30 25.8787Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.1213 5.99998L8 20.1213L5.87868 18L20 3.87866L22.1213 5.99998Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44.1213 28L30 42.1213L27.8787 40L42 25.8787L44.1213 28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 4L43 17L31 5L44 4Z",
                fill: "currentColor",
            }
            path {
                d: "M12 43C15.866 43 19 39.866 19 36C19 32.134 15.866 29 12 29C8.13401 29 5 32.134 5 36C5 39.866 8.13401 43 12 43Z",
                fill: "currentColor",
            }
        }
    }
}
