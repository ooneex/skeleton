use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct HighlightTextProps {
    pub text: String,
    #[props(default)]
    pub query: Option<String>,
    #[props(default)]
    pub class: Option<String>,
}

/// Splits `text` into plain and highlighted segments matching `query`
/// (case-insensitive). Works correctly for ASCII and common Latin text.
fn split_highlights(text: &str, query: &str) -> Vec<(String, bool)> {
    let text_lower = text.to_lowercase();
    let query_lower = query.to_lowercase();
    let query_len = query_lower.len();
    let mut parts: Vec<(String, bool)> = Vec::new();
    let mut start = 0usize;

    while start < text.len() {
        match text_lower[start..].find(&query_lower) {
            Some(rel_pos) => {
                let abs_pos = start + rel_pos;
                let abs_end = abs_pos + query_len;

                if abs_pos > start {
                    parts.push((text[start..abs_pos].to_string(), false));
                }

                // Guard against Unicode case-conversion length differences.
                if text.is_char_boundary(abs_pos) && text.is_char_boundary(abs_end) {
                    parts.push((text[abs_pos..abs_end].to_string(), true));
                    start = abs_end;
                } else {
                    parts.push((text[start..].to_string(), false));
                    break;
                }
            }
            None => {
                parts.push((text[start..].to_string(), false));
                break;
            }
        }
    }

    parts
}

#[component]
pub fn HighlightText(props: HighlightTextProps) -> Element {
    let Some(query) = props.query.filter(|q| !q.trim().is_empty()) else {
        return rsx! { {props.text} };
    };

    let mark_class = cn([
        "bg-warning-200 rounded px-0",
        props.class.as_deref().unwrap_or_default(),
    ]);
    let parts = split_highlights(&props.text, query.trim());

    rsx! {
        for (part, is_match) in parts {
            if is_match {
                mark { class: mark_class.clone(), {part} }
            } else {
                {part}
            }
        }
    }
}
