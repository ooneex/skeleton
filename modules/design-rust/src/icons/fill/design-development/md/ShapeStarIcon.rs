use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShapeStarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShapeStarIcon(props: ShapeStarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16.0001 0.217529L11.1609 10.146L0.369873 11.734L8.1772 19.4391L6.33148 30.3385L16.0001 25.1914L25.6686 30.3385L23.8229 19.4391L31.6302 11.734L20.8393 10.146L16.0001 0.217529Z",
                fill: "currentColor",
            }
        }
    }
}
