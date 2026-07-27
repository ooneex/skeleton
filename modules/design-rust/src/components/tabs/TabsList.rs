use dioxus::document::eval;
use dioxus::prelude::*;

use super::Tabs::TabsContext;
use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum TabsListVariantType {
    #[default]
    Default,
    Line,
}

impl TabsListVariantType {
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Default => "default",
            Self::Line => "line",
        }
    }

    fn class(&self) -> &'static str {
        match self {
            Self::Default => "bg-transparent gap-0.5 ring ring-border",
            Self::Line => "gap-1 bg-transparent rounded-none",
        }
    }
}

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum TabsListSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl TabsListSizeType {
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Xs => "xs",
            Self::Sm => "sm",
            Self::Md => "md",
            Self::Lg => "lg",
        }
    }

    fn class(&self) -> &'static str {
        match self {
            Self::Xs => "h-6 p-0.5",
            Self::Sm => "h-8 p-1",
            Self::Md => "h-9 p-1",
            Self::Lg => "h-10 p-1.5",
        }
    }
}

pub fn tabs_list_variants(
    variant: TabsListVariantType,
    size: TabsListSizeType,
    class: &str,
) -> String {
    cn([
        "relative rounded group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",
        variant.class(),
        size.class(),
        class,
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct TabsListProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub variant: Option<TabsListVariantType>,
    #[props(default)]
    pub size: Option<TabsListSizeType>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Renders the tab trigger list and manages the `--active-tab-*` CSS
/// variables consumed by `TabsIndicator` via a long-running `MutationObserver`.
#[component]
pub fn TabsList(props: TabsListProps) -> Element {
    let tabs = use_context::<TabsContext>();
    let variant = props.variant.unwrap_or_default();
    let size = props.size.unwrap_or_default();
    let list_id = tabs.list_id.read().clone();

    let indicator_listener = use_signal(|| None::<dioxus::document::Eval>);

    let list_id_script = list_id.clone();
    let mut indicator_signal = indicator_listener;

    // Start a long-running MutationObserver that keeps `--active-tab-*`
    // CSS variables in sync with the active trigger's bounding rect.
    use_effect(move || {
        if indicator_signal.peek().is_some() {
            return;
        }
        let id = list_id_script.clone();
        indicator_signal.set(Some(eval(&format!(
            r#"
            const list = document.getElementById("{id}");
            if (!list) return;

            const update = () => {{
                requestAnimationFrame(() => {{
                    const active = list.querySelector('[data-slot="tabs-trigger"][data-active="true"]');
                    if (!active) return;
                    const lr = list.getBoundingClientRect();
                    const tr = active.getBoundingClientRect();
                    list.style.setProperty("--active-tab-top",    (tr.top    - lr.top)    + "px");
                    list.style.setProperty("--active-tab-left",   (tr.left   - lr.left)   + "px");
                    list.style.setProperty("--active-tab-width",  tr.width + "px");
                    list.style.setProperty("--active-tab-height", tr.height + "px");
                }});
            }};

            update();
            const mo = new MutationObserver(update);
            mo.observe(list, {{ attributes: true, subtree: true, attributeFilter: ["data-active"] }});
            const ro = new ResizeObserver(update);
            ro.observe(list);

            await dioxus.recv();
            mo.disconnect();
            ro.disconnect();
            "#
        ))));
    });

    use_drop(move || {
        if let Some(ev) = indicator_signal.write().take() {
            let _ = ev.send("stop");
        }
    });

    rsx! {
        div {
            id: list_id,
            role: "tablist",
            "aria-orientation": tabs.orientation.read().as_str(),
            "data-slot": "tabs-list",
            "data-variant": variant.as_str(),
            "data-size": size.as_str(),
            class: tabs_list_variants(variant, size, props.class.as_deref().unwrap_or_default()),
            ..props.attributes,
            {props.children}
        }
    }
}
