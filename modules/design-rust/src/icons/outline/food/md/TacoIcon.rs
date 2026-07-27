use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TacoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TacoIcon(props: TacoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18.9209 4.05673C21.7158 4.18062 24.3705 6.3159 24.3637 9.46526L24.3998 9.50291C27.295 9.09941 30 11.3577 30 14.2273C30 15.8405 29.5 17.5 27.5 18.5L27.4742 18.4553",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 8.06699C16 5.82085 14.12 4 11.801 4C9.48189 4 7.6738 5.86571 7.60191 8.06699L7.70703 9.54297L7.66761 9.57667C4.77284 9.12964 2 11.3163 2 14.2273C2 15.8062 2.96512 17.547 4.3609 18.4787L4.38043 18.4547",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 12C8.8203 12 3 17.4947 3 24.2727V28H29V24.2727C29 17.4947 23.1797 12 16 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9.53164 23.0655L8.5 24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16.5 23L15.5 24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 18L13 19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19 18L20 19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23.5 23L22.5 24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
