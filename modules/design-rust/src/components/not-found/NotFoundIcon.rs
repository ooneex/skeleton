use dioxus::prelude::*;

const NOT_FOUND_ICON_INNER_HTML: &str = r#"
<defs>
  <linearGradient id="nf-page" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="var(--color-primary-500)" stop-opacity="0.08"></stop>
    <stop offset="100%" stop-color="var(--color-primary-600)" stop-opacity="0.03"></stop>
  </linearGradient>
  <linearGradient id="nf-glass" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="var(--color-secondary-500)" stop-opacity="0.9"></stop>
    <stop offset="100%" stop-color="var(--color-secondary-700)" stop-opacity="0.8"></stop>
  </linearGradient>
  <linearGradient id="nf-glass-fill" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="var(--color-secondary-500)" stop-opacity="0.08"></stop>
    <stop offset="100%" stop-color="var(--color-secondary-700)" stop-opacity="0.04"></stop>
  </linearGradient>
</defs>
<g fill="none" stroke-linecap="round" stroke-linejoin="round">
  <ellipse cx="72" cy="122" rx="32" ry="4" fill="var(--color-primary-600)" opacity="0.06"></ellipse>
  <rect x="38" y="14" width="56" height="72" rx="4" fill="var(--color-primary-500)" stroke="var(--color-primary-500)" stroke-width="1.5" opacity="0.1"></rect>
  <rect x="30" y="20" width="56" height="72" rx="4" fill="url(#nf-page)" stroke="var(--color-primary-500)" stroke-width="1.5" opacity="0.3"></rect>
  <line x1="42" y1="38" x2="70" y2="38" stroke="var(--color-primary-500)" stroke-width="2" opacity="0.15"></line>
  <line x1="42" y1="46" x2="64" y2="46" stroke="var(--color-primary-500)" stroke-width="2" opacity="0.12"></line>
  <line x1="42" y1="54" x2="56" y2="54" stroke="var(--color-primary-500)" stroke-width="2" opacity="0.08"></line>
  <line x1="42" y1="66" x2="70" y2="66" stroke="var(--color-primary-500)" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.1"></line>
  <line x1="42" y1="74" x2="60" y2="74" stroke="var(--color-primary-500)" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.07"></line>
  <circle cx="92" cy="90" r="20" fill="url(#nf-glass-fill)" stroke="url(#nf-glass)" stroke-width="2.5"></circle>
  <line x1="106" y1="104" x2="118" y2="116" stroke="url(#nf-glass)" stroke-width="3.5"></line>
  <path d="M87 85a5.5 5.5 0 1 1 5.5 5.5v3" stroke="var(--color-secondary-500)" stroke-width="2.5" opacity="0.6"></path>
  <circle cx="92.5" cy="97" r="1.2" fill="var(--color-secondary-500)" opacity="0.6"></circle>
  <circle cx="18" cy="30" r="2.5" fill="var(--color-primary-500)" opacity="0.12"></circle>
  <circle cx="120" cy="24" r="2" fill="var(--color-secondary-500)" opacity="0.15"></circle>
  <circle cx="12" cy="80" r="1.5" fill="var(--color-primary-600)" opacity="0.08"></circle>
  <circle cx="24" cy="112" r="2" fill="var(--color-secondary-500)" opacity="0.1"></circle>
  <circle cx="126" cy="60" r="1.5" fill="var(--color-primary-500)" opacity="0.1"></circle>
  <line x1="108" y1="38" x2="108" y2="44" stroke="var(--color-secondary-500)" stroke-width="1.5" opacity="0.2"></line>
  <line x1="105" y1="41" x2="111" y2="41" stroke="var(--color-secondary-500)" stroke-width="1.5" opacity="0.2"></line>
  <line x1="20" y1="52" x2="20" y2="56" stroke="var(--color-primary-500)" stroke-width="1.5" opacity="0.15"></line>
  <line x1="18" y1="54" x2="22" y2="54" stroke="var(--color-primary-500)" stroke-width="1.5" opacity="0.15"></line>
</g>
"#;

#[derive(Props, Clone, PartialEq)]
pub struct NotFoundIconProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NotFoundIcon(props: NotFoundIconProps) -> Element {
    rsx! {
        svg {
            height: "140",
            width: "140",
            view_box: "0 0 140 140",
            xmlns: "http://www.w3.org/2000/svg",
            class: props.class.as_deref().unwrap_or_default(),
            dangerous_inner_html: NOT_FOUND_ICON_INNER_HTML,
            ..props.attributes,
        }
    }
}
