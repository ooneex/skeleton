use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct InputGroupInputProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = input, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InputGroupInput(props: InputGroupInputProps) -> Element {
    let class = cn([
        "group-data-[size=xs]/input-group:h-6 group-data-[size=xs]/input-group:px-2 group-data-[size=xs]/input-group:py-0.5 group-data-[size=xs]/input-group:text-xs group-data-[size=xs]/input-group:file:h-5 group-data-[size=xs]/input-group:file:text-xs group-data-[size=xs]/input-group:rounded-[min(var(--radius-md),8px)] group-data-[size=sm]/input-group:h-8 group-data-[size=sm]/input-group:px-2.5 group-data-[size=sm]/input-group:py-1 group-data-[size=sm]/input-group:text-sm group-data-[size=sm]/input-group:file:h-6 group-data-[size=sm]/input-group:file:text-xs group-data-[size=sm]/input-group:rounded-[min(var(--radius-md),10px)] group-data-[size=md]/input-group:h-9 group-data-[size=md]/input-group:px-2.5 group-data-[size=md]/input-group:py-1 group-data-[size=md]/input-group:text-base group-data-[size=md]/input-group:file:h-7 group-data-[size=lg]/input-group:h-10 group-data-[size=lg]/input-group:px-3 group-data-[size=lg]/input-group:py-1.5 group-data-[size=lg]/input-group:text-base group-data-[size=lg]/input-group:file:h-8 ring-0 hover:ring-0 focus-visible:ring-0 border-none bg-transparent outline-none w-full min-w-0 h-full focus:outline-none file:text-foreground placeholder:text-muted-foreground/60 disabled:pointer-events-none disabled:cursor-not-allowed leading-relaxed",
        props.class.as_deref().unwrap_or_default(),
    ]);

    rsx! {
        input {
            "data-slot": "input-group-input",
            class: class,
            ..props.attributes,
        }
    }
}
