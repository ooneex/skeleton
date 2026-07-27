use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShieldCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShieldCheckIcon(props: ShieldCheckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m21,3c-2.89,0-5.622-.609-8.598-1.916l-.402-.177-.402.177c-2.976,1.307-5.708,1.916-8.598,1.916h-1v8c0,9.69,9.685,11.955,9.783,11.976l.217.048.217-.048c.098-.021,9.783-2.286,9.783-11.976V3h-1Zm-10.72,13.444l-3.694-3.694,1.414-1.414,2.22,2.22,5.721-6.219,1.472,1.354-7.133,7.753Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
