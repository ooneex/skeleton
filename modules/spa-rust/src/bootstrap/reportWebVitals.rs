use dioxus::document::eval;
use dioxus::prelude::*;

/// ESM build of `web-vitals`, imported on demand. A Dioxus app has no bundler,
/// so the module comes from a CDN instead of `node_modules` — point this at a
/// self-hosted copy if the app must run without third-party origins.
const WEB_VITALS_MODULE: &str = "https://cdn.jsdelivr.net/npm/web-vitals@6/+esm";

/// A single web-vitals measurement, e.g. `("LCP", 812.0)`.
#[derive(Clone, Debug, PartialEq)]
pub struct WebVitalType {
    pub name: String,
    pub value: f64,
}

/// Subscribes to the CLS, INP, FCP, LCP and TTFB metrics and forwards each one
/// to `on_perf_entry`. Passing `None` collects nothing and issues no network
/// request, which is what the scaffold does by default.
///
/// This is a hook: call it unconditionally from a component body.
pub fn report_web_vitals(on_perf_entry: Option<Callback<WebVitalType>>) {
    use_future(move || async move {
        let Some(on_perf_entry) = on_perf_entry else {
            return;
        };

        let mut listener = eval(&format!(
            r#"
            const {{ onCLS, onINP, onFCP, onLCP, onTTFB }} = await import("{WEB_VITALS_MODULE}");
            const send = (metric) => dioxus.send([metric.name, metric.value]);
            for (const observe of [onCLS, onINP, onFCP, onLCP, onTTFB]) {{
                observe(send);
            }}
            "#
        ));

        while let Ok((name, value)) = listener.recv::<(String, f64)>().await {
            on_perf_entry.call(WebVitalType { name, value });
        }
    });
}
