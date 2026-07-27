use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberNineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberNineIcon(props: NumberNineIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 29H14C19.5228 29 24 24.5228 24 19L24 11.5V11.8154",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 11V12C8 16.4183 11.5817 20 16 20C20.4183 20 24 16.4183 24 12V11C24 6.58172 20.4183 3 16 3C11.5817 3 8 6.58172 8 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
