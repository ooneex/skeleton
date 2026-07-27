use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FootballHelmetIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FootballHelmetIcon(props: FootballHelmetIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 13V14.7949L12.8955 14.4053L13.0947 16.3955L9 16.8047V17C9 19.7614 6.76142 22 4 22H1V15.5947L7 14.9941V13H9ZM3 17.4043V20H4C5.65523 20 6.99639 18.6595 6.99902 17.0049L3 17.4043Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.9502 1C18.0253 1 22.9502 5.92487 22.9502 12V13.9141L20.2432 16.6211C20.0558 16.8085 19.9503 17.0631 19.9502 17.3281V19C19.9502 21.2091 18.1593 23 15.9502 23C13.7413 22.9998 11.9502 21.209 11.9502 19V12C11.9502 11.4477 11.5025 11 10.9502 11H0.926758L1.16992 9.80078C2.18925 4.77966 6.62758 1.00021 11.9502 1ZM16 16.5C15.1716 16.5 14.5 17.1716 14.5 18C14.5 18.8284 15.1716 19.5 16 19.5C16.8284 19.5 17.5 18.8284 17.5 18C17.5 17.1716 16.8284 16.5 16 16.5Z",
                fill: "currentColor",
            }
        }
    }
}
