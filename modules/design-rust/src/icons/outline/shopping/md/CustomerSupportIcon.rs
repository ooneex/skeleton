use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CustomerSupportIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CustomerSupportIcon(props: CustomerSupportIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22.3511 30V27.8414L24.9313 27.7272C26.2361 27.6694 27.3188 26.7162 27.5201 25.4479L28.156 21.441L30.5682 20.4936C30.9521 20.3427 31.1142 19.895 30.9134 19.5398L27.8604 14.1395L27.8163 13.3586C27.456 6.98602 22.0925 2 15.5977 2C7.74379 2 1.52313 8.52013 2.02879 16.2222L2.07819 16.9746C2.32065 20.6678 4.4722 23.9813 7.7785 25.7533L10.0179 26.9535V30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 23L18 19L18.625 19.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.5 21C16.9853 21 19 18.9853 19 16.5C19 14.0147 16.9853 12 14.5 12C12.0147 12 10 14.0147 10 16.5C10 18.9853 12.0147 21 14.5 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
