use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TestTubeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TestTubeIcon(props: TestTubeIconProps) -> Element {
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
                d: "M38 13L32 13.5V37C32 41.4183 28.4183 45 24 45C19.5817 45 16 41.4183 16 37V13.5L10 13V8H38V13ZM19 36H24V33H19V36ZM19 28.5H24V25.5H19V28.5ZM19 18V21H24V18H19Z",
                fill: "currentColor",
            }
            path {
                d: "M27.5 2H20.5C18.7367 2 17.278 3.30385 17.0354 5H30.9645C30.7219 3.30385 29.2632 2 27.5 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
