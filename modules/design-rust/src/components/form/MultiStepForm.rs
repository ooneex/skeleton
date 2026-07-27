use std::rc::Rc;

use dioxus::document::eval;
use dioxus::prelude::*;

use crate::components::button::{Button, ButtonSizeType, ButtonVariantType};
use crate::components::card::{CardContent, CardDescription, CardFooter, CardHeader, CardTitle};
use crate::icons::fill::arrows::sm::{ArrowTriangleLineLeftIcon, ArrowTriangleLineRightIcon};
use crate::icons::outline::files_folders::sm::FloppyDiskIcon;
use crate::utils::cn;

/// One step in a `MultiStepForm`.
#[derive(Clone, PartialEq)]
pub struct StepType {
    pub title: String,
    pub description: String,
    pub content: Element,
}

/// Step-slide direction used when animating between steps.
#[derive(Clone, Copy, PartialEq, Eq)]
enum AnimDirection {
    Forward,
    Backward,
}

/// Phase in the step transition animation.
#[derive(Clone, Copy, PartialEq, Eq)]
enum AnimPhase {
    /// Content is fully visible; no animation in progress.
    Visible,
    /// Content is fading / sliding out before the step index changes.
    Exiting,
    /// Content just changed; it starts off-screen and will animate in.
    Entering,
}

#[derive(Props, Clone, PartialEq)]
pub struct MultiStepFormProps {
    pub steps: Vec<StepType>,
    pub on_submit: EventHandler<()>,
    #[props(default = false)]
    pub is_submitting: bool,
    #[props(default = Some("Save".to_string()))]
    pub submit_label: Option<String>,
    #[props(default = Some("Saving...".to_string()))]
    pub submitting_label: Option<String>,
}

