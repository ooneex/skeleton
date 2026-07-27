use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StopwatchIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StopwatchIcon(props: StopwatchIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m13,4.054v-2.054h3V0h-8v2h3v2.054c-4.77.502-8.5,4.546-8.5,9.446,0,5.238,4.262,9.5,9.5,9.5s9.5-4.262,9.5-9.5c0-4.9-3.73-8.945-8.5-9.446Zm-1,10.36l-4.414-4.414,1.414-1.414,4.414,4.414-1.414,1.414Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "19.375",
                y: "2.284",
                width: "2",
                height: "5.182",
                transform: "translate(2.521 15.835) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "1.034",
                y: "3.875",
                width: "5.182",
                height: "2",
                transform: "translate(-2.385 3.991) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
