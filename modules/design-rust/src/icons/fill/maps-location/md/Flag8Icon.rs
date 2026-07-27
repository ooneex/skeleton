use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Flag8IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Flag8Icon(props: Flag8IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.24727 3.89447L10.2802 29.8274L8.34995 30.3509L1.317 4.41796L3.24727 3.89447Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.00135 4.98556C10.7864 3.59845 13.7784 3.41032 16.7941 3.95259C18.8599 4.32406 20.9888 4.09675 22.9296 3.29748L26.5509 1.80614L30.6697 16.0209L27.6716 17.59C25.1141 18.9286 22.1838 19.3778 19.3427 18.867C16.9828 18.4426 14.5424 18.757 12.3905 19.8287L10.2217 20.9089L6.19597 5.88474L8.00135 4.98556Z",
                fill: "currentColor",
            }
        }
    }
}
