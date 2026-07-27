use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SnowboardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SnowboardIcon(props: SnowboardIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M43,19.606A10.33,10.33,0,0,0,28.394,5c-3.956,3.956-7.3,10.226-10.226,13.148S9.037,24.354,5.019,28.371a10.331,10.331,0,0,0,14.61,14.61c4.017-4.018,7.3-10.227,10.226-13.149S39.047,23.562,43,19.606Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
