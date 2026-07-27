use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FishingHookIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FishingHookIcon(props: FishingHookIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M43.5 33.5V21.4473L34.5889 28.8711L40.5 27.8506V33.5C40.5 37.6421 37.1421 41 33 41C28.8579 41 25.5 37.6421 25.5 33.5V14.5H22.5V33.5C22.5 39.299 27.201 44 33 44C38.799 44 43.5 39.299 43.5 33.5Z",
                fill: "currentColor",
            }
            path {
                d: "M4.5 33.5001V21.4444L13.4072 28.8741L7.5 27.8536V33.5001C7.50003 37.6422 10.8579 41.0001 15 41.0001C19.1421 41.0001 22.5 37.6422 22.5 33.5001V14.5001H25.5V33.5001C25.5 39.299 20.799 44.0001 15 44.0001C9.20103 44.0001 4.50003 39.299 4.5 33.5001Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 2C27.866 2 31 5.13401 31 9C31 12.866 27.866 16 24 16C20.134 16 17 12.866 17 9C17 5.13401 20.134 2 24 2ZM24 5C21.7909 5 20 6.79086 20 9C20 11.2091 21.7909 13 24 13C26.2091 13 28 11.2091 28 9C28 6.79086 26.2091 5 24 5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
