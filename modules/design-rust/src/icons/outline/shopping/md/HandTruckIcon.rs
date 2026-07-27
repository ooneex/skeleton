use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HandTruckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HandTruckIcon(props: HandTruckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.0747 4.32935L16.3688 9.15897L20.2325 8.1237L18.9384 3.29407",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M11.1094 28.168C13.2433 27.5962 14.5096 25.4028 13.9379 23.269C13.3661 21.1351 11.1727 19.8688 9.03887 20.4406C6.90501 21.0123 5.63868 23.2057 6.21045 25.3395C6.78221 27.4734 8.97556 28.7397 11.1094 28.168Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9.03888 20.4404L4.89778 4.98563L2 5.76208",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13.938 23.2689L30.3586 18.869",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23.7681 1.99995L10.2451 5.62341L13.0921 16.2486C13.378 17.3155 14.4747 17.9487 15.5416 17.6628L25.2009 15.0746C26.2678 14.7887 26.901 13.6921 26.6151 12.6251L23.7681 1.99995Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
