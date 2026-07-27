use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Paperclip2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Paperclip2Icon(props: Paperclip2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m29,16.525l-10.942,10.913c-3.458,3.417-9.031,3.417-12.489,0h0c-3.426-3.449-3.426-9.007,0-12.456L16.843,3.737c2.405-2.316,6.217-2.316,8.622,0h0c2.322,2.399,2.322,6.201,0,8.6l-10.501,10.471c-1.223,1.278-3.254,1.326-4.536.106-.036-.034-.072-.07-.106-.106h0c-1.282-1.22-1.329-3.246-.106-4.524.035-.036.07-.071.106-.106l10.057-10.252",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
