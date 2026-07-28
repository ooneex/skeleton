use dioxus::prelude::*;

use crate::components::button::{Button, ButtonVariantType};
use crate::icons::outline::ui_layout::sm::{CheckIcon, CircleMinusIcon};
use crate::utils::cn;

/// 26 simple colors inlined from `@ooneex/color`.
pub const SIMPLE_COLORS: &[(&str, &str)] = &[
    ("#3B82F6", "Blue"),
    ("#10B981", "Green"),
    ("#8B5CF6", "Purple"),
    ("#F59E0B", "Yellow"),
    ("#EC4899", "Pink"),
    ("#F97316", "Orange"),
    ("#6B7280", "Gray"),
    ("#EF4444", "Red"),
    ("#14B8A6", "Teal"),
    ("#6366F1", "Indigo"),
    ("#84CC16", "Lime"),
    ("#06B6D4", "Cyan"),
    ("#A855F7", "Violet"),
    ("#F43F5E", "Rose"),
    ("#78716C", "Stone"),
    ("#0EA5E9", "Sky"),
    ("#22C55E", "Emerald"),
    ("#FACC15", "Amber"),
    ("#E879F9", "Fuchsia"),
    ("#2DD4BF", "Aqua"),
    ("#FB923C", "Peach"),
    ("#818CF8", "Lavender"),
    ("#F472B6", "Flamingo"),
    ("#4ADE80", "Mint"),
    ("#000000", "Black"),
    ("#FFFFFF", "White"),
];

#[derive(Props, Clone, PartialEq)]
pub struct SimpleColorPickerProps {
    /// Title shown above the swatch grid.
    #[props(default)]
    pub title: Option<String>,
    /// Currently selected color hex.
    #[props(default)]
    pub value: Option<String>,
    /// Callback when a color is picked (Some) or Reset is pressed (None).
    pub on_pick: EventHandler<Option<String>>,
    #[props(default)]
    pub class: Option<String>,
}

/// Inline color picker grid. Pass `on_pick` to receive the chosen hex string,
/// or `None` when Reset is pressed.
///
/// The TS original uses `createDialog` (react-call) for an imperative async
/// `await pickColor()`. In this Rust port `SimpleColorPicker` is a controlled
/// inline component; the caller manages its open state.
#[component]
pub fn SimpleColorPicker(props: SimpleColorPickerProps) -> Element {
    let current = props.value.clone().unwrap_or_default();
    rsx! {
        div {
            "data-slot": "simple-color-picker",
            class: cn(["flex flex-col gap-3", props.class.as_deref().unwrap_or_default()]),
            if let Some(ref title) = props.title {
                div { class: "text-sm font-semibold", "{title}" }
            }
            div {
                class: "grid gap-2",
                style: "grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));",
                for (hex, name) in SIMPLE_COLORS {
                    button {
                        key: "{hex}",
                        r#type: "button",
                        title: *name,
                        class: cn([
                            "size-8 rounded-full cursor-pointer transition-all flex items-center justify-center motion-safe:hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                            if *hex == current.as_str() { "ring-2 ring-primary ring-offset-2 ring-offset-background" } else { "" },
                            if *hex == "#FFFFFF" && *hex != current.as_str() { "ring ring-ring-active" } else { "" },
                        ]),
                        style: "background-color: {hex};",
                        onclick: {
                            let on_pick = props.on_pick;
                            let hex = *hex;
                            move |_| { on_pick.call(Some(hex.to_string())); }
                        },
                        if *hex == current.as_str() {
                            CheckIcon { class: "size-4 text-white drop-shadow-sm" }
                        }
                    }
                }
            }
            Button {
                variant: ButtonVariantType::Ghost,
                class: "w-full",
                onclick: move |_| { props.on_pick.call(None); },
                CircleMinusIcon { class: "size-6" }
                "Reset"
            }
        }
    }
}
