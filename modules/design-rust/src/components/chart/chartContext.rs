use std::collections::HashMap;

/// CSS-theme keys used to scope color variables.
pub const THEME_LIGHT: &str = "";
pub const THEME_DARK: &str = ".dark";

/// Per-key configuration entry for a chart series.
///
/// Mirrors the TypeScript `ChartConfigType` value shape; `icon` is omitted
/// because Dioxus does not support passing component types as props.
#[derive(Clone, PartialEq, Default)]
pub struct ChartConfigItemType {
    /// Human-readable series label rendered in legends and tooltips.
    pub label: Option<String>,
    /// Fixed CSS color (e.g. `"hsl(var(--chart-1))"`) used when no per-theme
    /// value is provided.
    pub color: Option<String>,
    /// Color override for the light theme.
    pub theme_light: Option<String>,
    /// Color override for the dark theme.
    pub theme_dark: Option<String>,
}

/// Map of series key → configuration. Passed to `ChartContainer`.
pub type ChartConfigType = HashMap<String, ChartConfigItemType>;

/// Context value shared by all chart sub-components.
#[derive(Clone)]
pub struct ChartContextType {
    pub config: ChartConfigType,
}

/// Looks up the config entry for `key`, returning `None` when the key is absent.
pub fn get_payload_config<'a>(
    config: &'a ChartConfigType,
    key: &str,
) -> Option<&'a ChartConfigItemType> {
    config.get(key)
}

/// Returns the resolved display color for a config item, preferring the
/// `theme_light` value, then `color`, then `None`.
pub fn resolve_color(item: &ChartConfigItemType) -> Option<&str> {
    item.theme_light.as_deref().or(item.color.as_deref())
}