/// Multi-step form with animated step transitions and a height-animating
/// content area.
///
/// `motion/react` is replaced by:
/// - **Height animation**: the content wrapper transitions to the measured
///   height of its inner `div` (measured with `onmounted` +
///   `get_client_rect`).
/// - **Step transitions**: each step cross-fades with a subtle horizontal
///   translate, driven by CSS `transition` and a two-phase state machine.
///
/// The transition uses `requestAnimationFrame` (via `eval`) to guarantee that
/// the browser paints the initial position before triggering the enter
/// animation, matching the behaviour of `AnimatePresence`.
#[component]
pub fn MultiStepForm(props: MultiStepFormProps) -> Element {
    let total_steps = props.steps.len();
    let mut current_step = use_signal(|| 0_usize);
    let mut pending_step = use_signal(|| None::<usize>);
    let mut direction = use_signal(|| AnimDirection::Forward);
    let mut anim_phase = use_signal(|| AnimPhase::Visible);
    let mut content_height = use_signal(|| None::<f64>);
    let mut content_ref = use_signal(|| None::<Rc<MountedData>>);

    let step_index = *current_step.read();
    let is_last_step = step_index + 1 >= total_steps;

    // Measure the content height whenever the mounted element changes.
    use_effect(move || {
        let Some(el) = content_ref() else { return };
        spawn(async move {
            if let Ok(rect) = el.get_client_rect().await {
                content_height.set(Some(rect.size.height));
            }
        });
    });

    let next_step = use_callback(move |()| {
        let idx = *current_step.peek();
        if idx + 1 >= total_steps {
            return;
        }
        direction.set(AnimDirection::Forward);
        pending_step.set(Some(idx + 1));
        anim_phase.set(AnimPhase::Exiting);
    });

    let prev_step = use_callback(move |()| {
        let idx = *current_step.peek();
        if idx == 0 {
            return;
        }
        direction.set(AnimDirection::Backward);
        pending_step.set(Some(idx - 1));
        anim_phase.set(AnimPhase::Exiting);
    });

    // When exiting phase starts, wait two rAF ticks then advance to Entering.
    let anim_phase_read = *anim_phase.read();
    use_effect(move || {
        if anim_phase_read != AnimPhase::Exiting {
            return;
        }
        spawn(async move {
            // Wait two frames so the exit transition can play.
            let mut e = eval(
                "await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))); dioxus.send(true);",
            );
            if e.recv::<bool>().await.is_ok() {
                let next_step_index = *pending_step.peek();
                if let Some(next) = next_step_index {
                    current_step.set(next);
                    pending_step.set(None);
                    anim_phase.set(AnimPhase::Entering);
                }
            }
        });
    });

    // After entering phase, immediately trigger the slide-in.
    let entering_phase = anim_phase_read == AnimPhase::Entering;
    use_effect(move || {
        if !entering_phase {
            return;
        }
        spawn(async move {
            let mut e =
                eval("await new Promise(r => requestAnimationFrame(r)); dioxus.send(true);");
            if e.recv::<bool>().await.is_ok() {
                anim_phase.set(AnimPhase::Visible);
            }
        });
    });

    let dir = *direction.read();
    let phase = *anim_phase.read();

    let content_class = match phase {
        AnimPhase::Visible => "w-full opacity-100 translate-x-0 transition-all duration-300",
        AnimPhase::Exiting => match dir {
            AnimDirection::Forward => "w-full opacity-0 -translate-x-4 transition-all duration-300",
            AnimDirection::Backward => "w-full opacity-0 translate-x-4 transition-all duration-300",
        },
        AnimPhase::Entering => match dir {
            AnimDirection::Forward => "w-full opacity-0 translate-x-4",
            AnimDirection::Backward => "w-full opacity-0 -translate-x-4",
        },
    };

    let height_style = content_height()
        .map(|h| format!("height: {h}px; transition: height 0.5s cubic-bezier(0,0,0.2,1);"))
        .unwrap_or_default();

    let on_submit = props.on_submit;
    let submit_label = props
        .submit_label
        .clone()
        .unwrap_or_else(|| "Save".to_string());
    let submitting_label = props
        .submitting_label
        .clone()
        .unwrap_or_else(|| "Saving...".to_string());
    let is_submitting = props.is_submitting;

    rsx! {
        div { "data-slot": "multi-step-form",
            CardHeader { class: "flex flex-row items-start justify-between space-y-0 px-6 py-4",
                div { class: "flex flex-col gap-1",
                    CardTitle { class: "text-xl",
                        {props.steps.get(step_index).map(|s| s.title.clone()).unwrap_or_default()}
                    }
                    CardDescription {
                        {props.steps.get(step_index).map(|s| s.description.clone()).unwrap_or_default()}
                    }
                }
                div { class: "flex items-center gap-1.5 pt-1",
                    for (i , _) in props.steps.iter().enumerate() {
                        div {
                            key: "{i}",
                            class: cn([
                                "h-2 rounded-full transition-all duration-300",
                                if step_index == i { "w-8 bg-primary" } else { "w-2 bg-primary/20" },
                            ]),
                        }
                    }
                }
            }
            div { class: "relative overflow-hidden", style: height_style,
                div {
                    onmounted: move |event| content_ref.set(Some(event.data())),
                    CardContent { class: "px-6 py-2 relative",
                        div { class: content_class,
                            if let Some(step) = props.steps.get(step_index) {
                                {step.content.clone()}
                            }
                        }
                    }
                }
            }
            CardFooter { class: "flex justify-between items-center border-t py-4 px-6",
                Button {
                    variant: ButtonVariantType::Outline,
                    size: ButtonSizeType::Sm,
                    onclick: move |_| prev_step.call(()),
                    disabled: step_index == 0 || phase != AnimPhase::Visible,
                    ArrowTriangleLineLeftIcon {}
                    "Back"
                }
                if is_last_step {
                    Button {
                        variant: ButtonVariantType::Default,
                        size: ButtonSizeType::Sm,
                        onclick: move |_| on_submit.call(()),
                        disabled: is_submitting || phase != AnimPhase::Visible,
                        FloppyDiskIcon {}
                        if is_submitting { {submitting_label.clone()} } else { {submit_label.clone()} }
                    }
                } else {
                    Button {
                        variant: ButtonVariantType::Default,
                        size: ButtonSizeType::Sm,
                        onclick: move |_| next_step.call(()),
                        disabled: phase != AnimPhase::Visible,
                        "Continue"
                        ArrowTriangleLineRightIcon { "data-icon": "inline-end" }
                    }
                }
            }
        }
    }
}
