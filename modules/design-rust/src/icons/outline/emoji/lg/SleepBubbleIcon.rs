use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SleepBubbleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SleepBubbleIcon(props: SleepBubbleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 46C10.2091 46 12 44.2091 12 42C12 39.7909 10.2091 38 8 38C5.79086 38 4 39.7909 4 42C4 44.2091 5.79086 46 8 46Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14.2672 28.7452C15.2 42.5682 34.6953 43.6196 38.2848 32.113C42.4517 32.3326 46 28.8138 46 24.5923C46 20.0725 43.8 17.3501 38.2848 16.2537C40.5 7.48219 34.259 2 26.4444 2C20.5941 2 14.2672 4.66229 14.2672 12.9086C7.5 10.7715 2 14.5814 2 20.8269C2 27.0487 7.5 30.5074 14.2672 28.7452Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 15H31V16.5L21 25.5V27H31",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
