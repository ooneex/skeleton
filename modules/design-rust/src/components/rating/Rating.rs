use std::rc::Rc;

use dioxus::prelude::*;

use crate::icons::outline::holidays::sm::StarIcon;
use crate::utils::cn;

const DEFAULT_FILL_CLASS: &str = "text-yellow-500 fill-yellow-500";
const DEFAULT_EMPTY_CLASS: &str = "text-muted";

const DEFAULT_EMOJIS: &[&str] = &["😡", "😟", "😐", "😊", "😍"];
const SPARKLE_COLORS: &[&str] = &["#F778BA", "#63D2F2", "#F9DD70", "#A57BF1", "#72E8A4"];
const PARTICLE_COUNT: usize = 12;

/// Color pair used for filled and empty icon states.
#[derive(Clone, PartialEq)]
pub struct RatingColorsType {
    pub fill: String,
    pub empty: String,
}

impl Default for RatingColorsType {
    fn default() -> Self {
        Self {
            fill: DEFAULT_FILL_CLASS.to_string(),
            empty: DEFAULT_EMPTY_CLASS.to_string(),
        }
    }
}

/// Visual style variant of the rating control.
#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum RatingVariantType {
    #[default]
    Star,
    Gradient,
    Text,
    Emoji,
}

/// Position of a burst-sparkle animation relative to the container.
#[derive(Clone, Copy, PartialEq)]
struct ClickPositionType {
    top: f64,
    left: f64,
}

