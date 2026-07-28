//! Covers `src/bootstrap/reportWebVitals.rs` — the web-vitals subscription hook.
//!
//! The measurements themselves come from a browser-only JS module loaded through
//! `eval`, so nothing here asserts on real metrics. What is testable on the host
//! is the metric type and the hook's behaviour on the first render.

#[path = "../shared/harness.rs"]
mod harness;

use dioxus::prelude::*;
use harness::render;
use spa_rust::bootstrap::{WebVitalType, report_web_vitals};
use std::sync::Mutex;

/// Anything the callback receives during a render, which must stay empty: the
/// subscription only ever fires once the browser reports a metric.
static COLLECTED: Mutex<Vec<WebVitalType>> = Mutex::new(Vec::new());

#[component]
fn Subscribed() -> Element {
    report_web_vitals(Some(Callback::new(|metric: WebVitalType| {
        COLLECTED.lock().unwrap().push(metric);
    })));

    rsx! { div { "page" } }
}

#[component]
fn Unsubscribed() -> Element {
    report_web_vitals(None);

    rsx! { div { "page" } }
}

#[test]
fn compares_metrics_by_name_and_value() {
    let lcp = WebVitalType {
        name: "LCP".to_string(),
        value: 812.0,
    };

    assert_eq!(lcp.clone(), lcp);
    assert_ne!(
        lcp,
        WebVitalType {
            name: "LCP".to_string(),
            value: 813.0
        }
    );
    assert_ne!(
        lcp,
        WebVitalType {
            name: "FCP".to_string(),
            value: 812.0
        }
    );
}

#[test]
fn formats_a_metric_for_a_log_line() {
    let metric = WebVitalType {
        name: "LCP".to_string(),
        value: 812.0,
    };

    assert_eq!(
        format!("{metric:?}"),
        r#"WebVitalType { name: "LCP", value: 812.0 }"#
    );
}

#[test]
fn contributes_no_markup_when_no_callback_is_given() {
    // `report_web_vitals(None)` is what the scaffold ships: it must render the
    // page untouched rather than fail or inject anything.
    assert_eq!(render(Unsubscribed), "<div>page</div>");
}

#[test]
fn requests_nothing_from_the_cdn_when_no_callback_is_given() {
    let html = render(Unsubscribed);

    assert!(!html.contains("web-vitals"), "got: {html}");
    assert!(!html.contains("cdn.jsdelivr.net"), "got: {html}");
}

#[test]
fn contributes_no_markup_when_a_callback_is_given() {
    assert_eq!(render(Subscribed), "<div>page</div>");
}

#[test]
fn reports_no_metric_during_the_first_render() {
    // The subscription is set up in a future, so a metric can only arrive after
    // the browser observes one — never synchronously while the page renders.
    render(Subscribed);

    assert!(COLLECTED.lock().unwrap().is_empty());
}
