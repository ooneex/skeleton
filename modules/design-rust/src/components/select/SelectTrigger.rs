use dioxus::prelude::*;

use super::Select::SelectContext;
use crate::icons::outline::arrows::sm::ChevronDownIcon;
use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum SelectTriggerSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl SelectTriggerSizeType {
    pub fn class(&self) -> &'static str {
        match self {
            Self::Xs => "h-6 rounded-[min(var(--radius-md),8px)] text-xs",
            Self::Sm => "h-8 rounded-[min(var(--radius-md),10px)] text-sm",
            Self::Md => "h-9 text-base",
            Self::Lg => "h-10 text-lg",
        }
    }

    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Xs => "xs",
            Self::Sm => "sm",
            Self::Md => "md",
            Self::Lg => "lg",
        }
    }
}

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum SelectTriggerIconSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl SelectTriggerIconSizeType {
    pub fn class(&self) -> &'static str {
        match self {
            Self::Xs => "size-2.5",
            Self::Sm => "size-3",
            Self::Md => "size-3.5",
            Self::Lg => "size-4",
        }
    }
}

pub fn select_trigger_variants(size: SelectTriggerSizeType, class: Option<&str>) -> String {
    cn([
        "ring-border text-foreground data-placeholder:text-muted-foreground hover:ring-ring-active hover:ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 gap-1.5 rounded ring bg-transparent py-2 pr-2 pl-2.5 transition-[color,box-shadow] focus-visible:ring aria-invalid:ring *:data-[slot=select-value]:flex *:data-[slot=select-value]:flex-1 *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer",
        size.class(),
        class.unwrap_or_default(),
    ])
}

fn icon_size_from_trigger_size(size: SelectTriggerSizeType) -> SelectTriggerIconSizeType {
    match size {
        SelectTriggerSizeType::Xs => SelectTriggerIconSizeType::Xs,
        SelectTriggerSizeType::Sm => SelectTriggerIconSizeType::Sm,
        SelectTriggerSizeType::Md => SelectTriggerIconSizeType::Md,
        SelectTriggerSizeType::Lg => SelectTriggerIconSizeType::Lg,
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct SelectTriggerProps {
    #[props(default)]
    pub size: SelectTriggerSizeType,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// The button that opens the select popup and displays the current value.
#[component]
pub fn SelectTrigger(props: SelectTriggerProps) -> Element {
    let ctx = use_context::<SelectContext>();
    let open = ctx.open;
    let set_open = ctx.set_open;
    let trigger_id = ctx.trigger_id.clone();
    let positioner_id = ctx.positioner_id.clone();
    let is_disabled = ctx.is_disabled();
    let focus_next = ctx.focus_next;
    let focus_prev = ctx.focus_prev;
    let focus_first = ctx.focus_first;
    let focus_last = ctx.focus_last;

    let icon_class = icon_size_from_trigger_size(props.size).class();

    rsx! {
        button {
            id: trigger_id,
            r#type: "button",
            "data-slot": "select-trigger",
            "data-size": props.size.as_str(),
            "aria-haspopup": "listbox",
            "aria-expanded": open().to_string(),
            "aria-controls": positioner_id,
            disabled: is_disabled,
            class: select_trigger_variants(props.size, props.class.as_deref()),
            onclick: move |_| {
                if !is_disabled {
                    set_open.call(!open());
                }
            },
            onkeydown: move |event| {
                match event.key() {
                    Key::ArrowDown => {
                        event.prevent_default();
                        if !open() {
                            set_open.call(true);
                        }
                        focus_next.call(());
                    }
                    Key::ArrowUp => {
                        event.prevent_default();
                        if !open() {
                            set_open.call(true);
                        }
                        focus_prev.call(());
                    }
                    Key::Home => {
                        event.prevent_default();
                        focus_first.call(());
                    }
                    Key::End => {
                        event.prevent_default();
                        focus_last.call(());
                    }
                    _ => {}
                }
            },
            ..props.attributes,
            {props.children}
            ChevronDownIcon {
                "data-slot": "select-trigger-icon",
                class: cn(["text-foreground pointer-events-none", icon_class]),
            }
        }
    }
}
