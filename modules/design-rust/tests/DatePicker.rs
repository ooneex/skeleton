use design_rust::components::date_time::{DatePicker, DatePickerPropsType, pick_date};
use dioxus::prelude::*;

fn render(app: fn() -> Element) -> String {
    let mut dom = VirtualDom::new(app);
    dom.rebuild_in_place();

    dioxus_ssr::render(&dom)
}

/// Opens a picker on the first render, mirroring a call site that awaits
/// `pick_date` from an event handler.
fn open(props: DatePickerPropsType) {
    use_hook(move || {
        let pending = pick_date(props);
        spawn(async move {
            pending.await;
        });
    });
}

fn due_date() -> Element {
    open(DatePickerPropsType {
        value: Some((2026, 7, 27)),
        title: Some("Due date".to_string()),
        disabled_days: vec![(2026, 7, 4)],
        ..Default::default()
    });

    rsx! {
        DatePicker {}
    }
}

#[test]
fn renders_the_dialog_shell_around_a_calendar() {
    let html = render(due_date);

    assert!(html.contains(r#"data-slot="dialog-overlay""#));
    assert!(html.contains(r#"data-slot="dialog-content""#));
    assert!(html.contains(r#"role="dialog""#));
    assert!(html.contains(r#"data-slot="dialog-close""#));
    assert!(html.contains(r#"data-slot="calendar""#));
}

#[test]
fn renders_the_title_inside_a_dialog_header() {
    let html = render(due_date);

    assert!(html.contains(r#"data-slot="dialog-header""#));
    assert!(html.contains(r#"data-slot="dialog-title""#));
    assert!(html.contains("Due date"));
}

#[test]
fn omits_the_header_when_no_title_is_given() {
    fn app() -> Element {
        open(DatePickerPropsType::default());

        rsx! {
            DatePicker {}
        }
    }

    let html = render(app);

    assert!(html.contains(r#"data-slot="calendar""#));
    assert!(!html.contains(r#"data-slot="dialog-header""#));
    assert!(!html.contains(r#"data-slot="dialog-title""#));
}

#[test]
fn opens_on_the_selected_date_and_marks_disabled_days() {
    let html = render(due_date);

    assert!(html.contains("July 2026"));
    assert!(html.contains(r#"data-selected="true""#));
    assert!(html.contains(r#"data-disabled="true""#));
}

#[test]
fn stretches_the_calendar_to_the_dialog_by_default() {
    let html = render(due_date);

    let calendar = html
        .split(r#"data-slot="calendar""#)
        .nth(1)
        .expect("calendar slot");
    let calendar_class = calendar
        .split(r#"class=""#)
        .nth(1)
        .and_then(|rest| rest.split('"').next())
        .expect("calendar class");

    assert!(calendar_class.contains("w-full"));
    assert!(!calendar_class.contains("w-fit"));
}

#[test]
fn renders_nothing_until_a_picker_is_opened() {
    fn app() -> Element {
        rsx! {
            DatePicker {}
        }
    }

    let html = render(app);

    assert!(!html.contains(r#"data-slot="dialog-content""#));
    assert!(!html.contains(r#"data-slot="calendar""#));
}

#[test]
fn merges_custom_classes_over_the_default_panel_width() {
    fn app() -> Element {
        open(DatePickerPropsType {
            class: Some("max-w-md".to_string()),
            ..Default::default()
        });

        rsx! {
            DatePicker {}
        }
    }

    let html = render(app);

    assert!(html.contains("max-w-md"));
    assert!(!html.contains("max-w-fit"));
    assert!(!html.contains("max-w-2xl"));
}
