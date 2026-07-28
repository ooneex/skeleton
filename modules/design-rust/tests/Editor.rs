//! `EditorHandleType` itself is not covered here: every one of its methods
//! reaches the editor through `dioxus::document::eval`, and `on_handle` is
//! delivered from a `use_effect` that never runs under `rebuild_in_place`. So
//! these tests cover the rendered surface only.

use design_rust::components::editor::Editor;
use dioxus::prelude::*;

fn render(app: fn() -> Element) -> String {
    let mut dom = VirtualDom::new(app);
    dom.rebuild_in_place();

    dioxus_ssr::render(&dom)
}

#[test]
fn renders_the_editable_surface() {
    fn app() -> Element {
        rsx! {
            Editor { placeholder: "Write something" }
        }
    }

    let html = render(app);

    assert!(html.contains(r#"data-slot="editor-content""#));
    assert!(html.contains(r#"contenteditable="true""#));
    assert!(html.contains(r#"role="textbox""#));
    assert!(html.contains(r#"data-placeholder="Write something""#));
    assert!(html.contains(r#"data-empty="true""#));
}

#[test]
fn falls_back_to_the_slash_menu_placeholder() {
    fn app() -> Element {
        rsx! {
            Editor {}
        }
    }

    let html = render(app);

    assert!(html.contains("Type something or &#39;/&#39; to start"));
}

#[test]
fn drops_the_slash_hint_from_the_placeholder_in_plain_text_mode() {
    fn app() -> Element {
        rsx! {
            Editor { plain_text: true }
        }
    }

    let html = render(app);

    assert!(html.contains(r#"data-placeholder="Type something...""#));
}

#[test]
fn marks_the_surface_read_only_when_not_editable() {
    fn app() -> Element {
        rsx! {
            Editor { editable: false }
        }
    }

    let html = render(app);

    assert!(html.contains(r#"contenteditable="false""#));
}

#[test]
fn merges_custom_classes_over_the_prose_defaults() {
    fn app() -> Element {
        rsx! {
            Editor { class: "min-h-40 rounded" }
        }
    }

    let html = render(app);

    assert!(html.contains("min-h-40"));
    assert!(html.contains("rounded"));
    assert!(html.contains("outline-none"));
}
