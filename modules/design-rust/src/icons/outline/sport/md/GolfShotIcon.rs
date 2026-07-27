use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GolfShotIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GolfShotIcon(props: GolfShotIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 29H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23.3334 25C25.5425 25 27.3334 23.2091 27.3334 21C27.3334 18.7909 25.5425 17 23.3334 17C21.1242 17 19.3334 18.7909 19.3334 21C19.3334 23.2091 21.1242 25 23.3334 25Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6.86371 2.65653L10.9763 14.3257L25.3718 9.76005C27.4979 9.08574 29.5902 10.8849 29.242 13.088L28.8985 15.2613",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3.00001 3.69188L8.57944 20.9241C8.98014 22.1617 10.1327 23 11.4336 23L15.5822 23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
