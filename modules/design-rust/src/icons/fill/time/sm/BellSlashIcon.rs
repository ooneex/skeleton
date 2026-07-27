use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BellSlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BellSlashIcon(props: BellSlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20,15v-6c0-.243-.015-.483-.036-.721l-10.721,10.721h12.757v-2c-1.103,0-2-.897-2-2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m18.949,5.051c-1.378-2.416-3.974-4.051-6.949-4.051-4.411,0-8,3.589-8,8v6c0,1.103-.897,2-2,2v2h3l13.949-13.949Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "-3.142",
                y: "11",
                width: "30.284",
                height: "2",
                transform: "translate(-4.971 12) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m8.538,21l.875,1.503c.537.924,1.528,1.497,2.587,1.497s2.05-.573,2.587-1.497l.875-1.503h-6.924Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
