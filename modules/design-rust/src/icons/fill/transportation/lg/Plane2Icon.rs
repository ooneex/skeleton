use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Plane2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Plane2Icon(props: Plane2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M1.5903 16.7871L7.96817 26.9532C9.13469 28.8126 11.3775 29.6938 13.4977 29.1257L21.8547 26.8864L21.0768 38.9562L24.8978 39.1843C26.2432 39.2646 27.477 38.4378 27.9143 37.1629L32.4088 24.0585L43.1447 21.1818C44.9334 20.7025 45.9948 18.864 45.5156 17.0753C44.5654 13.5293 40.9206 11.425 37.3746 12.3751L12.0929 19.1493L7.4106 15.2276L1.5903 16.7871Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 41H46V44H2V41Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M15.7178 4.92404C16.8428 4.18178 18.3247 4.2809 19.3409 5.16637L26.5421 11.4416L27.292 11.9709L17.5544 14.5801L12.5228 7.03206L15.7178 4.92404Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
