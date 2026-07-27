use dioxus::document::eval;

const STALE_CHUNK_PATTERNS: [&str; 4] = [
    "Failed to fetch dynamically imported module",
    "Importing a module script failed",
    "error loading dynamically imported module",
    "Unable to preload CSS",
];

/// Guard key under which the last forced reload timestamp is stored.
const RELOAD_GUARD_KEY: &str = "app:stale-chunk-reloaded-at";
const RELOAD_GUARD_WINDOW_MS: u64 = 10_000;

pub fn is_stale_chunk_error(message: &str) -> bool {
    !message.is_empty()
        && STALE_CHUNK_PATTERNS
            .iter()
            .any(|pattern| message.contains(pattern))
}

/// Reloads the document once when a chunk of a previous deployment can no longer
/// be fetched, keeping a `sessionStorage` guard so a broken deploy cannot loop.
pub fn reload_if_stale_chunk_error(message: &str) -> bool {
    if !is_stale_chunk_error(message) {
        return false;
    }

    eval(&format!(
        r#"
        const key = "{RELOAD_GUARD_KEY}";
        const now = Date.now();
        const last = Number(sessionStorage.getItem(key) ?? 0);
        if (!Number.isFinite(last) || now - last >= {RELOAD_GUARD_WINDOW_MS}) {{
            sessionStorage.setItem(key, String(now));
            window.location.reload();
        }}
        "#
    ));

    true
}
