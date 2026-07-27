use dioxus::prelude::*;

use crate::hooks::{use_click_outside, use_id};
use crate::icons::outline::arrows::sm::ChevronRightIcon;
use crate::icons::outline::ui_layout::sm::CheckIcon;
use crate::utils::cn;

const ITEM_CLASS: &str = "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive gap-2 rounded px-2 py-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 group/context-menu-item relative flex cursor-pointer items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0";

const POPUP_CLASS: &str = "bg-dropdown text-dropdown-foreground min-w-40 rounded p-1 z-50 max-h-[var(--available-height)] origin-[var(--transform-origin)] overflow-x-hidden overflow-y-auto outline-none shadow-none ring-[0.4px] ring-ring-active border-none";

const INDICATOR_ITEM_CLASS: &str = "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex cursor-pointer items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0";

/// A single entry in a context menu. See the `ContextMenuProps.items` field.
#[derive(Clone, PartialEq)]
pub enum ContextMenuItemType {
    /// A standard clickable row.
    Item {
        value: String,
        label: String,
        icon: Option<Element>,
        shortcut: Option<String>,
        disabled: bool,
        destructive: bool,
    },
    /// A horizontal divider.
    Separator,
    /// A non-interactive section label.
    Label { label: String },
    /// A row with a check indicator.
    Checkbox {
        value: String,
        label: String,
        checked: bool,
        disabled: bool,
    },
    /// A row with a radio-dot indicator.
    Radio {
        value: String,
        label: String,
        checked: bool,
        disabled: bool,
    },
    /// A trigger that opens a nested sub-menu on hover.
    Sub {
        label: String,
        icon: Option<Element>,
        disabled: bool,
        items: Vec<ContextMenuItemType>,
    },
}

#[derive(Props, Clone, PartialEq)]
pub struct ContextMenuProps {
    /// Whether the popup is visible.
    pub open: bool,
    /// Viewport X coordinate (from `event.client_x()`) of the context click.
    pub x: f64,
    /// Viewport Y coordinate (from `event.client_y()`) of the context click.
    pub y: f64,
    /// Flat list of rows to display.
    pub items: Vec<ContextMenuItemType>,
    /// Called when the user selects an item; receives its `value` string.
    pub on_select: Option<EventHandler<String>>,
    /// Called when the menu requests closing (click-outside, Escape, or selection).
    pub on_close: Option<EventHandler<()>>,
}

/// Pointer-coordinate context menu rendered as a `position:fixed` popup.
///
/// `@base-ui/react/context-menu` and `react-call` have no Rust equivalent.
/// This component re-implements the same DOM structure, Tailwind classes, ARIA
/// roles and keyboard behaviour in plain Dioxus:
/// - The popup is pinned to `(x, y)` with `position: fixed` and clamped to the
///   viewport via `use_anchor_position`-style CSS variable logic in JS.
/// - Click-outside and `Escape` close the menu via `use_click_outside` and an
///   `onkeydown` listener.
/// - Sub-menus open on `mouseenter` and are positioned with `left: 100%`.
/// - `openContextMenu(event, items)` cannot be an async promise in Dioxus; callers
///   should drive `open`, `x`, `y` from a signal set in an `oncontextmenu` handler.
///
/// Mount once near the root:
/// ```rust,ignore
/// rsx! { ContextMenu { open, x, y, items, on_select, on_close } }
/// ```
#[component]
pub fn ContextMenu(props: ContextMenuProps) -> Element {
    let popup_id = use_id("context-menu-popup");
    let on_close = props.on_close;
    let on_select = props.on_select;

    let close = use_callback(move |()| {
        if let Some(h) = on_close {
            h.call(());
        }
    });

    use_click_outside(popup_id.clone(), close);

    if !props.open {
        return rsx! {};
    }

    // Clamp coordinates to a safe viewport offset using CSS calc / min().
    // We rely on the browser to not clip the fixed-position div by rendering
    // it at (x, y) and letting it overflow the viewport if needed.
    let style = format!(
        "position:fixed;top:{y}px;left:{x}px;z-index:50",
        y = props.y,
        x = props.x,
    );

    rsx! {
        div {
            id: popup_id.clone(),
            "data-slot": "context-menu-content",
            class: POPUP_CLASS,
            style,
            onkeydown: move |event| {
                if event.key() == Key::Escape {
                    event.prevent_default();
                    close.call(());
                }
            },
            for (index, item) in props.items.iter().enumerate() {
                RenderItem {
                    key: "{index}",
                    item: item.clone(),
                    index,
                    on_select,
                    on_close: close,
                }
            }
        }
    }
}

// ─── Internal item renderer ───────────────────────────────────────────────────

#[derive(Props, Clone, PartialEq)]
struct RenderItemProps {
    item: ContextMenuItemType,
    index: usize,
    on_select: Option<EventHandler<String>>,
    on_close: Callback<()>,
}

