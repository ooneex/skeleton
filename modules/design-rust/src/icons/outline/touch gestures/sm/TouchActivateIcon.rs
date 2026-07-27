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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.99995 12V3C7.99995 1.89543 8.89538 1 9.99995 1V1C11.1045 1 11.9999 1.89543 11.9999 3V7.5L18.4522 9.12095C20.1446 9.52767 21.2363 11.1655 20.9562 12.8777L19.4999 22H8.99995V21.4762C8.99995 20.7351 8.72562 20.0202 8.22984 19.4693L5.78351 16.7511C4.95721 15.833 4.5 14.6415 4.5 13.4063V11C4.5 9.89543 5.39543 9 6.5 9H7.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
