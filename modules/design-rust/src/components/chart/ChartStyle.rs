use dioxus::document::eval;
use dioxus::prelude::*;

use super::chartContext::{ChartConfigType, THEME_DARK, THEME_LIGHT};

#[derive(Props, Clone, PartialEq)]
pub struct ChartStyleProps {
    /// The `data-chart` identifier of the container this style block targets.
    pub id: String,
    /// Chart configuration providing color and theme values.
    pub config: ChartConfigType,
}

/// Injects scoped CSS custom properties (`--color-<key>`) for every config
/// entry that carries a `color` or `theme_*` value, mirroring the TS
/// `ChartStyle` that used `dangerouslySetInnerHTML`.
///
/// One `<style>` element per chart instance is written into `<head>` via
/// `dioxus::document::eval`; the style is keyed by the chart `id` so
/// re-renders replace rather than duplicate it.
#[component]
pub fn ChartStyle(props: ChartStyleProps) -> Element {
    let color_entries: Vec<(String, ChartConfigType)> = {
        let filtered: ChartConfigType = props
            .config
            .iter()
            .filter(|(_, v)| v.color.is_some() || v.theme_light.is_some() || v.theme_dark.is_some())
            .map(|(k, v)| (k.clone(), v.clone()))
            .collect();
        if filtered.is_empty() {
            return rsx! {};
        }
        vec![(props.id.clone(), filtered)]
    };

    let id = props.id.clone();

    let mut css = String::new();
    for (chart_id, config) in &color_entries {
        for (prefix, theme_key) in [(THEME_LIGHT, "light"), (THEME_DARK, "dark")] {
            css.push_str(prefix);
            css.push_str(&format!(" [data-chart={chart_id}] {{\n"));
            for (key, item) in config {
                let color = if theme_key == "dark" {
                    item.theme_dark.as_deref().or(item.color.as_deref())
                } else {
                    item.theme_light.as_deref().or(item.color.as_deref())
                };
                if let Some(c) = color {
                    css.push_str(&format!("  --color-{key}: {c};\n"));
                }
            }
            css.push_str("}\n");
        }
    }

    let css_escaped = css.replace('`', "\\`").replace('$', "\\$");
    let style_id = format!("chart-style-{}", id.replace(':', "-"));

    use_effect(move || {
        eval(&format!(
            r#"
            (function() {{
                let el = document.getElementById("{style_id}");
                if (!el) {{
                    el = document.createElement("style");
                    el.id = "{style_id}";
                    document.head.appendChild(el);
                }}
                el.textContent = `{css_escaped}`;
            }})();
            "#
        ));
    });

    rsx! {}
}
