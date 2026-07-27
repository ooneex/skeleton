use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HeartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HeartIcon(props: HeartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m15.995,29l4.477-3.307c1.581-1.168,6.899-5.395,8.975-10.766,1.58-4.085-.341-8.721-4.29-10.355-3.376-1.398-7.149-.145-9.157,2.806-2.007-2.952-5.781-4.204-9.157-2.806C2.894,6.206.973,10.842,2.553,14.927c2.076,5.371,7.395,9.598,8.975,10.766l4.466,3.307Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
