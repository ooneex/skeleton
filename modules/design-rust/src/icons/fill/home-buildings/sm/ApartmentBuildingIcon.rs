use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ApartmentBuildingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ApartmentBuildingIcon(props: ApartmentBuildingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 1.37744L22 6.47845V12H2V6.47845L12 1.37744ZM11 10V7.00003H13V10H11ZM17 10V7.00003H15V10H17ZM7 7.00003H9V10H7V7.00003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M2 14V22H10V16H14V22H22V14H2Z",
                fill: "currentColor",
            }
        }
    }
}
