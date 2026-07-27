use dioxus::document::eval;
use dioxus::prelude::*;

use crate::components::button::{Button, ButtonSizeType, ButtonVariantType, button_variants};
use crate::icons::outline::arrows::sm::ArrowLeftIcon;
use crate::utils::{cn, is_stale_chunk_error, reload_if_stale_chunk_error};

use super::ErrorFallbackIcon::ErrorFallbackIcon;

#[derive(Clone)]
struct StackFrame {
    func: Option<String>,
    file: Option<String>,
    line: Option<String>,
    col: Option<String>,
}

/// Pre-processed frame with all display strings already computed.
#[derive(Clone)]
struct DisplayFrame {
    num: String,
    is_first: bool,
    func: Option<String>,
    file: Option<String>,
    location: Option<String>,
}

fn parse_stack_trace(stack: &str) -> Vec<StackFrame> {
    stack
        .lines()
        .filter(|line| line.trim().starts_with("at"))
        .map(|line| {
            if let Some(f) = parse_at_with_fn(line) {
                return f;
            }
            if let Some(f) = parse_at_no_fn(line) {
                return f;
            }
            StackFrame {
                func: None,
                file: Some(line.trim().to_string()),
                line: None,
                col: None,
            }
        })
        .collect()
}

fn parse_at_with_fn(line: &str) -> Option<StackFrame> {
    let line = line.trim().strip_prefix("at ")?;
    let paren = line.rfind(" (")?;
    let func = line[..paren].trim().to_string();
    let rest = line[paren + 2..].trim_end_matches(')');
    let (file, ln, col) = split_file_line_col(rest);
    Some(StackFrame {
        func: Some(func),
        file: Some(file.to_string()),
        line: ln.map(str::to_string),
        col: col.map(str::to_string),
    })
}

fn parse_at_no_fn(line: &str) -> Option<StackFrame> {
    let rest = line.trim().strip_prefix("at ")?;
    let (file, ln, col) = split_file_line_col(rest);
    Some(StackFrame {
        func: None,
        file: Some(file.to_string()),
        line: ln.map(str::to_string),
        col: col.map(str::to_string),
    })
}

fn split_file_line_col(s: &str) -> (&str, Option<&str>, Option<&str>) {
    let mut parts = s.rsplitn(3, ':');
    let col = parts.next();
    let line = parts.next();
    let file = parts.next().unwrap_or(s);
    (file, line, col)
}

fn build_display_frames(frames: &[StackFrame]) -> Vec<DisplayFrame> {
    frames
        .iter()
        .enumerate()
        .map(|(i, frame)| DisplayFrame {
            num: (i + 1).to_string(),
            is_first: i == 0,
            func: frame.func.clone(),
            file: frame.file.clone(),
            location: frame
                .line
                .as_ref()
                .zip(frame.col.as_ref())
                .map(|(l, c)| format!(":{l}:{c}")),
        })
        .collect()
}

/// Props accepted by `ErrorFallback`, mirroring `@tanstack/react-router`'s
/// `ErrorComponentProps`.
#[derive(Props, Clone, PartialEq)]
pub struct ErrorFallbackProps {
    #[props(default = "Error".to_string())]
    pub error_name: String,
    #[props(default)]
    pub error_message: String,
    #[props(default)]
    pub stack: Option<String>,
    pub reset: Option<EventHandler<()>>,
}

