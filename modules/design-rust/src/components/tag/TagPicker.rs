#![allow(non_snake_case)]

use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::{Arc, Mutex};
use std::task::{Poll, Waker};

use dioxus::prelude::*;

use crate::components::button::Button;
use crate::components::combobox::comboboxContext::ComboboxContext;
use crate::components::combobox::{
    Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty,
    ComboboxItem, ComboboxList,
};
use crate::components::dialog::{DialogContent, DialogHeader, DialogTitle};
use crate::icons::outline::shopping::sm::TagIcon;
use crate::icons::outline::ui_layout::sm::PlusIcon;
use crate::utils::cn;

/// Delay before the typed text is applied to the suggestion filter, matching
/// the `useDebouncedValue(inputValue, { wait: 300 })` of the TS original.
const FILTER_DEBOUNCE_MS: u64 = 300;

/// Size scale of the tag picker, shared by the chips container and the leading
/// tag icon.
#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum TagPickerSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl TagPickerSizeType {
    /// Height, padding and text scale of the chips container.
    pub fn class(&self) -> &'static str {
        match self {
            Self::Xs => "min-h-6 px-2 py-0.5 text-xs",
            Self::Sm => "min-h-8 px-2.5 py-1 text-sm",
            Self::Md => "min-h-9 px-2.5 py-1 text-base",
            Self::Lg => "min-h-10 px-3 py-1.5 text-base",
        }
    }

    /// Size of the leading tag icon and of the create-option icon.
    pub fn icon_class(&self) -> &'static str {
        match self {
            Self::Xs => "size-3",
            Self::Sm => "size-3.5",
            Self::Md => "size-4",
            Self::Lg => "size-4.5",
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

/// Classes of the chips container — the Rust counterpart of
/// `tagPickerChipsVariants`.
pub fn tag_picker_chips_variants(size: TagPickerSizeType, class: Option<&str>) -> String {
    cn([
        "flex-wrap items-center gap-1.5",
        size.class(),
        class.unwrap_or_default(),
    ])
}

/// Classes of the leading tag icon — the Rust counterpart of
/// `tagPickerIconVariants`.
pub fn tag_picker_icon_variants(size: TagPickerSizeType, class: Option<&str>) -> String {
    cn([
        "text-foreground pointer-events-none shrink-0",
        size.icon_class(),
        class.unwrap_or_default(),
    ])
}

/// State shared between [`TagPicker`] and its internal field tree. The React
/// version keeps this in `useState`/`useMemo` inside a single component; the
/// Rust port splits the tree in two so the fields can read the combobox
/// context, so the shared pieces travel through a Dioxus context instead.
#[derive(Clone, Copy)]
struct TagPickerContext {
    /// Tags offered as suggestions, mirrored from the props.
    suggested_tags: Signal<Vec<String>>,
    /// Tags created from the input during this session.
    custom_tags: Signal<Vec<String>>,
    /// Debounced copy of the input text — drives the suggestion filter.
    debounced_input: Signal<String>,
    /// Selected tags, mirrored out of the combobox context so the confirm
    /// button (rendered outside the combobox) can read them.
    selected: Signal<Vec<String>>,
    /// Whether tags may be created from free text.
    allow_create: Signal<bool>,
}

/// Suggestions matching `query`, followed by every selected tag missing from
/// that list — the Rust counterpart of the `filteredTags` memo.
fn visible_tags(all: &[String], query: &str, selected: &[String]) -> Vec<String> {
    let needle = query.to_lowercase();

    let mut tags: Vec<String> = if query.trim().is_empty() {
        all.to_vec()
    } else {
        all.iter()
            .filter(|tag| tag.to_lowercase().contains(&needle))
            .cloned()
            .collect()
    };

    let missing: Vec<String> = selected
        .iter()
        .filter(|tag| !tags.contains(tag))
        .cloned()
        .collect();

    tags.extend(missing);
    tags
}

/// Whether the "Create …" option is offered — the Rust counterpart of the
/// `showCreateOption` memo.
fn can_create(allow_create: bool, query: &str, all: &[String], selected: &[String]) -> bool {
    if !allow_create || query.trim().is_empty() {
        return false;
    }

    let needle = query.to_lowercase();
    let exists = |tags: &[String]| tags.iter().any(|tag| tag.to_lowercase() == needle);

    !exists(all) && !exists(selected)
}

#[derive(Props, Clone, PartialEq)]
pub struct TagPickerProps {
    /// Initially selected tags.
    #[props(default)]
    pub value: Vec<String>,
    /// Tags offered as suggestions.
    #[props(default)]
    pub suggested_tags: Vec<String>,
    /// Allow creating new tags from the input. Defaults to `true`.
    #[props(default = true)]
    pub allow_create: bool,
    /// Placeholder of the tag input. Defaults to `"Add tags..."`.
    #[props(default)]
    pub placeholder: Option<String>,
    /// Renders the "Loading tags…" state instead of the suggestion list.
    #[props(default = false)]
    pub is_pending: bool,
    /// Heading shown above the tag input.
    #[props(default)]
    pub title: Option<Element>,
    /// Extra classes for the chips container — like the TS `className`, this
    /// lands on the chips row and not on the root.
    #[props(default)]
    pub class: Option<String>,
    /// Extra classes for the suggestion popup.
    #[props(default)]
    pub content_class: Option<String>,
    /// Label of the confirm button. Defaults to `"Done"`.
    #[props(default)]
    pub confirm_label: Option<Element>,
    #[props(default)]
    pub size: TagPickerSizeType,
    /// Opens the suggestion popup on first render. Not in the TS original,
    /// where the popup opens on focus; exposed here so the popup can also be
    /// opened declaratively.
    #[props(default = false)]
    pub default_open: bool,
    /// Pre-fills the search text, and therefore the suggestion filter. Not in
    /// the TS original, where the input always starts empty.
    #[props(default)]
    pub default_input_value: Option<String>,
    /// Called with the full selection whenever a tag is added or removed.
    pub on_value_change: Option<EventHandler<Vec<String>>>,
    /// Called with the chosen tags when the confirm button is pressed — the
    /// declarative counterpart of `call.end(selected)`.
    pub on_confirm: Option<EventHandler<Vec<String>>>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Multi-select tag input: pick from a suggestion list, create tags from free
/// text, remove them from their chip or with Backspace, then confirm.
///
/// ```rust,ignore
/// rsx! {
///     TagPicker {
///         value: vec!["rust".to_string()],
///         suggested_tags: vec!["rust".to_string(), "dioxus".to_string()],
///         on_confirm: move |tags: Vec<String>| { /* save tags */ },
///     }
/// }
/// ```
///
/// # Dioxus port notes
///
/// * The TS original is wrapped in `createDialog` (react-call) and is only
///   reachable through `await pickTags(...)`. This port renders the picker
///   inline — the same choice made by `SimpleColorPicker` and `StatusPicker` —
///   and keeps the imperative API available through [`pick_tags`], which
///   renders this component inside a dialog. The returned fragment of the TS
///   version becomes a `data-slot="tag-picker"` root so class overrides and the
///   attribute spread have an element to land on.
/// * `multiple` and `autoHighlight` are Base UI combobox features with no Rust
///   counterpart: multi-selection, the "keep the popup open while picking"
///   behaviour, Backspace-removes-the-last-tag and Arrow/Enter navigation are
///   implemented here on top of `ComboboxContext`.
/// * `ComboboxValue` cannot take a render prop in Rust, so the chips are
///   rendered directly inside `ComboboxChips`.
/// * The popup is anchored by the `relative` combobox root instead of the
///   `useComboboxAnchor` ref, which the Rust `ComboboxContent` does not take.
#[component]
pub fn TagPicker(props: TagPickerProps) -> Element {
    let selected = use_signal(|| props.value.clone());
    let mut last_reported = use_signal(|| props.value.clone());
    let mut suggested_tags = use_signal(|| props.suggested_tags.clone());
    let custom_tags = use_signal(Vec::<String>::new);
    let mut allow_create = use_signal(|| props.allow_create);
    let mut debounced_input = use_signal(|| props.default_input_value.clone().unwrap_or_default());
    let mut input_generation = use_signal(|| 0usize);

    let incoming_suggested = props.suggested_tags.clone();
    let incoming_allow_create = props.allow_create;
    use_effect(use_reactive!(|(
        incoming_suggested,
        incoming_allow_create,
    )| {
        suggested_tags.set(incoming_suggested);
        allow_create.set(incoming_allow_create);
    }));

    let on_value_change = props.on_value_change;
    use_effect(move || {
        let current = selected.read().clone();

        if current == *last_reported.peek() {
            return;
        }

        last_reported.set(current.clone());

        if let Some(handler) = on_value_change {
            handler.call(current);
        }
    });

    use_context_provider(|| TagPickerContext {
        suggested_tags,
        custom_tags,
        debounced_input,
        selected,
        allow_create,
    });

    // Debounce the typed text before it reaches the filter. Dioxus ships no
    // timer of its own, so the wait is a `setTimeout` driven through `eval`
    // (the same trick the dialog and drawer roots use for their exit delay);
    // when no JavaScript runtime is available the await fails immediately and
    // the filter simply updates without the delay.
    let debounce_filter = use_callback(move |value: String| {
        let generation = input_generation.peek().wrapping_add(1);
        input_generation.set(generation);

        spawn(async move {
            let mut timer = dioxus::document::eval(&format!(
                "await new Promise((resolve) => setTimeout(resolve, {FILTER_DEBOUNCE_MS})); dioxus.send(true);"
            ));
            let _ = timer.recv::<bool>().await;

            if *input_generation.peek() == generation {
                debounced_input.set(value);
            }
        });
    });

    let on_confirm = props.on_confirm;
    let confirm = move |_| {
        if let Some(handler) = on_confirm {
            handler.call(selected.read().clone());
        }
    };

    rsx! {
        div {
            "data-slot": "tag-picker",
            "data-size": props.size.as_str(),
            class: "grid gap-6",
            ..props.attributes,
            if let Some(title) = props.title {
                DialogHeader {
                    DialogTitle { {title} }
                }
            }
            Combobox {
                default_open: props.default_open,
                on_input_value_change: move |value: String| debounce_filter.call(value),
                TagPickerFields {
                    size: props.size,
                    class: props.class.clone(),
                    content_class: props.content_class.clone(),
                    placeholder: props
                        .placeholder
                        .clone()
                        .unwrap_or_else(|| "Add tags...".to_string()),
                    is_pending: props.is_pending,
                }
            }
            Button { class: "w-full", onclick: confirm,
                if let Some(label) = props.confirm_label {
                    {label}
                } else {
                    "Done"
                }
            }
        }
    }
}

#[derive(Props, Clone, PartialEq)]
struct TagPickerFieldsProps {
    size: TagPickerSizeType,
    class: Option<String>,
    content_class: Option<String>,
    placeholder: String,
    is_pending: bool,
}

/// Chips row and suggestion popup. Lives below [`Combobox`] so it can read the
/// combobox context, which owns the selection, the input text and the open
/// state of the popup.
#[component]
fn TagPickerFields(props: TagPickerFieldsProps) -> Element {
    let ctx = use_context::<ComboboxContext>();
    let tag_ctx = use_context::<TagPickerContext>();

    let mut selected = tag_ctx.selected;
    let mut custom_tags = tag_ctx.custom_tags;
    let mut debounced_input = tag_ctx.debounced_input;

    // The Rust combobox root only seeds a single value, so the initially
    // selected tags are pushed into its context on the first render.
    let mut seeded_value = ctx.value;
    let mut seeded_input = ctx.input_value;
    use_hook(move || {
        let initial = selected.peek().clone();

        if !initial.is_empty() {
            seeded_value.set(initial);
        }

        let draft = debounced_input.peek().clone();

        if !draft.is_empty() {
            seeded_input.set(draft);
        }
    });

    // The combobox context is the source of truth: chips remove themselves
    // from it and items toggle themselves in it, so the selection is mirrored
    // back up rather than pushed down.
    let value_signal = ctx.value;
    use_effect(move || {
        let current = value_signal.read().clone();

        if current != *selected.peek() {
            selected.set(current);
        }
    });

    let selection = ctx.value.read().clone();
    let query = debounced_input.read().clone();
    let mut all_tags = tag_ctx.suggested_tags.read().clone();
    all_tags.extend(custom_tags.read().iter().cloned());

    let tags = visible_tags(&all_tags, &query, &selection);
    let show_create = can_create(*tag_ctx.allow_create.read(), &query, &all_tags, &selection);
    let draft = ctx.input_value.read().trim().to_string();

    let create_ctx = ctx.clone();
    let create_tag = use_callback(move |()| {
        let mut ctx = create_ctx.clone();
        let new_tag = ctx.input_value.peek().trim().to_string();

        if new_tag.is_empty() {
            return;
        }

        custom_tags.write().push(new_tag.clone());
        ctx.value.write().push(new_tag);
        ctx.input_value.set(String::new());
        debounced_input.set(String::new());
    });

    let mut keys_ctx = ctx.clone();
    let navigable = tags.clone();
    let handle_keydown = move |event: KeyboardEvent| {
        match event.key() {
            // Base UI removes the last chip when Backspace is pressed on an
            // empty input; reimplemented here.
            Key::Backspace => {
                if keys_ctx.input_value.peek().is_empty() {
                    keys_ctx.value.write().pop();
                }
            }
            Key::Enter => {
                event.prevent_default();

                if show_create {
                    create_tag.call(());
                    return;
                }

                let highlighted = keys_ctx.highlighted_value.peek().clone();
                let target = navigable
                    .iter()
                    .find(|tag| **tag == highlighted)
                    .or_else(|| navigable.first())
                    .cloned();

                if let Some(target) = target {
                    keys_ctx.toggle_value(target);
                    keys_ctx.open.set(true);
                }
            }
            Key::Escape => keys_ctx.open.set(false),
            Key::ArrowDown | Key::ArrowUp => {
                event.prevent_default();
                keys_ctx.open.set(true);

                if navigable.is_empty() {
                    return;
                }

                let forward = event.key() == Key::ArrowDown;
                let last = navigable.len() - 1;
                let highlighted = keys_ctx.highlighted_value.peek().clone();
                let current = navigable.iter().position(|tag| *tag == highlighted);

                let index = match (current, forward) {
                    (Some(current), true) if current == last => 0,
                    (Some(current), true) => current + 1,
                    (Some(0), false) => last,
                    (Some(current), false) => current - 1,
                    (None, true) => 0,
                    (None, false) => last,
                };

                keys_ctx.highlighted_value.set(navigable[index].clone());
            }
            _ => keys_ctx.open.set(true),
        }
    };

    let mut focus_ctx = ctx.clone();
    let mut reopen_ctx = ctx.clone();

    rsx! {
        // Dioxus components only accept the attributes their props declare, so
        // the keyboard and pointer behaviour of the tag field is bound to a
        // wrapper element and reaches the combobox parts by bubbling. Opening
        // the popup on a click also covers selecting an item: items close the
        // popup on select — the single-select behaviour of the Rust combobox —
        // while tag picking is multi-select and keeps it open.
        div {
            "data-slot": "tag-picker-field",
            onfocusin: move |_| focus_ctx.open.set(true),
            onclick: move |_| reopen_ctx.open.set(true),
            onkeydown: handle_keydown,
            ComboboxChips {
                class: tag_picker_chips_variants(props.size, props.class.as_deref()),
                for tag in selection.iter() {
                    ComboboxChip { key: "{tag}", value: "{tag}", "{tag}" }
                }
                // `ComboboxChipsInput` declares a `placeholder` prop but never
                // renders it, so the attribute is spread onto the input.
                ComboboxChipsInput { "placeholder": "{props.placeholder}" }
                TagIcon { class: tag_picker_icon_variants(props.size, None) }
            }
            if props.is_pending || !tags.is_empty() || show_create {
                ComboboxContent {
                    class: props.content_class.clone().unwrap_or_default(),
                    if props.is_pending {
                        ComboboxEmpty { "Loading tags…" }
                    }
                    if !props.is_pending && show_create {
                        button {
                            r#type: "button",
                            "data-slot": "tag-picker-create",
                            class: "flex w-[calc(100%-0.5rem)] items-center gap-2 px-2 py-1.5 text-sm cursor-pointer hover:bg-accent rounded mx-1 mt-1",
                            onclick: move |_| create_tag.call(()),
                            PlusIcon { class: tag_picker_icon_variants(props.size, None) }
                            span { class: "text-sm",
                                "Create \""
                                span { class: "text-sm font-medium", "{draft}" }
                                "\""
                            }
                        }
                    }
                    if !props.is_pending && !show_create {
                        ComboboxEmpty { "No matching tags" }
                    }
                    ComboboxList {
                        for tag in tags.iter() {
                            ComboboxItem { key: "{tag}", value: "{tag}", "{tag}" }
                        }
                    }
                }
            }
        }
    }
}

static NEXT_TAG_PICKER_ID: AtomicUsize = AtomicUsize::new(0);

/// Properties of an imperative [`pick_tags`] call. Mirrors the TS
/// `TagPickerPropsType`, minus the `ReactNode` fields — a call crosses an async
/// boundary, which RSX nodes cannot, so `title` and `confirm_label` are plain
/// strings here.
#[derive(Clone, Default, PartialEq)]
pub struct TagPickerCallPropsType {
    /// Initially selected tags.
    pub value: Vec<String>,
    /// Tags offered as suggestions.
    pub suggested_tags: Vec<String>,
    /// Allow creating new tags from the input. Defaults to `true`.
    pub allow_create: Option<bool>,
    pub placeholder: Option<String>,
    pub is_pending: Option<bool>,
    /// Heading shown above the tag input.
    pub title: Option<String>,
    pub class: Option<String>,
    pub content_class: Option<String>,
    pub confirm_label: Option<String>,
    pub size: Option<TagPickerSizeType>,
}

#[derive(Clone)]
struct TagPickerEntry {
    id: usize,
    props: TagPickerCallPropsType,
    open: bool,
    result_slot: Arc<Mutex<Option<Option<Vec<String>>>>>,
    waker_slot: Arc<Mutex<Option<Waker>>>,
}

impl PartialEq for TagPickerEntry {
    fn eq(&self, other: &Self) -> bool {
        self.id == other.id
    }
}

static TAG_PICKER_STORE: GlobalSignal<Vec<TagPickerEntry>> = GlobalSignal::new(Vec::new);

fn resolve_tags(id: usize, tags: Option<Vec<String>>) {
    {
        let mut store = TAG_PICKER_STORE.write();

        if let Some(entry) = store.iter_mut().find(|entry| entry.id == id) {
            entry.open = false;
            *entry.result_slot.lock().unwrap() = Some(tags);

            if let Some(waker) = entry.waker_slot.lock().unwrap().take() {
                waker.wake();
            }
        }
    }

    spawn(async move {
        let mut timer = dioxus::document::eval(
            "await new Promise((resolve) => setTimeout(resolve, 200)); dioxus.send(true);",
        );
        timer.recv::<bool>().await.ok();
        TAG_PICKER_STORE.write().retain(|entry| entry.id != id);
    });
}

/// Await a tag selection. Resolves the chosen tags, or `None` when the dialog
/// is dismissed — the Rust counterpart of `pickTags`.
///
/// Mount [`TagPickerRoot`] once near the top of the app, then call this from
/// anywhere:
///
/// ```rust,ignore
/// spawn(async move {
///     if let Some(tags) = pick_tags(TagPickerCallPropsType {
///         value: current.clone(),
///         suggested_tags: suggestions.clone(),
///         ..Default::default()
///     })
///     .await
///     {
///         api.update(tags).await;
///     }
/// });
/// ```
///
/// # Dioxus port note
///
/// `pickTags` is `TagPicker.call(props)`: in React the component doubles as the
/// mount point of the imperative API. A Dioxus component cannot both take props
/// and serve calls, so the mount point is the separate [`TagPickerRoot`]
/// component. The promise itself is kept — this is an `async fn` resolving
/// `Option<Vec<String>>` where the TS version resolves `string[] | null`,
/// following the `confirm` / `alert` helpers of the dialog module.
pub async fn pick_tags(props: TagPickerCallPropsType) -> Option<Vec<String>> {
    let id = NEXT_TAG_PICKER_ID.fetch_add(1, Ordering::Relaxed);
    let result_slot = Arc::new(Mutex::new(None::<Option<Vec<String>>>));
    let waker_slot = Arc::new(Mutex::new(None::<Waker>));

    TAG_PICKER_STORE.write().push(TagPickerEntry {
        id,
        props,
        open: true,
        result_slot: Arc::clone(&result_slot),
        waker_slot: Arc::clone(&waker_slot),
    });

    let result_for_poll = Arc::clone(&result_slot);
    let waker_for_poll = Arc::clone(&waker_slot);

    std::future::poll_fn(move |cx| {
        *waker_for_poll.lock().unwrap() = Some(cx.waker().clone());

        match result_for_poll.lock().unwrap().take() {
            Some(tags) => Poll::Ready(tags),
            None => Poll::Pending,
        }
    })
    .await
}

/// Root mount point for imperative [`pick_tags`] calls. Render it once near the
/// top of the app:
///
/// ```rust,ignore
/// TagPickerRoot {}
/// ```
#[component]
pub fn TagPickerRoot() -> Element {
    let store = TAG_PICKER_STORE.read();

    rsx! {
        for entry in store.iter() {
            TagPickerCall { entry: entry.clone(), key: "{entry.id}" }
        }
    }
}

#[derive(Props, Clone, PartialEq)]
struct TagPickerCallProps {
    entry: TagPickerEntry,
}

#[component]
fn TagPickerCall(props: TagPickerCallProps) -> Element {
    let entry = props.entry.clone();
    let id = entry.id;
    let call = entry.props.clone();

    rsx! {
        DialogContent {
            open: entry.open,
            class: "max-w-md",
            on_dismiss: move |()| resolve_tags(id, None),
            TagPicker {
                value: call.value.clone(),
                suggested_tags: call.suggested_tags.clone(),
                allow_create: call.allow_create.unwrap_or(true),
                placeholder: call.placeholder.clone(),
                is_pending: call.is_pending.unwrap_or(false),
                title: call.title.as_ref().map(|title| rsx! { "{title}" }),
                class: call.class.clone(),
                content_class: call.content_class.clone(),
                confirm_label: call.confirm_label.as_ref().map(|label| rsx! { "{label}" }),
                size: call.size.unwrap_or_default(),
                on_confirm: move |tags| resolve_tags(id, Some(tags)),
            }
        }
    }
}
