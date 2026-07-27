use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChessTowerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChessTowerIcon(props: ChessTowerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M42 46H6V44C6 41.2386 8.23858 39 11 39H37C39.7614 39 42 41.2386 42 44V46Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M31 19L36 13V3H32L30.5 9H27.5L26 3H22L20.5 9H17.5L16 3H12V13L17 19H31Z",
                fill: "currentColor",
            }
            path {
                d: "M35.2979 36H12.7021L16.3691 22H31.6309L35.2979 36Z",
                fill: "currentColor",
            }
        }
    }
}
