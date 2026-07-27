use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FertilizerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FertilizerIcon(props: FertilizerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.44444 21H19.5556L19.7479 19.7019C19.8997 18.6769 19.4036 17.6645 18.5005 17.1565L18.2222 17L18.6061 16.1363C19.4961 14.1337 19.5257 11.8536 18.6879 9.82866L18.345 9H5.65156L5.3085 9.83089C4.47292 11.8546 4.50328 14.1324 5.39249 16.1331L5.77778 17L5.49948 17.1565C4.59641 17.6645 4.10028 18.6769 4.25213 19.7019L4.44444 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18.5 5C18.5 3.89543 17.6046 3 16.5 3C15.8144 3 15.2093 3.34503 14.849 3.87093H14.7803C14.3342 2.77365 13.2575 2 12 2C10.7425 2 9.66577 2.77365 9.21972 3.87093H9.15105C8.79072 3.34503 8.18565 3 7.5 3C6.39543 3 5.5 3.89543 5.5 5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 13H14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
