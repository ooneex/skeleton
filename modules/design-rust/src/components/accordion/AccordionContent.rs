use std::rc::Rc;

use dioxus::prelude::*;

use super::Accordion::AccordionContext;
use super::AccordionItem::AccordionItemContext;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct AccordionContentProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn AccordionContent(props: AccordionContentProps) -> Element {
    let accordion = use_context::<AccordionContext>();
    let item = use_context::<AccordionItemContext>();

    let value = item.value;
    let is_open = use_memo(move || accordion.is_open(&value.read().clone()));
    let mut content = use_signal(|| None::<Rc<MountedData>>);
    let mut height = use_signal(|| None::<f64>);
    let mut visible = use_signal(&*is_open);

    // Keep the panel mounted while the collapse animation plays, and publish the
    // natural content height as `--accordion-panel-height` so the height
    // keyframes have a target to animate towards.
    use_effect(move || {
        if !is_open() {
            return;
        }

        visible.set(true);

        let Some(element) = content() else {
            return;
        };

        spawn(async move {
            if let Ok(rect) = element.get_client_rect().await {
                height.set(Some(rect.size.height));
            }
        });
    });

    rsx! {
        div {
            id: item.panel_id(),
            role: "region",
            "data-slot": "accordion-content",
            "aria-labelledby": item.trigger_id(),
            "data-open": is_open().then_some("true"),
            "data-closed": (!is_open()).then_some("true"),
            hidden: !visible(),
            class: "data-open:animate-accordion-down data-closed:animate-accordion-up overflow-hidden text-base",
            style: height().map(|height| format!("--accordion-panel-height: {height}px")),
            onanimationend: move |_| {
                if !is_open() {
                    visible.set(false);
                }
            },
            div {
                onmounted: move |event| content.set(Some(event.data())),
                class: cn([
                    "text-muted-foreground px-6 pt-0 pb-5 leading-relaxed h-(--accordion-panel-height) [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                ..props.attributes,
                {props.children}
            }
        }
    }
}
