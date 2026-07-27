use dioxus::prelude::*;

use super::Avatar::{AvatarContext, AvatarImageStatusType};
use crate::hooks::use_id;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct AvatarImageProps {
    pub src: String,
    #[props(default)]
    pub alt: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = img, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AvatarImage(props: AvatarImageProps) -> Element {
    let mut ctx = use_context::<AvatarContext>();
    let img_id = use_id("avatar-img");
    let img_id_clone = img_id.clone();
    let src = props.src.clone();

    // Track image load/error via JS since the img may already be cached when mounted.
    use_future(move || {
        let id = img_id_clone.clone();
        async move {
            let mut ev = dioxus::document::eval(&format!(
                r#"
                const img = document.getElementById("{id}");
                if (!img) return;
                const send = (s) => dioxus.send(s);
                if (img.complete) {{
                    send(img.naturalHeight > 0 ? "loaded" : "error");
                    return;
                }}
                img.addEventListener("load", () => send("loaded"), {{ once: true }});
                img.addEventListener("error", () => send("error"), {{ once: true }});
                await dioxus.recv();
                "#
            ));
            while let Ok(s) = ev.recv::<String>().await {
                match s.as_str() {
                    "loaded" => ctx.status.set(AvatarImageStatusType::Loaded),
                    "error" => ctx.status.set(AvatarImageStatusType::Error),
                    _ => {}
                }
            }
        }
    });

    let is_error = *ctx.status.read() == AvatarImageStatusType::Error;

    rsx! {
        img {
            id: img_id,
            "data-slot": "avatar-image",
            src,
            alt: props.alt.clone().unwrap_or_default(),
            hidden: is_error,
            class: cn([
                "rounded-full aspect-square size-full object-cover",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
        }
    }
}
