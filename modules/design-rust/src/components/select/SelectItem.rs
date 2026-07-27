use dioxus::prelude::*;

use super::Select::SelectContext;
use crate::icons::outline::ui_layout::sm::CheckIcon;
use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum SelectItemSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl SelectItemSizeType {
    pub fn class(&self) -> &'static str {
        match self {
            Self::Xs => "text-xs",
            Self::Sm => "text-sm",
            Self::Md => "text-base",
            Self::Lg => "text-lg",
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
pub enum SelectItemIconSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl SelectItemIconSizeType {
    pub fn class(&self) -> &'static str {
        match self {
            Self::Xs => "size-3",
            Self::Sm => "size-3.5",
            Self::Md => "size-4",
            Self::Lg => "size-4.5",
        }
    }
}

pub fn select_item_variants(size: SelectItemSizeType, class: Option<&str>) -> String {
    cn([
        "data-highlighted:bg-accent text-foreground gap-2 rounded py-1 pr-8 pl-2 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-pointer items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        size.class(),
        class.unwrap_or_default(),
    ])
}

fn icon_size_from_item_size(size: SelectItemSizeType) -> SelectItemIconSizeType {
    match size {
        SelectItemSizeType::Xs => SelectItemIconSizeType::Xs,
        SelectItemSizeType::Sm => SelectItemIconSizeType::Sm,
        SelectItemSizeType::Md => SelectItemIconSizeType::Md,
        SelectItemSizeType::Lg => SelectItemIconSizeType::Lg,
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct SelectItemProps {
    /// The value submitted when this item is selected.
    pub value: String,
    /// Text label used for display in `SelectValue` and typeahead matching.
    /// Defaults to `value` when not provided.
    #[props(default)]
    pub label: Option<String>,
    #[props(default)]
    pub size: SelectItemSizeType,
    #[props(default = false)]
    pub disabled: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// A single selectable option within `SelectContent`. Registers itself in the
/// shared item registry so `SelectValue` can display its label and keyboard
/// navigation can find it.
#[component]
pub fn SelectItem(props: SelectItemProps) -> Element {
    let ctx = use_context::<SelectContext>();

    let value = props.value.clone();
    let label = props.label.clone().unwrap_or_else(|| props.value.clone());
    let disabled = props.disabled;

    let value_drop = value.clone();
    let mut ctx_drop = ctx.clone();
    use_drop(move || ctx_drop.unregister_item(&value_drop));

    {
        let mut ctx_mount = ctx.clone();
        let value_mount = value.clone();
        let label_mount = label.clone();
        use_effect(move || {
            ctx_mount.register_item(value_mount.clone(), label_mount.clone(), disabled);
        });
    }

    let is_selected = ctx.is_selected(&props.value);
    let is_focused = ctx.is_focused(&props.value);
    let set_value = ctx.set_value;
    let mut focused_value = ctx.focused_value;
    let item_value = props.value.clone();
    let item_value2 = props.value.clone();

    let icon_class = icon_size_from_item_size(props.size).class();

    rsx! {
        div {
            "data-slot": "select-item",
            "data-size": props.size.as_str(),
            "data-disabled": props.disabled.then_some("true"),
            "data-highlighted": is_focused.then_some("true"),
            role: "option",
            "aria-selected": is_selected.to_string(),
            class: select_item_variants(props.size, props.class.as_deref()),
            onclick: move |_| {
                if !disabled {
                    set_value.call(item_value.clone());
                }
            },
            onmouseenter: move |_| {
                if !disabled {
                    focused_value.set(Some(item_value2.clone()));
                }
            },
            ..props.attributes,
            {props.children}
            if is_selected {
                span {
                    class: "pointer-events-none absolute right-2 flex size-4 items-center justify-center",
                    CheckIcon { class: cn(["text-foreground pointer-events-none", icon_class]) }
                }
            }
        }
    }
}
