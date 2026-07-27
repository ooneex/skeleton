use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PhoneIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PhoneIcon(props: PhoneIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m21.3832,18.2745l-3.1744,3.9688c-3.4906-2.0516-6.3996-4.9606-8.4513-8.4513l3.9702-3.1756L9.9013,1.9994l-6.4617,1.6761c-.9444.2466-1.555,1.1606-1.4212,2.1274,1.7626,12.5517,11.6278,22.4169,24.1795,24.1795.9665.1332,1.8799-.4773,2.1264-1.4212l1.6758-6.4603-8.6168-3.8264Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
