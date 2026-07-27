use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SplitThreeWaysIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SplitThreeWaysIcon(props: SplitThreeWaysIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 29L15 2.5L17 2.5L17 29L15 29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 24.0219C7 24.8219 7.47679 25.545 8.21216 25.8601L10.8131 26.9748L10.0252 28.8131L7.42432 27.6984C5.95359 27.0681 5 25.622 5 24.0219L5 17L7 17L7 24.0219Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.105 27.2676L24.1624 25.0837C24.688 24.7082 25 24.1021 25 23.4562L25 12.5L27 12.5L27 23.4562C27 24.748 26.3761 25.9603 25.3249 26.7111L22.2675 28.895L21.105 27.2676Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.5858 6.49997L16 1.08576L21.4142 6.49997L20 7.91418L16 3.91418L12 7.91418L10.5858 6.49997Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0.585815 21L6.00003 15.5858L11.4142 21L10 22.4142L6.00003 18.4142L2.00003 22.4142L0.585815 21Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.5858 16L26 10.5858L31.4142 16L30 17.4142L26 13.4142L22 17.4142L20.5858 16Z",
                fill: "currentColor",
            }
        }
    }
}
