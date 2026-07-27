use design_rust::components::date_time::{TimePicker, TimePickerPropsType, pick_time};
use dioxus::prelude::*;

fn render(app: fn() -> Element) -> String {
    let mut dom = VirtualDom::new(app);
    dom.rebuild_in_place();

    dioxus_ssr::render(&dom)
}

/// Opens a picker on the first render, mirroring a call site that awaits
/// `pick_time` from an event handler.
fn open(props: TimePickerPropsType) {
    use_hook(move || {
        let pending = pick_time(props);
        spawn(async move {
            pending.await;
        });
    });
}

fn reminder() -> Element {
    open(TimePickerPropsType {
        value: Some("9:30".to_string()),
        title: Some("Reminder".to_string()),
        ..Default::default()
    });

    rsx! {
        TimePicker {}
    }
}

#[test]
fn renders_the_dialog_shell_around_two_selects() {
    let html = render(reminder);

    assert!(html.contains(r#"data-slot="dialog-overlay""#));
    assert!(html.contains(r#"data-slot="dialog-content""#));
    assert!(html.contains(r#"role="dialog""#));
    assert!(html.contains("flex w-full items-center gap-2 justify-start"));
    assert_eq!(html.matches(r#"data-slot="select-trigger""#).count(), 2);
    assert_eq!(html.matches(r#"data-slot="select-value""#).count(), 2);
    assert!(html.contains(r#"class="px-1""#));
}

#[test]
fn renders_the_title_inside_a_dialog_header() {
    let html = render(reminder);

    assert!(html.contains(r#"data-slot="dialog-header""#));
    assert!(html.contains(r#"data-slot="dialog-title""#));
    assert!(html.contains("Reminder"));
}

#[test]
fn omits_the_header_when_no_title_is_given() {
    fn app() -> Element {
        open(TimePickerPropsType::default());

        rsx! {
            TimePicker {}
        }
    }

    let html = render(app);

    assert!(html.contains(r#"data-slot="select-trigger""#));
    assert!(!html.contains(r#"data-slot="dialog-header""#));
    assert!(!html.contains(r#"data-slot="dialog-title""#));
}

#[test]
fn zero_pads_the_hour_of_the_initial_value() {
    let html = render(reminder);

    let values: Vec<String> = html
        .split(r#"data-slot="select-value""#)
        .skip(1)
        .filter_map(|rest| rest.split("</span>").next().map(str::to_string))
        .collect();

    assert!(values[0].contains("09"));
    assert!(values[1].contains("30"));
}

#[test]
fn wires_the_triggers_as_small_collapsed_listboxes() {
    let html = render(reminder);

    assert!(html.contains(r#"data-size="sm""#));
    assert!(html.contains(r#"aria-haspopup="listbox""#));
    assert!(html.contains(r#"aria-expanded="false""#));
    assert!(html.contains("w-full cursor-pointer"));
}

#[test]
fn labels_the_confirm_button() {
    let html = render(reminder);

    assert!(html.contains(r#"data-slot="button""#));
    assert!(html.contains("Done"));
}

#[test]
fn uses_a_custom_confirm_label() {
    fn app() -> Element {
        open(TimePickerPropsType {
            confirm_label: Some("Set reminder".to_string()),
            ..Default::default()
        });

        rsx! {
            TimePicker {}
        }
    }

    let html = render(app);

    assert!(html.contains("Set reminder"));
    assert!(!html.contains("Done"));
}

#[test]
fn renders_nothing_until_a_picker_is_opened() {
    fn app() -> Element {
        rsx! {
            TimePicker {}
        }
    }

    let html = render(app);

    assert!(!html.contains(r#"data-slot="dialog-content""#));
    assert!(!html.contains(r#"data-slot="select-trigger""#));
}

#[test]
fn merges_custom_classes_over_the_default_panel_width() {
    fn app() -> Element {
        open(TimePickerPropsType {
            class: Some("max-w-lg".to_string()),
            ..Default::default()
        });

        rsx! {
            TimePicker {}
        }
    }

    let html = render(app);

    assert!(html.contains("max-w-lg"));
    assert!(!html.contains("max-w-xs"));
    assert!(!html.contains("max-w-2xl"));
}
