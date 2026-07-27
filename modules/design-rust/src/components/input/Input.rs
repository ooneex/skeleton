use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum InputSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl InputSizeType {
    pub fn class(self) -> &'static str {
        match self {
            Self::Xs => {
                "h-6 px-2 py-0.5 text-xs rounded-[min(var(--radius-md),8px)] file:h-5 file:text-xs file:font-medium"
            }
            Self::Sm => {
                "h-8 px-2.5 py-1 text-sm rounded-[min(var(--radius-md),10px)] file:h-6 file:text-xs file:font-medium"
            }
            Self::Md => "h-9 px-2.5 py-1 text-base file:h-7 file:text-base file:font-medium",
            Self::Lg => "h-10 px-3 py-1.5 text-base file:h-8 file:text-base file:font-medium",
        }
    }
}

pub fn input_variants(size: InputSizeType, class: Option<&str>) -> String {
    cn([
        "ring-ring hover:ring-ring-active hover:ring focus-visible:ring-ring-active aria-invalid:ring-destructive/20 rounded ring bg-transparent transition-[color,box-shadow] focus-visible:ring aria-invalid:ring file:text-foreground placeholder:text-muted-foreground/60 w-full min-w-0 outline-none file:inline-flex file:ring-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 leading-relaxed",
        size.class(),
        class.unwrap_or_default(),
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct InputProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: InputSizeType,
    #[props(default)]
    pub oninput: Option<EventHandler<FormEvent>>,
    #[props(extends = input, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Input(props: InputProps) -> Element {
    let oninput = props.oninput;

    rsx! {
        input {
            "data-slot": "input",
            class: input_variants(props.size, props.class.as_deref()),
            oninput: move |event| {
                if let Some(handler) = oninput {
                    handler.call(event);
                }
            },
            ..props.attributes,
        }
    }
}