/// Full-page error boundary fallback. Displays the error, a stack trace drawer,
/// and action buttons for navigation and recovery.
///
/// # Rust differences from TypeScript
/// Router-specific features (`useRouter`, `router.invalidate`, `Link to="/"`)
/// are implemented via `window.history.back()` and `window.location.href`
/// through `dioxus::document::eval`. The "Go home" link uses a plain `<a href="/">`.
#[component]
pub fn ErrorFallback(props: ErrorFallbackProps) -> Element {
    let mut drawer_open = use_signal(|| false);
    let stale_chunk = is_stale_chunk_error(&props.error_message);

    use_effect({
        let msg = props.error_message.clone();
        move || {
            reload_if_stale_chunk_error(&msg);
        }
    });

    let frames = props
        .stack
        .as_deref()
        .map(parse_stack_trace)
        .unwrap_or_default();
    let has_stack = !frames.is_empty();
    let display_frames = build_display_frames(&frames);

    let error_name = props.error_name.clone();
    let error_message = props.error_message.clone();
    let error_name2 = error_name.clone();
    let error_message2 = error_message.clone();
    let reset = props.reset;

    rsx! {
        div {
            role: "alert",
            class: "relative h-full flex flex-col overflow-hidden",
            div {
                class: "flex-1 flex flex-col items-center justify-center gap-8 p-12",
                ErrorFallbackIcon {}
                div {
                    class: "flex flex-col items-center gap-3 text-center",
                    p { class: "text-muted-foreground max-w-sm", "Something went wrong while processing your request." }
                    div {
                        class: "mt-1 max-w-lg w-full rounded border border-destructive/15 bg-destructive/5 px-4 py-3",
                        div {
                            class: "flex items-start gap-3",
                            div {
                                class: "mt-0.5 shrink-0 rounded-full bg-destructive/10 p-1.5",
                                svg {
                                    width: "14", height: "14", view_box: "0 0 14 14", class: "text-destructive",
                                    circle { cx: "7", cy: "7", r: "6", fill: "none", stroke: "currentColor", stroke_width: "1.5" }
                                    line { x1: "7", y1: "4", x2: "7", y2: "8", stroke: "currentColor", stroke_width: "1.5", stroke_linecap: "round" }
                                    circle { cx: "7", cy: "10.5", r: "0.8", fill: "currentColor" }
                                }
                            }
                            div {
                                class: "min-w-0 text-left",
                                p { class: "text-xs font-semibold text-destructive/80", "{error_name}" }
                                p { class: "mt-0.5 text-sm text-foreground/70 wrap-break-word", "{error_message}" }
                            }
                        }
                    }
                }
                div {
                    class: "flex gap-3",
                    Button {
                        variant: ButtonVariantType::Outline,
                        onclick: move |_| { spawn(async { let _ = eval("window.history.back();").await; }); },
                        ArrowLeftIcon {}
                        "Go back"
                    }
                    Button {
                        onclick: move |_| {
                            if stale_chunk {
                                spawn(async { let _ = eval("window.location.reload();").await; });
                            } else if let Some(r) = reset {
                                r.call(());
                            }
                        },
                        "Try again"
                    }
                    a {
                        href: "/",
                        class: button_variants(ButtonVariantType::Outline, ButtonSizeType::Sm, None),
                        "Go home"
                    }
                }
                if has_stack {
                    button {
                        r#type: "button",
                        onclick: move |_| drawer_open.toggle(),
                        class: "text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1.5 mt-2",
                        svg {
                            width: "12", height: "12", view_box: "0 0 12 12",
                            class: cn(["transition-transform duration-300", if *drawer_open.read() { "rotate-180" } else { "rotate-0" }]),
                            path { d: "M2 8L6 4L10 8", fill: "none", stroke: "currentColor", stroke_width: "1.5", stroke_linecap: "round" }
                        }
                        if *drawer_open.read() { "Hide" } else { "Show" }
                        " stack trace"
                    }
                }
            }
            if has_stack {
                div {
                    class: cn([
                        "grid transition-[grid-template-rows] duration-300 ease-in-out bg-muted/40 backdrop-blur-sm",
                        if *drawer_open.read() { "grid-rows-[1fr] border-t border-border/50" } else { "grid-rows-[0fr]" },
                    ]),
                    div {
                        class: "overflow-hidden",
                        div { class: "flex justify-center py-2", div { class: "w-10 h-1 rounded-full bg-border" } }
                        div {
                            class: "overflow-auto px-6 pb-6 max-h-[calc(50vh-2rem)]",
                            div {
                                class: "flex items-center gap-2 mb-3 font-mono text-xs",
                                span { class: "px-1.5 py-0.5 rounded bg-destructive/10 text-destructive text-2xs font-semibold", "{error_name2}" }
                                span { class: "text-muted-foreground truncate text-xs", "{error_message2}" }
                            }
                            div {
                                class: "space-y-0.5",
                                for frame in &display_frames {
                                    div {
                                        key: "{frame.num}",
                                        class: cn([
                                            "flex items-baseline gap-3 py-1.5 px-3 rounded font-mono text-xs",
                                            if frame.is_first { "bg-destructive/5 border border-destructive/10" } else { "hover:bg-muted/60" },
                                        ]),
                                        span {
                                            class: cn([
                                                "select-none w-4 text-right shrink-0 tabular-nums text-xs",
                                                if frame.is_first { "text-destructive/50" } else { "text-muted-foreground/40" },
                                            ]),
                                            "{frame.num}"
                                        }
                                        div {
                                            class: "flex flex-wrap items-baseline gap-x-2 min-w-0",
                                            if let Some(func) = &frame.func {
                                                span {
                                                    class: cn(["font-medium shrink-0 text-xs", if frame.is_first { "text-destructive/80" } else { "text-foreground/70" }]),
                                                    "{func}"
                                                }
                                            } else {
                                                span { class: "text-muted-foreground/40 italic shrink-0 text-xs", "anonymous" }
                                            }
                                            if let Some(file) = &frame.file {
                                                span {
                                                    class: "text-muted-foreground/50 break-all text-xs",
                                                    "{file}"
                                                    if let Some(loc) = &frame.location {
                                                        span { class: "text-muted-foreground/30 text-xs", "{loc}" }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
