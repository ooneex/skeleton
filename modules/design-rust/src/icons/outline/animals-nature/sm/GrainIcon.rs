use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GrainIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GrainIcon(props: GrainIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 9.5C12 9.5 10 7.74 10 5.5C10 3.26 12 1.5 12 1.5C12 1.5 14 3.3 14 5.5C14 7.74 12 9.5 12 9.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 14.5385C12 14.5385 12.4647 11.68 14.6471 10.5385C16.8295 9.39693 19.7942 10.4615 19.7942 10.4615C19.7942 10.4615 19.2905 13.3404 17.1471 14.4615C14.9647 15.6031 12 14.5385 12 14.5385Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 21.5385C12 21.5385 12.4647 18.68 14.6471 17.5385C16.8295 16.3969 19.7942 17.4615 19.7942 17.4615C19.7942 17.4615 19.2905 20.3404 17.1471 21.4615C14.9647 22.6031 12 21.5385 12 21.5385Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 14.5385C12 14.5385 11.5353 11.68 9.3529 10.5385C7.17052 9.39693 4.20579 10.4615 4.20579 10.4615C4.20579 10.4615 4.70949 13.3404 6.8529 14.4615C9.03528 15.6031 12 14.5385 12 14.5385Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 21.5385C12 21.5385 11.5353 18.68 9.3529 17.5385C7.17052 16.3969 4.20579 17.4615 4.20579 17.4615C4.20579 17.4615 4.70949 20.3404 6.8529 21.4615C9.03528 22.6031 12 21.5385 12 21.5385Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3.50002 7.5L3.00002 5.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20.5 7.5L21 5.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
