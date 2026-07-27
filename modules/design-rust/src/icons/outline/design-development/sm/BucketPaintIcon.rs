use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BucketPaintIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BucketPaintIcon(props: BucketPaintIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11.2808 9.44883C14.2097 6.5199 15.6937 3.25514 14.5953 2.15679C13.497 1.05845 10.2322 2.54242 7.3033 5.47136C4.37437 8.40029 2.89039 11.665 3.98874 12.7634C5.08709 13.8617 8.35184 12.3778 11.2808 9.44883Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3.98877 12.7634L13.601 19.724C14.7617 20.5681 17.239 19.4005 19.2358 17.4038C21.2325 15.4071 22.4065 12.8782 21.556 11.7691L14.5954 2.15683",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M2 20.8666C2 19.4041 4 17 4 17C4 17 6 19.4 6 20.8666C6 22.2268 4.97491 23 4 23C3.02509 23 2 22.2268 2 20.8666Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
