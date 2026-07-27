use design_rust::components::tag::{TagPicker, TagPickerSizeType};
use dioxus::prelude::*;

fn tags() -> Vec<String> {
    vec![
        "rust".to_string(),
        "dioxus".to_string(),
        "react".to_string(),
    ]
}

fn picker() -> Element {
    rsx! {
        TagPicker {
            value: vec!["rust".to_string()],
            suggested_tags: tags(),
            title: rsx! { "Pick tags" },
        }
    }
}

fn render(app: fn() -> Element) -> String {
    let mut dom = VirtualDom::new(app);
    dom.rebuild_in_place();

    dioxus_ssr::render(&dom)
}

#[test]
fn renders_slots_and_base_classes() {
    let html = render(picker);

    assert!(html.contains(r#"data-slot="tag-picker""#));
    assert!(html.contains(r#"data-size="sm""#));
    assert!(html.contains("grid gap-6"));
    assert!(html.contains(r#"data-slot="tag-picker-field""#));
    assert!(html.contains(r#"data-slot="combobox""#));
    assert!(html.contains(r#"data-slot="combobox-chips""#));
    assert!(html.contains(r#"data-slot="combobox-chip-input""#));
    assert!(html.contains(r#"placeholder="Add tags...""#));
    assert!(html.contains(r#"data-slot="dialog-header""#));
    assert!(html.contains(r#"data-slot="dialog-title""#));
    assert!(html.contains("Pick tags"));
}

#[test]
fn applies_the_chips_and_icon_size_variants() {
    let html = render(picker);

    assert!(html.contains("flex-wrap items-center gap-1.5"));
    assert!(html.contains("min-h-8"));
    assert!(!html.contains("min-h-9"));
    assert!(html.contains("text-foreground pointer-events-none shrink-0 size-3.5"));

    fn large() -> Element {
        rsx! {
            TagPicker { size: TagPickerSizeType::Lg, suggested_tags: tags() }
        }
    }

    let html = render(large);

    assert!(html.contains(r#"data-size="lg""#));
    assert!(html.contains("min-h-10"));
    assert!(html.contains("px-3"));
    assert!(html.contains("py-1.5"));
    assert!(html.contains("size-4.5"));
}

#[test]
fn renders_a_chip_for_every_selected_tag() {
    fn app() -> Element {
        rsx! {
            TagPicker {
                value: vec!["rust".to_string(), "dioxus".to_string()],
                suggested_tags: tags(),
            }
        }
    }

    let html = render(app);
    let chips = html.matches(r#"data-slot="combobox-chip""#).count();

    assert_eq!(chips, 2);
    assert!(html.contains(r#"data-slot="combobox-chip-remove""#));
}

#[test]
fn keeps_the_suggestion_popup_closed_until_it_is_opened() {
    let html = render(picker);

    assert!(!html.contains(r#"data-slot="combobox-content""#));
}

#[test]
fn lists_every_suggestion_and_marks_the_selected_ones() {
    fn app() -> Element {
        rsx! {
            TagPicker {
                default_open: true,
                value: vec!["rust".to_string()],
                suggested_tags: tags(),
            }
        }
    }

    let html = render(app);

    assert!(html.contains(r#"data-slot="combobox-content""#));
    assert!(html.contains(r#"data-slot="combobox-list""#));
    assert_eq!(html.matches(r#"data-slot="combobox-item""#).count(), 3);
    assert!(html.contains(r#"role="option""#));

    let mut items = html.split(r#"data-slot="combobox-item""#).skip(1);
    let rust = items.next().expect("rust item");
    let dioxus = items.next().expect("dioxus item");

    assert!(rust.contains(r#"aria-selected="true""#));
    assert!(dioxus.contains(r#"aria-selected="false""#));
}

#[test]
fn appends_selected_tags_missing_from_the_suggestions() {
    fn app() -> Element {
        rsx! {
            TagPicker {
                default_open: true,
                value: vec!["legacy".to_string()],
                suggested_tags: vec!["rust".to_string()],
            }
        }
    }

    let html = render(app);
    let items: Vec<&str> = html.split(r#"data-slot="combobox-item""#).skip(1).collect();

    assert_eq!(items.len(), 2);
    assert!(items[0].contains("rust"));
    assert!(items[1].contains("legacy"));
}

#[test]
fn filters_the_suggestions_with_the_search_text() {
    fn app() -> Element {
        rsx! {
            TagPicker {
                default_open: true,
                default_input_value: "ru".to_string(),
                suggested_tags: tags(),
            }
        }
    }

    let html = render(app);

    assert_eq!(html.matches(r#"data-slot="combobox-item""#).count(), 1);
    assert!(html.contains("rust"));
    assert!(!html.contains(">react<"));
    assert!(html.contains(r#"value="ru""#));
}

#[test]
fn offers_to_create_the_typed_tag() {
    fn app() -> Element {
        rsx! {
            TagPicker {
                default_open: true,
                default_input_value: "ru".to_string(),
                suggested_tags: tags(),
            }
        }
    }

    let html = render(app);

    assert!(html.contains(r#"data-slot="tag-picker-create""#));
    assert!(html.contains(r#"<span class="text-sm font-medium">ru</span>"#));
    assert!(!html.contains("No matching tags"));
}

#[test]
fn hides_the_create_option_when_creation_is_disabled() {
    fn app() -> Element {
        rsx! {
            TagPicker {
                default_open: true,
                allow_create: false,
                default_input_value: "ru".to_string(),
                suggested_tags: tags(),
            }
        }
    }

    let html = render(app);

    assert!(!html.contains(r#"data-slot="tag-picker-create""#));
    assert!(html.contains("No matching tags"));
}

#[test]
fn shows_the_loading_state_while_pending() {
    fn app() -> Element {
        rsx! {
            TagPicker { default_open: true, is_pending: true, suggested_tags: tags() }
        }
    }

    let html = render(app);

    assert!(html.contains(r#"data-slot="combobox-empty""#));
    assert!(html.contains("Loading tags…"));
    assert!(!html.contains(r#"data-slot="tag-picker-create""#));
    assert!(!html.contains("No matching tags"));
}

#[test]
fn renders_the_confirm_button() {
    let html = render(picker);

    assert!(html.contains(r#"data-slot="button""#));
    assert!(html.contains("Done"));

    fn app() -> Element {
        rsx! {
            TagPicker { confirm_label: rsx! { "Apply tags" } }
        }
    }

    let html = render(app);

    assert!(html.contains("Apply tags"));
    assert!(!html.contains("Done"));
}

#[test]
fn merges_custom_classes_over_defaults() {
    fn app() -> Element {
        rsx! {
            TagPicker {
                default_open: true,
                class: "min-h-12",
                content_class: "w-96",
                suggested_tags: tags(),
            }
        }
    }

    let html = render(app);

    assert!(html.contains("min-h-12"));
    assert!(!html.contains("min-h-8"));
    assert!(html.contains("w-96"));
}
