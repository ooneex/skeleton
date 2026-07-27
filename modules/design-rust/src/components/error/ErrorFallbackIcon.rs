use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ErrorFallbackIconProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ErrorFallbackIcon(props: ErrorFallbackIconProps) -> Element {
    rsx! {
        svg {
            height: "220",
            width: "280",
            view_box: "0 0 280 220",
            xmlns: "http://www.w3.org/2000/svg",
            ..props.attributes,
            defs {
                linearGradient {
                    id: "err-bg-glow",
                    x1: "0.5",
                    y1: "0",
                    x2: "0.5",
                    y2: "1",
                    stop { offset: "0%", stop_color: "#ef4444", stop_opacity: "0.12" }
                    stop { offset: "50%", stop_color: "#f97316", stop_opacity: "0.06" }
                    stop { offset: "100%", stop_color: "#eab308", stop_opacity: "0.02" }
                }
                linearGradient {
                    id: "err-shield",
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    stop { offset: "0%", stop_color: "#ef4444", stop_opacity: "0.9" }
                    stop { offset: "100%", stop_color: "#dc2626", stop_opacity: "0.7" }
                }
                linearGradient {
                    id: "err-shield-inner",
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    stop { offset: "0%", stop_color: "#fca5a5", stop_opacity: "0.3" }
                    stop { offset: "100%", stop_color: "#ef4444", stop_opacity: "0.1" }
                }
                linearGradient {
                    id: "err-orb-blue",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    stop { offset: "0%", stop_color: "#3b82f6", stop_opacity: "0.5" }
                    stop { offset: "100%", stop_color: "#6366f1", stop_opacity: "0.3" }
                }
                linearGradient {
                    id: "err-orb-amber",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    stop { offset: "0%", stop_color: "#f59e0b", stop_opacity: "0.5" }
                    stop { offset: "100%", stop_color: "#f97316", stop_opacity: "0.3" }
                }
                linearGradient {
                    id: "err-orb-emerald",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    stop { offset: "0%", stop_color: "#10b981", stop_opacity: "0.4" }
                    stop { offset: "100%", stop_color: "#059669", stop_opacity: "0.2" }
                }
                linearGradient {
                    id: "err-ring",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    stop { offset: "0%", stop_color: "#ef4444", stop_opacity: "0.3" }
                    stop { offset: "50%", stop_color: "#f97316", stop_opacity: "0.15" }
                    stop { offset: "100%", stop_color: "#eab308", stop_opacity: "0.05" }
                }
                filter {
                    id: "err-glow",
                    feGaussianBlur { std_deviation: "3", result: "blur" }
                    feMerge {
                        feMergeNode { r#in: "blur" }
                        feMergeNode { r#in: "SourceGraphic" }
                    }
                }
                filter {
                    id: "err-soft-glow",
                    feGaussianBlur { std_deviation: "6" }
                }
            }
            g {
                fill: "none",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                circle { cx: "140", cy: "100", r: "90", fill: "url(#err-bg-glow)" }
                circle {
                    cx: "140",
                    cy: "100",
                    r: "85",
                    stroke: "url(#err-ring)",
                    stroke_width: "0.5",
                    opacity: "0.4",
                    stroke_dasharray: "4 6",
                }
                circle {
                    cx: "140",
                    cy: "100",
                    r: "75",
                    stroke: "url(#err-ring)",
                    stroke_width: "0.5",
                    opacity: "0.25",
                    stroke_dasharray: "3 8",
                }
                circle { cx: "52", cy: "42", r: "10", fill: "url(#err-orb-blue)" }
                circle {
                    cx: "52",
                    cy: "42",
                    r: "10",
                    stroke: "#3b82f6",
                    stroke_width: "0.5",
                    opacity: "0.3",
                }
                circle { cx: "49", cy: "39", r: "2.5", fill: "#93c5fd", opacity: "0.4" }
                circle { cx: "228", cy: "55", r: "8", fill: "url(#err-orb-amber)" }
                circle {
                    cx: "228",
                    cy: "55",
                    r: "8",
                    stroke: "#f59e0b",
                    stroke_width: "0.5",
                    opacity: "0.3",
                }
                circle { cx: "226", cy: "53", r: "2", fill: "#fcd34d", opacity: "0.4" }
                circle { cx: "42", cy: "150", r: "7", fill: "url(#err-orb-emerald)" }
                circle {
                    cx: "42",
                    cy: "150",
                    r: "7",
                    stroke: "#10b981",
                    stroke_width: "0.5",
                    opacity: "0.3",
                }
                circle { cx: "40", cy: "148", r: "1.8", fill: "#6ee7b7", opacity: "0.4" }
                circle { cx: "240", cy: "140", r: "5", fill: "#8b5cf6", opacity: "0.25" }
                circle {
                    cx: "240",
                    cy: "140",
                    r: "5",
                    stroke: "#8b5cf6",
                    stroke_width: "0.5",
                    opacity: "0.2",
                }
                circle { cx: "70", cy: "88", r: "4", fill: "#f43f5e", opacity: "0.2" }
                circle { cx: "190", cy: "35", r: "2.5", fill: "#f97316", opacity: "0.2" }
                circle { cx: "85", cy: "170", r: "2", fill: "#3b82f6", opacity: "0.15" }
                circle { cx: "210", cy: "168", r: "3", fill: "#a855f7", opacity: "0.15" }
                circle { cx: "260", cy: "95", r: "2", fill: "#10b981", opacity: "0.15" }
                circle { cx: "25", cy: "105", r: "2.5", fill: "#f59e0b", opacity: "0.12" }
                g {
                    filter: "url(#err-glow)",
                    path {
                        d: "M140 30 L185 52 L185 108 Q185 142 140 170 Q95 142 95 108 L95 52 Z",
                        fill: "url(#err-shield)",
                        stroke: "#dc2626",
                        stroke_width: "1.5",
                        opacity: "0.85",
                    }
                }
                path {
                    d: "M140 38 L179 57 L179 108 Q179 137 140 162 Q101 137 101 108 L101 57 Z",
                    fill: "url(#err-shield-inner)",
                    stroke: "#fca5a5",
                    stroke_width: "0.5",
                    opacity: "0.4",
                }
                path {
                    d: "M148 58 L132 95 L143 95 L130 138 L156 88 L144 88 Z",
                    fill: "white",
                    opacity: "0.9",
                    stroke: "white",
                    stroke_width: "1",
                }
                line {
                    x1: "80",
                    y1: "60",
                    x2: "65",
                    y2: "50",
                    stroke: "#ef4444",
                    stroke_width: "1",
                    opacity: "0.2",
                }
                line {
                    x1: "200",
                    y1: "60",
                    x2: "215",
                    y2: "50",
                    stroke: "#ef4444",
                    stroke_width: "1",
                    opacity: "0.2",
                }
                line {
                    x1: "82",
                    y1: "130",
                    x2: "65",
                    y2: "140",
                    stroke: "#f97316",
                    stroke_width: "1",
                    opacity: "0.15",
                }
                line {
                    x1: "198",
                    y1: "130",
                    x2: "215",
                    y2: "140",
                    stroke: "#f97316",
                    stroke_width: "1",
                    opacity: "0.15",
                }
                line {
                    x1: "205",
                    y1: "38",
                    x2: "205",
                    y2: "48",
                    stroke: "#f59e0b",
                    stroke_width: "1.5",
                    opacity: "0.3",
                }
                line {
                    x1: "200",
                    y1: "43",
                    x2: "210",
                    y2: "43",
                    stroke: "#f59e0b",
                    stroke_width: "1.5",
                    opacity: "0.3",
                }
                line {
                    x1: "60",
                    y1: "165",
                    x2: "60",
                    y2: "173",
                    stroke: "#3b82f6",
                    stroke_width: "1.5",
                    opacity: "0.2",
                }
                line {
                    x1: "56",
                    y1: "169",
                    x2: "64",
                    y2: "169",
                    stroke: "#3b82f6",
                    stroke_width: "1.5",
                    opacity: "0.2",
                }
                line {
                    x1: "88",
                    y1: "30",
                    x2: "88",
                    y2: "36",
                    stroke: "#a855f7",
                    stroke_width: "1",
                    opacity: "0.2",
                }
                line {
                    x1: "85",
                    y1: "33",
                    x2: "91",
                    y2: "33",
                    stroke: "#a855f7",
                    stroke_width: "1",
                    opacity: "0.2",
                }
                path {
                    d: "M30 70 L48 78",
                    stroke: "#ef4444",
                    stroke_width: "1",
                    opacity: "0.15",
                    stroke_dasharray: "2 3",
                }
                path {
                    d: "M232 75 L250 68",
                    stroke: "#f97316",
                    stroke_width: "1",
                    opacity: "0.12",
                    stroke_dasharray: "2 3",
                }
                path {
                    d: "M225 165 L248 172",
                    stroke: "#6366f1",
                    stroke_width: "1",
                    opacity: "0.1",
                    stroke_dasharray: "2 3",
                }
                ellipse {
                    cx: "140",
                    cy: "185",
                    rx: "50",
                    ry: "5",
                    fill: "#ef4444",
                    opacity: "0.08",
                }
            }
        }
    }
}
