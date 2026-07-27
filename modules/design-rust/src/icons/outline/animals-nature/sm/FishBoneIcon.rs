use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FishBoneIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FishBoneIcon(props: FishBoneIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.69 16.32L6.898 21.863L2.146 17.112L7.69 16.32Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M16.01 8.00001L7.69 16.32",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M9.66796 4.86003C10.1591 7.18936 11.3167 9.3257 13 11.009C14.6833 12.6923 16.8196 13.8499 19.149 14.341",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7.26711 9.82089C7.88553 11.3869 8.81889 12.8094 10.0094 14C11.1999 15.1907 12.6221 16.1242 14.1881 16.7429",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21.3932 10.918C23.2185 6.7921 22 2.00001 22 2.00001C22 2.00001 17.2281 0.745303 13.08 2.59967L13.4027 3.72928C14.3519 7.05136 16.9487 9.64814 20.2707 10.5973L21.3932 10.918Z",
                stroke: "currentColor",
                stroke_width: "2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M16.2457 4.66019C16.2457 5.35054 16.8053 5.91019 17.4957 5.91019C18.186 5.91019 18.7457 5.35054 18.7457 4.66019C18.7457 3.96983 18.186 3.41019 17.4957 3.41019C16.8053 3.41019 16.2457 3.96983 16.2457 4.66019Z",
                fill: "currentColor",
                "data-stroke": "none",
                "data-cap": "butt",
            }
        }
    }
}