#[derive(Props, Clone, PartialEq)]
pub struct RatingProps {
    /// Current rating value (1 = first star, `count` = last star, 0 = none).
    pub value: f64,
    /// Called with the new value when the user selects a rating.
    pub on_value_change: Option<EventHandler<f64>>,
    /// Number of rating steps. Defaults to 5.
    #[props(default = 5usize)]
    pub count: usize,
    /// Prevents interaction; the rating is display-only.
    #[props(default = false)]
    pub read_only: bool,
    /// Fully disables interaction and reduces opacity.
    #[props(default = false)]
    pub disabled: bool,
    /// Visual style variant.
    #[props(default)]
    pub variant: RatingVariantType,
    /// Icon fill and empty class names.
    #[props(default)]
    pub colors: Option<RatingColorsType>,
    /// Labels for the `text` variant (defaults to "1" … `count`).
    #[props(default)]
    pub labels: Option<Vec<String>>,
    /// Emoji characters for the `emoji` variant (defaults to `DEFAULT_EMOJIS`).
    #[props(default)]
    pub emojis: Option<Vec<String>>,
    /// Tooltip strings shown on hover, indexed by star position.
    #[props(default)]
    pub tooltips: Option<Vec<String>>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Multi-variant rating control. Supports `star`, `text`, `emoji` and `gradient`
/// variants with hover animations, tooltips and a burst-sparkle on high ratings.
///
/// The `motion/react` spring-based entry animations are approximated with CSS
/// `transition: transform 0.2s ease-out`. The sparkle SVG burst uses a CSS
/// `@keyframes` animation injected once per rating instance.
#[component]
pub fn Rating(props: RatingProps) -> Element {
    let mut hover_value = use_signal(|| 0usize);
    let mut is_confirming = use_signal(|| false);
    let mut tooltip_text = use_signal(String::new);
    let mut is_tooltip_visible = use_signal(|| false);
    let mut sparkle_position = use_signal(|| None::<ClickPositionType>);

    let colors = props.colors.clone().unwrap_or_default();
    let interactive = !props.disabled && !props.read_only;

    let display_value = if *hover_value.read() > 0 {
        *hover_value.read() as f64
    } else {
        props.value
    };

    // Clone on_value_change for use in both the item buttons and GradientRating.
    let on_vc_for_select = props.on_value_change;
    let on_vc_for_gradient = props.on_value_change;

    // use_callback returns Callback<T> which is Copy — safe to capture in loops.
    let tooltips_rc = Rc::new(props.tooltips.clone());

    let handle_enter = use_callback(move |item_value: usize| {
        if !interactive || *is_confirming.read() {
            return;
        }
        hover_value.set(item_value);
        if let Some(t) = tooltips_rc
            .as_ref()
            .as_ref()
            .and_then(|ts| ts.get(item_value - 1))
        {
            tooltip_text.set(t.clone());
            is_tooltip_visible.set(true);
        }
    });

    let handle_leave = use_callback(move |()| {
        if !interactive {
            return;
        }
        hover_value.set(0);
        is_tooltip_visible.set(false);
    });

    let handle_select = use_callback(move |sv: usize| {
        if !interactive || *is_confirming.read() {
            return;
        }
        if let Some(ref h) = on_vc_for_select {
            h.call(sv as f64);
        }
        hover_value.set(0);
        is_tooltip_visible.set(false);
        if sv >= 3 {
            is_confirming.set(true);
            sparkle_position.set(Some(ClickPositionType {
                top: 0.0,
                left: 0.0,
            }));
        }
    });

    let variant = props.variant;
    let count = props.count;
    let value = props.value;
    let disabled = props.disabled;
    let read_only = props.read_only;

    let text_labels: Vec<String> = props
        .labels
        .clone()
        .unwrap_or_else(|| (1..=count).map(|i| i.to_string()).collect());

    let emoji_set: Vec<String> = props
        .emojis
        .clone()
        .unwrap_or_else(|| DEFAULT_EMOJIS.iter().map(|s| s.to_string()).collect());

    rsx! {
        div { class: "flex flex-col items-center",
            div {
                class: cn(["relative flex items-center", props.class.as_deref().unwrap_or_default()]),
                ..props.attributes,

                // Tooltip
                if *is_tooltip_visible.read() {
                    div {
                        class: "absolute bottom-full mb-2 bg-popover text-popover-foreground text-xs font-semibold px-2 py-1 rounded-md pointer-events-none transition-opacity duration-200",
                        style: "transform: translateY(-8px)",
                        "{tooltip_text}"
                    }
                }

                // Sparkle burst
                if let Some(pos) = *sparkle_position.read() {
                    Sparkles {
                        position: pos,
                        on_complete: move || {
                            is_confirming.set(false);
                            sparkle_position.set(None);
                        },
                    }
                }

                match variant {
                    RatingVariantType::Gradient => rsx! {
                        GradientRating {
                            value,
                            count,
                            read_only,
                            disabled,
                            colors: colors.clone(),
                            on_value_change: on_vc_for_gradient,
                        }
                    },
                    _ => rsx! {
                        div {
                            role: "radiogroup",
                            "aria-label": "Rating",
                            "aria-disabled": disabled.then_some("true"),
                            class: "flex items-center gap-2",

                            for item_index in 0..count {
                                {
                                    let item_value = item_index + 1;
                                    let is_filled = (item_value as f64) <= display_value;
                                    let is_hovered = interactive && item_value == *hover_value.read();
                                    let scale = if is_hovered { "1.15" } else { "1" };
                                    let translate_y = if is_hovered { "-4px" } else { "0" };

                                    match variant {
                                        RatingVariantType::Text => {
                                            let label = text_labels.get(item_index).cloned().unwrap_or_default();
                                            let is_highlighted = (item_value as f64) == display_value;
                                            rsx! {
                                                button {
                                                    key: "text-{item_value}",
                                                    r#type: "button",
                                                    role: "radio",
                                                    "aria-checked": ((item_value as f64) == value).then_some("true"),
                                                    disabled,
                                                    tabindex: if interactive { 0i64 } else { -1 },
                                                    class: cn([
                                                        "rating-item text-center font-medium rounded-md px-3 py-1 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                                        if interactive { "cursor-pointer" } else { "" },
                                                        if disabled || read_only { "cursor-not-allowed opacity-50" } else { "" },
                                                        if is_highlighted { "bg-primary text-primary-foreground" } else { "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground" },
                                                    ]),
                                                    style: format!("transform: scale({scale}) translateY({translate_y}); transition: transform 0.2s ease-out"),
                                                    onmouseenter: move |_| handle_enter.call(item_value),
                                                    onmouseleave: move |_| handle_leave.call(()),
                                                    onclick: move |_| handle_select.call(item_value),
                                                    "{label}"
                                                }
                                            }
                                        },
                                        RatingVariantType::Emoji => {
                                            let emoji = emoji_set.get(item_index).cloned().unwrap_or_default();
                                            let is_selected = (item_value as f64) == value;
                                            let is_active = is_selected || item_value == *hover_value.read();
                                            rsx! {
                                                button {
                                                    key: "emoji-{item_value}",
                                                    r#type: "button",
                                                    role: "radio",
                                                    "aria-checked": is_selected.then_some("true"),
                                                    disabled,
                                                    tabindex: if interactive { 0i64 } else { -1 },
                                                    class: cn([
                                                        "rating-item text-3xl leading-none transition-all duration-200 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md",
                                                        if interactive { "cursor-pointer" } else { "" },
                                                        if disabled || read_only { "cursor-not-allowed opacity-50!" } else { "" },
                                                        if is_active { "grayscale-0 opacity-100" } else { "grayscale opacity-60" },
                                                    ]),
                                                    style: format!("transform: scale({scale}) translateY({translate_y}); transition: transform 0.2s ease-out"),
                                                    onmouseenter: move |_| handle_enter.call(item_value),
                                                    onmouseleave: move |_| handle_leave.call(()),
                                                    onclick: move |_| handle_select.call(item_value),
                                                    "{emoji}"
                                                }
                                            }
                                        },
                                        // Star (default)
                                        _ => rsx! {
                                            button {
                                                key: "star-{item_value}",
                                                r#type: "button",
                                                role: "radio",
                                                "aria-checked": ((item_value as f64) == value).then_some("true"),
                                                "aria-label": "{item_value}",
                                                disabled,
                                                tabindex: if interactive { 0i64 } else { -1 },
                                                class: cn([
                                                    "rating-item rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                                    if interactive { "cursor-pointer" } else { "" },
                                                    if disabled || read_only { "cursor-not-allowed opacity-50" } else { "" },
                                                ]),
                                                style: format!("transform: scale({scale}) translateY({translate_y}); transition: transform 0.2s ease-out"),
                                                onmouseenter: move |_| handle_enter.call(item_value),
                                                onmouseleave: move |_| handle_leave.call(()),
                                                onclick: move |_| handle_select.call(item_value),
                                                StarIcon {
                                                    class: cn([
                                                        "h-6 w-6 transition-colors",
                                                        if is_filled { colors.fill.as_str() } else { colors.empty.as_str() },
                                                    ]),
                                                }
                                            }
                                        },
                                    }
                                }
                            }
                        }
                    },
                }
            }
        }
    }
}

// ─── GradientRating ──────────────────────────────────────────────────────────

#[derive(Props, Clone, PartialEq)]
pub struct GradientRatingProps {
    pub value: f64,
    pub count: usize,
    pub read_only: bool,
    pub disabled: bool,
    pub colors: RatingColorsType,
    pub on_value_change: Option<EventHandler<f64>>,
}

/// Single-icon gradient fill variant that responds to vertical pointer position.
/// The `motion/react` clip-path animation is approximated with a CSS transition.
#[component]
pub fn GradientRating(props: GradientRatingProps) -> Element {
    let interactive = !props.disabled && !props.read_only;
    let fill_inset = 100.0 - (props.value / props.count as f64) * 100.0;
    let mut is_pressing = use_signal(|| false);

    let mut icon_ref = use_signal(|| None::<Rc<MountedData>>);
    let mut rect_top = use_signal(|| 0.0f64);
    let mut rect_height = use_signal(|| 1.0f64);

    let count = props.count;
    let on_value_change = props.on_value_change;
    let value = props.value;

    let do_update = use_callback(move |client_y: f64| {
        let pointer_y = client_y - *rect_top.peek();
        let pct = (1.0 - pointer_y / *rect_height.peek()).clamp(0.0, 1.0);
        let new_val = (pct * count as f64).round();
        if let Some(ref h) = on_value_change {
            h.call(new_val);
        }
    });

    rsx! {
        div {
            onmounted: move |event| {
                let data = event.data();
                spawn(async move {
                    if let Ok(rect) = data.get_client_rect().await {
                        rect_top.set(rect.origin.y);
                        rect_height.set(if rect.size.height > 0.0 { rect.size.height } else { 1.0 });
                    }
                    icon_ref.set(Some(data));
                });
            },
            class: cn([
                "relative h-8 w-8 rating-item",
                if interactive { "cursor-pointer" } else { "" },
                if props.disabled || props.read_only { "cursor-not-allowed opacity-50" } else { "" },
            ]),
            role: "slider",
            tabindex: if interactive { 0i64 } else { -1 },
            "aria-label": "Gradient rating",
            "aria-valuemin": "0",
            "aria-valuemax": "{props.count}",
            "aria-valuenow": "{props.value}",
            onpointerdown: move |event| {
                if !interactive { return; }
                is_pressing.set(true);
                if let Some(data) = &*icon_ref.read() {
                    let data = data.clone();
                    let cy = event.client_coordinates().y;
                    spawn(async move {
                        if let Ok(rect) = data.get_client_rect().await {
                            rect_top.set(rect.origin.y);
                            rect_height.set(if rect.size.height > 0.0 { rect.size.height } else { 1.0 });
                        }
                        do_update.call(cy);
                    });
                } else {
                    do_update.call(event.client_coordinates().y);
                }
            },
            onpointermove: move |event| {
                if !interactive || !*is_pressing.read() { return; }
                do_update.call(event.client_coordinates().y);
            },
            onpointerup: move |_| { is_pressing.set(false); },
            onkeydown: move |event| {
                if !interactive { return; }
                match event.key() {
                    Key::ArrowUp | Key::ArrowRight => {
                        event.prevent_default();
                        let new_val = (value + 1.0).min(count as f64);
                        if let Some(ref h) = on_value_change { h.call(new_val); }
                    }
                    Key::ArrowDown | Key::ArrowLeft => {
                        event.prevent_default();
                        let new_val = (value - 1.0).max(0.0);
                        if let Some(ref h) = on_value_change { h.call(new_val); }
                    }
                    _ => {}
                }
            },
            // Empty (background) icon
            StarIcon { class: cn(["h-full w-full", props.colors.empty.as_str()]) }
            // Filled clip layer
            div {
                class: "absolute top-0 left-0 h-full w-full overflow-hidden",
                style: format!(
                    "clip-path: inset({}% 0 0 0); transition: clip-path 0.4s ease-out",
                    fill_inset,
                ),
                StarIcon { class: cn(["h-full w-full", props.colors.fill.as_str()]) }
            }
        }
    }
}

// ─── Sparkles ────────────────────────────────────────────────────────────────

#[derive(Props, Clone, PartialEq)]
struct SparklesProps {
    position: ClickPositionType,
    on_complete: EventHandler<()>,
}

/// Burst-sparkle animation shown when the user selects a high rating.
///
/// Renders `PARTICLE_COUNT` SVG stars with CSS `@keyframes` animation.
/// The `motion/react` trajectory is approximated with a fixed CSS keyframe
/// sequence that moves particles outward and fades them out.
#[component]
fn Sparkles(props: SparklesProps) -> Element {
    let id = crate::hooks::use_id("sparkle");
    let keyframes: String = (0..PARTICLE_COUNT)
        .map(|i| {
            let angle = (360.0 / PARTICLE_COUNT as f64) * i as f64;
            let radius = 50.0_f64;
            let x = angle.to_radians().cos() * radius;
            let y = angle.to_radians().sin() * radius;
            format!(
                "@keyframes {id}-{i} {{ 0% {{ transform: translate(-50%,-50%) scale(0); opacity:1; }} 50% {{ transform: translate(calc(-50% + {x}px), calc(-50% + {y}px)) scale(1); opacity:1; }} 100% {{ transform: translate(calc(-50% + {x}px), calc(-50% + {y}px)) scale(0); opacity:0; }} }}"
            )
        })
        .collect::<Vec<_>>()
        .join("\n");

    rsx! {
        style { dangerous_inner_html: "{keyframes}" }
        div {
            class: "absolute pointer-events-none",
            style: format!(
                "top: {}px; left: {}px; transform: translate(-50%, -50%)",
                props.position.top,
                props.position.left,
            ),
            for i in 0..PARTICLE_COUNT {
                {
                    let color = SPARKLE_COLORS[i % SPARKLE_COLORS.len()];
                    let anim_name = format!("{id}-{i}");
                    let on_complete = props.on_complete;
                    rsx! {
                        svg {
                            key: "{i}",
                            width: "12",
                            height: "12",
                            view_box: "0 0 12 12",
                            fill: "none",
                            class: "absolute top-1/2 left-1/2",
                            style: format!("animation: {anim_name} 0.7s ease-out forwards"),
                            onanimationend: move |_| {
                                if i == 0 { on_complete.call(()); }
                            },
                            path {
                                d: "M6 0L7.34315 4.65685L12 6L7.34315 7.34315L6 12L4.65685 7.34315L0 6L4.65685 4.65685L6 0Z",
                                fill: "{color}",
                            }
                        }
                    }
                }
            }
        }
    }
}
