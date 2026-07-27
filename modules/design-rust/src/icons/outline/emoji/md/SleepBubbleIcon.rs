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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.5 30C5.88071 30 7 28.8807 7 27.5C7 26.1193 5.88071 25 4.5 25C3.11929 25 2 26.1193 2 27.5C2 28.8807 3.11929 30 4.5 30Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9.80641 18.8917C10.4 27.622 22.8061 28.2861 25.0903 21.0188C27.742 21.1574 30 18.935 30 16.2688C30 13.4142 28.6 11.6948 25.0903 11.0023C26.5 5.46243 22.5285 2 17.5556 2C13.8326 2 9.80641 3.68145 9.80641 8.88966C5.5 7.53989 2 9.94613 2 13.8907C2 17.8203 5.5 20.0047 9.80641 18.8917Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 10H21V11L14 17V18H21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
