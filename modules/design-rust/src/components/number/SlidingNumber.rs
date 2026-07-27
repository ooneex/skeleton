use dioxus::prelude::*;

use crate::utils::cn;

/// A single animated digit column. Shows digits 0–9 stacked vertically and
/// translates in Y so the target digit is centred in the visible slot.
///
/// The spring animation from `motion/react` is approximated with a CSS
/// `transition: transform 0.25s cubic-bezier(0.2, 0, 0, 1)`.
/// `1em` is used as the digit row height (valid because `leading-none` + `tabular-nums`
/// means every digit is exactly one font-size tall).
#[component]
fn Digit(value: i64, place: i64) -> Element {
    let digit_value = (value / place).rem_euclid(10) as i32;

    rsx! {
        div {
            class: "relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums",
            div { class: "invisible", "0" }
            for i in 0..10i32 {
                {
                    let offset = (10 + i - digit_value).rem_euclid(10);
                    // choose the shortest path: if offset > 5, go the other way
                    let y: f64 = if offset > 5 { f64::from(offset) - 10.0 } else { f64::from(offset) };
                    rsx! {
                        span {
                            key: "{i}",
                            class: "absolute inset-0 flex items-center justify-center",
                            style: format!(
                                "transform: translateY({y}em); transition: transform 0.25s cubic-bezier(0.2, 0, 0, 1)",
                            ),
                            "{i}"
                        }
                    }
                }
            }
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct SlidingNumberProps {
    /// The numeric value to display.
    pub value: f64,
    /// Pad single-digit integers with a leading zero.
    #[props(default = false)]
    pub pad_start: bool,
    /// Character rendered between the integer and decimal parts.
    #[props(default = ".".to_string())]
    pub decimal_separator: String,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Animated digit display that rolls each digit column independently when the
/// value changes, matching the `motion/react`-based `SlidingNumber` component.
#[component]
pub fn SlidingNumber(props: SlidingNumberProps) -> Element {
    let abs_value = props.value.abs();
    let int_part = abs_value.trunc() as i64;
    let frac_str = {
        let s = format!("{abs_value}");
        s.split_once('.').map(|(_, f)| f.to_string())
    };

    let int_str = int_part.to_string();
    let padded_str = if props.pad_start && int_part < 10 {
        format!("0{int_str}")
    } else {
        int_str
    };

    let int_places: Vec<i64> = (0..padded_str.len() as u32)
        .map(|i| 10i64.pow(padded_str.len() as u32 - i - 1))
        .collect();

    rsx! {
        div {
            "data-slot": "sliding-number",
            class: cn(["flex items-center", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            if props.value < 0.0 {
                span { "-" }
            }
            for place in &int_places {
                Digit { key: "pos-{place}", value: int_part, place: *place }
            }
            if let Some(frac) = frac_str {
                span { "{props.decimal_separator}" }
                for (index, _) in frac.chars().enumerate() {
                    {
                        let frac_val: i64 = frac.parse().unwrap_or(0);
                        let place = 10i64.pow((frac.len() - index - 1) as u32);
                        rsx! {
                            Digit { key: "decimal-{index}", value: frac_val, place }
                        }
                    }
                }
            }
        }
    }
}
