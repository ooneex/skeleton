use design_rust::components::command::{
    Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator,
    CommandShortcut, command_matches,
};
use dioxus::prelude::*;

fn palette() -> Element {
    rsx! {
        Command { label: "Commands",
            CommandInput { placeholder: "Type a command…" }
            CommandList {
                CommandEmpty { "No results." }
                CommandGroup { heading: "Actions",
                    CommandItem { value: "new-file", keywords: vec!["create".to_string()],
                        "New file"
                        CommandShortcut { "⌘N" }
                    }
                    CommandItem { value: "open-file", "Open file" }
                }
                CommandSeparator {}
                CommandGroup { heading: "Settings",
                    CommandItem { value: "calendar", "Calendar" }
                }
            }
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
    let html = render(palette);

    assert!(html.contains(r#"data-slot="command""#));
    assert!(html.contains("bg-popover text-popover-foreground"));
    assert!(html.contains(r#"data-slot="command-input-wrapper""#));
    assert!(html.contains(r#"data-slot="command-input""#));
    assert!(html.contains(r#"data-slot="command-list""#));
    assert!(html.contains("no-scrollbar max-h-72"));
    assert!(html.contains(r#"data-slot="command-group""#));
    assert!(html.contains(r#"data-slot="command-item""#));
    assert!(html.contains(r#"data-slot="command-separator""#));
    assert!(html.contains(r#"data-slot="command-shortcut""#));
}

#[test]
fn reproduces_the_cmdk_dom_markers_the_classes_select_on() {
    let html = render(palette);

    assert!(html.contains("cmdk-root"));
    assert!(html.contains("cmdk-input"));
    assert!(html.contains("cmdk-list"));
    assert!(html.contains("cmdk-group-heading"));
    assert!(html.contains("cmdk-item"));
    assert!(html.contains("Actions"));
    assert!(html.contains("Settings"));
}

#[test]
fn wires_the_input_to_the_list_and_the_active_item() {
    let html = render(palette);

    assert!(html.contains(r#"role="combobox""#));
    assert!(html.contains(r#"role="listbox""#));
    assert!(html.contains(r#"role="option""#));

    let list_id = html
        .split(r#"aria-controls=""#)
        .nth(1)
        .and_then(|rest| rest.split('"').next())
        .expect("aria-controls value");

    assert!(html.contains(&format!(r#"id="{list_id}""#)));
    assert!(list_id.ends_with("-list"));

    let heading_id = html
        .split(r#"aria-labelledby=""#)
        .nth(1)
        .and_then(|rest| rest.split('"').next())
        .expect("aria-labelledby value");

    assert!(html.contains(&format!(r#"id="{heading_id}""#)));
    assert!(html.contains(r#"role="group""#));
}

#[test]
fn highlights_the_first_item_by_default() {
    let html = render(palette);

    let mut items = html.split(r#"data-slot="command-item""#).skip(1);
    let first = items.next().expect("first item");
    let second = items.next().expect("second item");

    assert!(first.contains(r#"aria-selected="true""#));
    assert!(first.contains(r#"data-selected="true""#));
    assert!(second.contains(r#"aria-selected="false""#));
    assert!(!second.contains(r#"data-selected="true""#));
}

#[test]
fn filters_out_items_that_do_not_match_the_search() {
    fn app() -> Element {
        rsx! {
            Command { default_search: "cal",
                CommandList {
                    CommandItem { value: "calendar", "Calendar" }
                    CommandItem { value: "settings", "Settings" }
                }
            }
        }
    }

    let html = render(app);

    assert!(html.contains("Calendar"));
    assert!(!html.contains("Settings"));
}

#[test]
fn keeps_every_item_when_filtering_is_disabled() {
    fn app() -> Element {
        rsx! {
            Command { default_search: "cal", should_filter: false,
                CommandList {
                    CommandItem { value: "calendar", "Calendar" }
                    CommandItem { value: "settings", "Settings" }
                }
            }
        }
    }

    let html = render(app);

    assert!(html.contains("Calendar"));
    assert!(html.contains("Settings"));
}

#[test]
fn searches_the_keywords_of_an_item() {
    fn app() -> Element {
        rsx! {
            Command { default_search: "invoice",
                CommandList {
                    CommandItem { value: "billing", keywords: vec!["invoice".to_string()],
                        "Billing"
                    }
                    CommandItem { value: "profile", "Profile" }
                }
            }
        }
    }

    let html = render(app);

    assert!(html.contains("Billing"));
    assert!(!html.contains("Profile"));
}

#[test]
fn marks_disabled_items() {
    fn app() -> Element {
        rsx! {
            Command {
                CommandList {
                    CommandItem { value: "archived", disabled: true, "Archived" }
                }
            }
        }
    }

    let html = render(app);

    assert!(html.contains(r#"data-disabled="true""#));
    assert!(html.contains(r#"aria-disabled="true""#));
}

#[test]
fn merges_custom_classes_over_defaults() {
    fn app() -> Element {
        rsx! {
            Command { class: "bg-card",
                CommandList { class: "max-h-40",
                    CommandItem { value: "a", class: "px-4", "A" }
                }
            }
        }
    }

    let html = render(app);

    assert!(html.contains("bg-card"));
    assert!(!html.contains("bg-popover"));
    assert!(html.contains("max-h-40"));
    assert!(!html.contains("max-h-72"));
    assert!(html.contains("px-4"));
    assert!(!html.contains("px-2 py-2"));
}

#[test]
fn matches_every_token_of_the_query_case_insensitively() {
    assert!(command_matches("New file", ""));
    assert!(command_matches("New file", "  "));
    assert!(command_matches("New file", "new"));
    assert!(command_matches("New file", "FILE"));
    assert!(command_matches("New file create", "new create"));
    assert!(!command_matches("New file", "new folder"));
    assert!(!command_matches("New file", "open"));
}
