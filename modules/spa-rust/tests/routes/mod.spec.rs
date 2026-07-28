//! Covers `src/routes/mod.rs` — the typed route table Dioxus derives from the
//! `Route` enum. These tests exercise parsing and formatting only; the rendering
//! of each variant lives in the sibling specs.

use spa_rust::routes::Route;
use std::str::FromStr;

fn parse(path: &str) -> Route {
    Route::from_str(path).expect("the path resolves to a route")
}

fn not_found(segments: &[&str]) -> Route {
    Route::NotFound {
        segments: segments.iter().map(|s| s.to_string()).collect(),
    }
}

#[test]
fn resolves_the_root_path_to_the_index_route() {
    assert_eq!(parse("/"), Route::Index {});
}

#[test]
fn ignores_a_query_string_when_matching() {
    assert_eq!(parse("/?q=1"), Route::Index {});
}

#[test]
fn routes_an_unclaimed_path_to_the_catch_all() {
    assert_eq!(parse("/nope"), not_found(&["nope"]));
}

#[test]
fn collects_every_unmatched_segment_in_order() {
    assert_eq!(
        parse("/nope/deeper/still"),
        not_found(&["nope", "deeper", "still"])
    );
}

#[test]
fn drops_a_trailing_slash_from_the_catch_all_segments() {
    assert_eq!(parse("/nope/"), not_found(&["nope"]));
}

#[test]
fn keeps_the_empty_segment_a_doubled_slash_produces() {
    // `//` is two separators around nothing, so the catch-all sees one empty
    // segment rather than none.
    assert_eq!(parse("//"), not_found(&[""]));
}

#[test]
fn stops_matching_at_the_fragment() {
    assert_eq!(parse("/x#frag"), not_found(&["x"]));
}

#[test]
fn percent_decodes_catch_all_segments() {
    assert_eq!(parse("/a%20b"), not_found(&["a b"]));
    assert_eq!(parse("/%3Cscript%3E"), not_found(&["<script>"]));
}

#[test]
fn rejects_a_path_that_does_not_start_at_the_root() {
    // The catch-all claims anything rooted at `/`, so these are the only inputs
    // left that can fail to parse.
    assert!(Route::from_str("").is_err());
    assert!(Route::from_str("nope").is_err());
    assert!(Route::from_str("nope/deeper").is_err());
}

#[test]
fn formats_every_route_back_into_its_path() {
    assert_eq!(Route::Index {}.to_string(), "/");
    assert_eq!(not_found(&["a", "b"]).to_string(), "/a/b");
}

#[test]
fn percent_encodes_a_segment_when_formatting() {
    assert_eq!(not_found(&["a b"]).to_string(), "/a%20b");
}

#[test]
fn formats_a_segmentless_catch_all_into_a_path_that_no_longer_parses() {
    // `NotFound { segments: [] }` is reachable in code but not from any URL: it
    // formats to the empty string, which is the one input `from_str` rejects. Do
    // not hand this variant to a `Link` or to the history.
    let empty = not_found(&[]);

    assert_eq!(empty.to_string(), "");
    assert!(Route::from_str(&empty.to_string()).is_err());
}
