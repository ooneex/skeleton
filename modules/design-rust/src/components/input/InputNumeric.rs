use dioxus::prelude::*;

use super::Input::Input;
use crate::components::button::{Button, ButtonSizeType, ButtonVariantType};
use crate::icons::outline::ui_layout::lg::{MinusIcon as MinusIconLg, PlusIcon as PlusIconLg};
use crate::icons::outline::ui_layout::md::{MinusIcon as MinusIconMd, PlusIcon as PlusIconMd};
use crate::icons::outline::ui_layout::sm::{MinusIcon as MinusIconSm, PlusIcon as PlusIconSm};
use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum InputNumericSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl InputNumericSizeType {
    pub fn container_class(self) -> &'static str {
        match self {
            Self::Xs => "h-6",
            Self::Sm => "h-8",
            Self::Md => "h-9",
            Self::Lg => "h-10",
        }
    }

    pub fn button_size(self) -> ButtonSizeType {
        match self {
            Self::Xs => ButtonSizeType::IconXs,
            Self::Sm => ButtonSizeType::IconSm,
            Self::Md => ButtonSizeType::IconSm,
            Self::Lg => ButtonSizeType::Icon,
        }
    }

    pub fn input_class(self) -> &'static str {
        match self {
            Self::Xs => "text-xs",
            Self::Sm => "text-base",
            Self::Md => "text-base",
            Self::Lg => "text-lg",
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct InputNumericProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: InputNumericSizeType,
    #[props(default = 0)]
    pub min: i64,
    #[props(default = 100)]
    pub max: i64,
    #[props(default = 1)]
    pub step: i64,
    #[props(default = 50)]
    pub default_value: i64,
    #[props(default)]
    pub value: Option<i64>,
    #[props(default)]
    pub on_change: Option<EventHandler<i64>>,
    #[props(default)]
    pub pad: bool,
    #[props(default)]
    pub wrap: bool,
}

#[component]
pub fn InputNumeric(props: InputNumericProps) -> Element {
    let size = props.size;
    let min = props.min;
    let max = props.max;
    let step = props.step;
    let wrap = props.wrap;

    let mut internal = use_signal(|| props.default_value);
    let is_controlled = props.value.is_some();

    let current = if is_controlled {
        props.value.unwrap_or(min)
    } else {
        *internal.read()
    };

    let set_value = {
        let on_change = props.on_change.clone();
        move |v: i64| {
            if !is_controlled {
                internal.set(v);
            }
            if let Some(ref cb) = on_change {
                cb.call(v);
            }
        }
    };

    let display = if props.pad {
        format!("{:02}", current)
    } else {
        current.to_string()
    };

    let decrement = {
        let mut set_value = set_value.clone();
        move |_: MouseEvent| {
            let new_val = if wrap && current <= min {
                max
            } else {
                (current - step).max(min)
            };
            set_value(new_val);
        }
    };

    let increment = {
        let mut set_value = set_value.clone();
        move |_: MouseEvent| {
            let new_val = if wrap && current >= max {
                min
            } else {
                (current + step).min(max)
            };
            set_value(new_val);
        }
    };

    rsx! {
        div {
            class: cn(["w-full max-w-xs", props.class.as_deref().unwrap_or_default()]),
            div { class: "relative",
                div {
                    class: cn([
                        "border-border hover:border-ring-active focus-within:border-ring-active flex items-center rounded border transition-[color,box-shadow]",
                        size.container_class(),
                    ]),
                    Button {
                        variant: ButtonVariantType::Ghost,
                        size: size.button_size(),
                        onclick: decrement,
                        "aria-label": "Decrement button",
                        class: "h-full",
                        match size {
                            InputNumericSizeType::Xs => rsx! { MinusIconSm { class: "size-3" } },
                            InputNumericSizeType::Sm => rsx! { MinusIconSm { class: "size-4" } },
                            InputNumericSizeType::Md => rsx! { MinusIconMd { class: "size-4" } },
                            InputNumericSizeType::Lg => rsx! { MinusIconLg { class: "size-5" } },
                        }
                    }
                    Input {
                        r#type: "text",
                        inputmode: "numeric",
                        value: "{display}",
                        class: cn(["h-auto rounded-none bg-transparent text-center shadow-none ring-0 hover:ring-0 focus-visible:ring-0", size.input_class()]),
                        oninput: move |event: FormEvent| {
                            let raw = event.value();
                            let filtered: String = raw.chars().filter(|c| c.is_ascii_digit()).collect();
                            if filtered.is_empty() {
                                set_value.clone()(min);
                                return;
                            }
                            if let Ok(n) = filtered.parse::<i64>() {
                                let clamped = n.clamp(min, max);
                                set_value.clone()(clamped);
                            }
                        },
                    }
                    Button {
                        variant: ButtonVariantType::Ghost,
                        size: size.button_size(),
                        onclick: increment,
                        "aria-label": "Increment button",
                        class: "h-full",
                        match size {
                            InputNumericSizeType::Xs => rsx! { PlusIconSm { class: "size-3" } },
                            InputNumericSizeType::Sm => rsx! { PlusIconSm { class: "size-4" } },
                            InputNumericSizeType::Md => rsx! { PlusIconMd { class: "size-4" } },
                            InputNumericSizeType::Lg => rsx! { PlusIconLg { class: "size-5" } },
                        }
                    }
                }
            }
        }
    }
}