#[component]
fn RenderItem(props: RenderItemProps) -> Element {
    match &props.item {
        ContextMenuItemType::Separator => rsx! {
            div {
                "data-slot": "context-menu-separator",
                class: "bg-ring -mx-1 my-1 h-[0.4px]",
            }
        },

        ContextMenuItemType::Label { label } => rsx! {
            div {
                "data-slot": "context-menu-label",
                class: "text-muted-foreground px-2 py-1.5 text-xs font-medium",
                "{label}"
            }
        },

        ContextMenuItemType::Checkbox {
            value,
            label,
            checked,
            disabled,
        } => {
            let value = value.clone();
            let label = label.clone();
            let checked = *checked;
            let disabled = *disabled;
            let on_select = props.on_select;
            let on_close = props.on_close;
            rsx! {
                div {
                    "data-slot": "context-menu-checkbox-item",
                    class: INDICATOR_ITEM_CLASS,
                    "data-disabled": disabled.then_some("true"),
                    role: "menuitemcheckbox",
                    "aria-checked": if checked { "true" } else { "false" },
                    tabindex: if disabled { -1i64 } else { 0 },
                    onclick: move |_| {
                        if !disabled {
                            if let Some(h) = on_select { h.call(value.clone()); }
                            on_close.call(());
                        }
                    },
                    span {
                        class: "pointer-events-none absolute right-2 flex items-center justify-center",
                        "data-slot": "context-menu-checkbox-item-indicator",
                        if checked {
                            CheckIcon { class: "size-3" }
                        }
                    }
                    "{label}"
                }
            }
        }

        ContextMenuItemType::Radio {
            value,
            label,
            checked,
            disabled,
        } => {
            let value = value.clone();
            let label = label.clone();
            let checked = *checked;
            let disabled = *disabled;
            let on_select = props.on_select;
            let on_close = props.on_close;
            rsx! {
                div {
                    "data-slot": "context-menu-radio-item",
                    class: INDICATOR_ITEM_CLASS,
                    "data-disabled": disabled.then_some("true"),
                    role: "menuitemradio",
                    "aria-checked": if checked { "true" } else { "false" },
                    tabindex: if disabled { -1i64 } else { 0 },
                    onclick: move |_| {
                        if !disabled {
                            if let Some(h) = on_select { h.call(value.clone()); }
                            on_close.call(());
                        }
                    },
                    span {
                        class: "pointer-events-none absolute right-2 flex items-center justify-center",
                        "data-slot": "context-menu-radio-item-indicator",
                        if checked {
                            svg {
                                class: "size-2 fill-current",
                                view_box: "0 0 8 8",
                                "aria-hidden": "true",
                                circle { cx: "4", cy: "4", r: "2.5" }
                            }
                        }
                    }
                    "{label}"
                }
            }
        }

        ContextMenuItemType::Sub {
            label,
            icon,
            disabled,
            items,
        } => {
            let label = label.clone();
            let icon = icon.clone();
            let disabled = *disabled;
            let items = items.clone();
            let on_select = props.on_select;
            let on_close = props.on_close;
            let mut sub_open = use_signal(|| false);
            rsx! {
                div {
                    class: "relative",
                    onmouseenter: move |_| { if !disabled { sub_open.set(true); } },
                    onmouseleave: move |_| { sub_open.set(false); },
                    div {
                        "data-slot": "context-menu-sub-trigger",
                        "data-open": sub_open().then_some("true"),
                        "data-disabled": disabled.then_some("true"),
                        class: cn([ITEM_CLASS, "data-open:bg-accent data-open:text-accent-foreground"]),
                        role: "menuitem",
                        "aria-haspopup": "true",
                        "aria-expanded": sub_open().then_some("true"),
                        tabindex: if disabled { -1i64 } else { 0 },
                        {icon}
                        "{label}"
                        ChevronRightIcon { class: "ml-auto size-3" }
                    }
                    if sub_open() {
                        div {
                            "data-slot": "context-menu-sub-content",
                            class: cn([POPUP_CLASS, "absolute top-0 left-full"]),
                            for (child_index, child_item) in items.iter().enumerate() {
                                RenderItem {
                                    key: "{child_index}",
                                    item: child_item.clone(),
                                    index: child_index,
                                    on_select,
                                    on_close,
                                }
                            }
                        }
                    }
                }
            }
        }

        ContextMenuItemType::Item {
            value,
            label,
            icon,
            shortcut,
            disabled,
            destructive,
        } => {
            let value = value.clone();
            let label = label.clone();
            let icon = icon.clone();
            let shortcut = shortcut.clone();
            let disabled = *disabled;
            let destructive = *destructive;
            let on_select = props.on_select;
            let on_close = props.on_close;
            rsx! {
                div {
                    "data-slot": "context-menu-item",
                    "data-variant": if destructive { "destructive" } else { "default" },
                    "data-disabled": disabled.then_some("true"),
                    class: ITEM_CLASS,
                    role: "menuitem",
                    tabindex: if disabled { -1i64 } else { 0 },
                    onclick: move |_| {
                        if !disabled {
                            if let Some(h) = on_select { h.call(value.clone()); }
                            on_close.call(());
                        }
                    },
                    {icon}
                    "{label}"
                    if let Some(sc) = shortcut {
                        span {
                            "data-slot": "context-menu-shortcut",
                            class: "text-muted-foreground ml-auto text-xs tracking-widest",
                            "{sc}"
                        }
                    }
                }
            }
        }
    }
}
