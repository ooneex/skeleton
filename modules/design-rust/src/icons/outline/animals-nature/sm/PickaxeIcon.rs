use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PickaxeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PickaxeIcon(props: PickaxeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18.5 7.5L21.914 4.91398L20.5 3.49998L19.086 2.08598L16.5 5.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M11 10.8208L1.58579 19.5858L3 21L4.41422 22.4142L13.1792 13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21.7627 15.6723L8.32762 2.23732L9.36861 1.19632C12.3422 2.30294 15.2583 4.25452 17.5 6.49998C19.7417 8.74543 21.6911 11.6669 22.7926 14.6423L21.7627 15.6723Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
