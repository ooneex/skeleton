use dioxus::prelude::*;

use crate::utils::cn;

/// Shared context provided by [`InputOTP`] and consumed by [`InputOTPSlot`].
#[derive(Clone, PartialEq)]
pub struct OTPContext {
    /// The current OTP value string.
    pub value: Signal<String>,
    /// Total number of slots.
    pub max_length: usize,
    /// Whether this field is focused.
    pub focused: Signal<bool>,
}

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum InputOTPSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl InputOTPSizeType {
    pub fn as_str(self) -> &'static str {
        match self {
            Self::Xs => "xs",
            Self::Sm => "sm",
            Self::Md => "md",
            Self::Lg => "lg",
        }
    }
}

pub fn input_otp_slot_variants(size: InputOTPSizeType, class: Option<&str>) -> String {
    cn([
        "relative flex items-center justify-center border-y border-r border-border bg-transparent shadow-xs transition-[color,box-shadow] outline-none first:border-l aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20",
        match size {
            InputOTPSizeType::Xs => {
                "size-6 text-xs first:rounded-l-[min(var(--radius-md),8px)] last:rounded-r-[min(var(--radius-md),8px)]"
            }
            InputOTPSizeType::Sm => {
                "size-8 text-sm first:rounded-l-[min(var(--radius-md),10px)] last:rounded-r-[min(var(--radius-md),10px)]"
            }
            InputOTPSizeType::Md => "size-9 text-base first:rounded-l last:rounded-r",
            InputOTPSizeType::Lg => "size-10 text-base first:rounded-l last:rounded-r",
        },
        class.unwrap_or_default(),
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct InputOTPProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub container_class: Option<String>,
    /// Total number of slots.
    #[props(default = 6)]
    pub max_length: usize,
    #[props(default)]
    pub value: Option<String>,
    #[props(default)]
    pub default_value: Option<String>,
    #[props(default)]
    pub on_change: Option<EventHandler<String>>,
    pub children: Element,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// One-time-password input built on a hidden native `<input>` with visual slot
/// rendering. Provides [`OTPContext`] so [`InputOTPSlot`] can read character
/// and active-slot state.
#[component]
pub fn InputOTP(props: InputOTPProps) -> Element {
    let max_length = props.max_length;

    let initial = props
        .value
        .clone()
        .or_else(|| props.default_value.clone())
        .unwrap_or_default();
    let mut otp_value = use_signal(|| initial);
    let mut focused = use_signal(|| false);

    // Sync controlled value from props.
    use_effect(move || {
        if let Some(ref v) = props.value {
            if *otp_value.peek() != *v {
                otp_value.set(v.clone());
            }
        }
    });

    use_context_provider(|| OTPContext {
        value: otp_value,
        max_length,
        focused,
    });

    let on_change = props.on_change.clone();

    rsx! {
        div {
            "data-slot": "input-otp",
            class: cn([
                "flex items-center has-disabled:opacity-50",
                props.container_class.as_deref().unwrap_or_default(),
            ]),
            // Hidden native input captures all keyboard input.
            input {
                r#type: "text",
                inputmode: "numeric",
                autocomplete: "one-time-code",
                spellcheck: false,
                maxlength: max_length as i64,
                value: "{otp_value}",
                class: cn([
                    "sr-only absolute inset-0 w-full h-full opacity-0 cursor-default",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                oninput: move |event| {
                    let raw = event.value();
                    let filtered: String = raw.chars()
                        .filter(|c| c.is_ascii_digit())
                        .take(max_length)
                        .collect();
                    otp_value.set(filtered.clone());
                    if let Some(ref cb) = on_change {
                        cb.call(filtered);
                    }
                },
                onfocus: move |_| { focused.set(true); },
                onblur: move |_| { focused.set(false); },
                ..props.attributes,
            }
            {props.children}
        }
    }
}
