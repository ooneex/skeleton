use dioxus::prelude::*;

use super::InputOTP::{InputOTPSizeType, OTPContext, input_otp_slot_variants};

#[derive(Props, Clone, PartialEq)]
pub struct InputOTPSlotProps {
    /// Zero-based slot index.
    pub index: usize,
    #[props(default)]
    pub size: InputOTPSizeType,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InputOTPSlot(props: InputOTPSlotProps) -> Element {
    let ctx = use_context::<OTPContext>();
    let value = ctx.value.read();
    let focused = *ctx.focused.read();

    let chars: Vec<char> = value.chars().collect();
    let char_at = chars.get(props.index).copied();
    let char_str = char_at.map(|c| c.to_string()).unwrap_or_default();

    // Active slot = first position without a character when focused
    let cursor_pos = chars.len().min(ctx.max_length - 1);
    let is_active = focused && props.index == cursor_pos && char_at.is_none()
        || focused && props.index == cursor_pos;

    // Show fake caret on the active empty slot
    let has_fake_caret = is_active && char_at.is_none();

    rsx! {
        div {
            "data-slot": "input-otp-slot",
            "data-active": if is_active { "true" } else { "false" },
            class: input_otp_slot_variants(props.size, props.class.as_deref()),
            ..props.attributes,
            {char_str}
            if has_fake_caret {
                div {
                    class: "pointer-events-none absolute inset-0 flex items-center justify-center",
                    div { class: "input-otp-caret h-4 w-px bg-foreground" }
                }
            }
        }
    }
}
