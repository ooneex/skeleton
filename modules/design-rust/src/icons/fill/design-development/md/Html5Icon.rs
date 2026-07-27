use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Html5IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Html5Icon(props: Html5IconProps) -> Element {
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
                d: "M31.13 2H0.870117L4.08907 28.2881L16 31.5365L27.911 28.2881L31.13 2ZM6.48239 7L7.58443 16H22.4008L21.5182 23.2073L16 24.6748L10.4819 23.2073L10.0752 19.8859L8.09001 20.129L8.66108 24.7927L16 26.7443L23.339 24.7927L24.6606 14H9.35447L8.74222 9H25V7H6.48239Z",
                fill: "currentColor",
            }
        }
    }
}
