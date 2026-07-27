use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderImageIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderImageIcon(props: FolderImageIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 21L18.4 11L14.9 17.3542L13.5 15.375L10 21H24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 11.5C12 10.6716 12.6716 10 13.5 10C14.3284 10 15 10.6716 15 11.5C15 12.3284 14.3284 13 13.5 13C12.6716 13 12 12.3284 12 11.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M4 2C2.34315 2 1 3.34315 1 5V18C1 19.6569 2.34315 21 4 21H8C8.00001 20.6328 8.101 20.2663 8.30189 19.9434L11.6909 14.4968C10.6774 13.8837 10 12.7709 10 11.5C10 9.567 11.567 8 13.5 8C14.898 8 16.1045 8.81962 16.6653 10.0045C17.0202 9.38614 17.6783 9.00252 18.393 9.00001C19.1194 8.99746 19.7901 9.38899 20.145 10.0228L23 15.121V8C23 6.34315 21.6569 5 20 5H13.4142L10.4142 2H4Z",
                fill: "currentColor",
            }
        }
    }
}
