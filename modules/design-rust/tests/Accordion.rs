use design_rust::components::accordion::{
    Accordion, AccordionContent, AccordionItem, AccordionTrigger,
};
use dioxus::prelude::*;

fn faq() -> Element {
    rsx! {
        Accordion { default_value: vec!["shipping".to_string()],
            AccordionItem { value: "shipping",
                AccordionTrigger { "How long does shipping take?" }
                AccordionContent {
                    p { "Orders placed before 2pm ship the same business day." }
                }
            }
            AccordionItem { value: "returns",
                AccordionTrigger { "What is your return policy?" }
                AccordionContent {
                    p { "Unused items can be returned within 30 days." }
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
    let html = render(faq);

    assert!(html.contains(r#"data-slot="accordion""#));
    assert!(html.contains("flex w-full flex-col gap-3"));
    assert!(html.contains(r#"data-slot="accordion-item""#));
    assert!(html.contains(r#"data-slot="accordion-trigger""#));
    assert!(html.contains(r#"data-slot="accordion-content""#));
    assert!(html.contains(r#"data-slot="accordion-trigger-icon""#));
}

#[test]
fn opens_items_listed_in_default_value() {
    let html = render(faq);

    let mut items = html.split(r#"data-slot="accordion-item""#).skip(1);
    let shipping = items.next().expect("shipping item");
    let returns = items.next().expect("returns item");

    assert!(shipping.contains(r#"aria-expanded="true""#));
    assert!(shipping.contains(r#"data-open="true""#));
    assert!(returns.contains(r#"aria-expanded="false""#));
    assert!(returns.contains(r#"data-closed="true""#));
    assert!(returns.contains("hidden"));
}

#[test]
fn wires_trigger_and_panel_together() {
    let html = render(faq);

    let panel_id = html
        .split(r#"aria-controls=""#)
        .nth(1)
        .and_then(|rest| rest.split('"').next())
        .expect("aria-controls value");
    let item_id = panel_id.strip_suffix("-panel").expect("panel id suffix");

    assert!(html.contains(&format!(r#"id="{panel_id}""#)));
    assert!(html.contains(&format!(r#"id="{item_id}-trigger""#)));
    assert!(html.contains(&format!(r#"aria-labelledby="{item_id}-trigger""#)));
}

#[test]
fn disables_every_trigger_when_the_group_is_disabled() {
    fn app() -> Element {
        rsx! {
            Accordion { disabled: true,
                AccordionItem { value: "a",
                    AccordionTrigger { "A" }
                    AccordionContent { "Body" }
                }
            }
        }
    }

    let html = render(app);

    assert!(html.contains(r#"aria-disabled="true""#));
    assert!(html.contains(r#"data-disabled="true""#));
}

#[test]
fn merges_custom_classes_over_defaults() {
    fn app() -> Element {
        rsx! {
            Accordion { class: "gap-8",
                AccordionItem { value: "a", class: "rounded-xl",
                    AccordionTrigger { "A" }
                    AccordionContent { "Body" }
                }
            }
        }
    }

    let html = render(app);

    assert!(html.contains("gap-8"));
    assert!(!html.contains("gap-3"));
    assert!(html.contains("rounded-xl"));
    assert!(!html.contains("rounded border"));
}
