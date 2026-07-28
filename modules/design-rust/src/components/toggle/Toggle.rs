use dioxus::prelude::*;

use crate::hooks::use_controlled_state;
use crate::utils::cn;

/// Visual style variants for [`Toggle`].
#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum ToggleVariantType {
    #[default]
    Default,
    Outline,
}

impl ToggleVariantType {
    fn class(self) -> &'static str {
        match self {
            Self::Default => "bg-transparent",
            Self::Outline => "border-border hover:bg-muted border bg-transparent shadow-xs",
        }
    }
}

/// Size variants for [`Toggle`].
#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum ToggleSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl ToggleSizeType {
    fn class(self) -> &'static str {
        match self {
            Self::Xs => "h-6 min-w-6 px-1",
            Self::Sm => "h-8 min-w-8 px-1.5",
            Self::Md => "h-9 min-w-9 px-2",
            Self::Lg => "h-10 min-w-10 px-2.5",
        }
    }
}

/// Computes the Tailwind class string for the toggle button, merging variant,
/// size, and any additional `class` provided by the caller.
pub fn toggle_variants(
    variant: ToggleVariantType,
    size: ToggleSizeType,
    class: Option<&str>,
) -> String {
    cn([
        "hover:text-foreground aria-pressed:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive gap-1 rounded text-sm font-medium transition-[color,box-shadow] [&_svg:not([class*='size-'])]:size-4 group/toggle hover:bg-muted inline-flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer",
        variant.class(),
        size.class(),
        class.unwrap_or_default(),
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct ToggleProps {
    /// Controlled pressed state. When set the toggle mirrors it and reports
    /// every change through `on_pressed_change`.
    #[props(default)]
    pub pressed: Option<bool>,
    /// Initial pressed state for uncontrolled usage.
    #[props(default)]
    pub default_pressed: Option<bool>,
    /// Called with the new pressed state whenever the toggle is activated.
    pub on_pressed_change: Option<EventHandler<bool>>,
    /// Visual variant. Defaults to `Default`.
    #[props(default)]
    pub variant: Option<ToggleVariantType>,
    /// Visual size. Defaults to `Sm`.
    #[props(default)]
    pub size: Option<ToggleSizeType>,
    #[props(default = false)]
    pub disabled: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn Toggle(props: ToggleProps) -> Element {
    let variant = props.variant.unwrap_or_default();
    let size = props.size.unwrap_or_default();
    let is_disabled = props.disabled;

    let (pressed, set_pressed) = use_controlled_state(
        props.pressed,
        props.default_pressed.unwrap_or(false),
        props.on_pressed_change,
    );

    let is_pressed = *pressed.read();

    rsx! {
        button {
            r#type: "button",
            "data-slot": "toggle",
            "aria-pressed": if is_pressed { "true" } else { "false" },
            "data-disabled": is_disabled.then_some("true"),
            disabled: is_disabled,
            class: toggle_variants(variant, size, props.class.as_deref()),
            onclick: move |_| {
                if !is_disabled {
                    set_pressed.call(!*pressed.peek());
                }
            },
            onkeydown: move |event| {
                if let Key::Character(ref c) = event.key() && c == " " {
                    event.prevent_default();
                    if !is_disabled {
                        set_pressed.call(!*pressed.peek());
                    }
                }
            },
            ..props.attributes,
            {props.children}
        }
    }
}
