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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12.767 7.7275L10.5 3L12.6544 2.06362L17.8451 6.36685",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4.90162 9.83487L8.09289 12.0856L27.4116 6.90941C28.7452 6.5521 30.116 7.34351 30.4733 8.6771C30.8306 10.0107 30.0392 11.3815 28.7056 11.7388L22.427 13.4212L18 23.5L15.8138 23.5137L15.6655 15.2329L8.71859 17.0943C7.95107 17.3 7.1346 17.0318 6.63855 16.411L2.00385 10.6113L4.90162 9.83487Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 28L28 28",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
