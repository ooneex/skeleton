use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareAllLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareAllLeftIcon(props: ShareAllLeftIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M32.9968 7L14 24.0917L32.9968 41.1833V29.7887L34.0001 29.7888C40.0196 29.7888 45.0039 34.221 45.8676 40H46V30.3943C46 23.767 40.6275 18.3944 34.0001 18.3943L32.9968 18.3943V7Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.9287 7.82496L6.22393 23.9999L23.9287 40.1748L21.9052 42.3897L1.77612 23.9999L21.9052 5.61011L23.9287 7.82496Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
