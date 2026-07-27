use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TouchActivateIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TouchActivateIcon(props: TouchActivateIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.5 16.6667L10.5 3.50001C10.5 2.11929 11.6193 1 13 1V1C14.3807 1 15.5 2.11929 15.5 3.5L15.5 10.6667L23.9188 12.5015C26.4951 13.063 28.1926 15.5288 27.7976 18.1359L26.0001 30H12.0001V28.9179C12.0001 28.1767 11.7257 27.4619 11.2299 26.911L7.28363 22.5261C6.45733 21.608 6.00012 20.4165 6.00012 19.1813V15.6667C6.00012 14.0098 7.34327 12.6667 9.00012 12.6667H10.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
