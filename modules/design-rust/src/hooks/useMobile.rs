use dioxus::document::eval;
use dioxus::prelude::*;

const MOBILE_BREAKPOINT: u32 = 768;

/// Tracks whether the viewport is narrower than the mobile breakpoint,
/// following every viewport change.
pub fn use_is_mobile() -> ReadSignal<bool> {
    let mut is_mobile = use_signal(|| false);

    use_future(move || async move {
        let mut listener = eval(&format!(
            r#"
            const query = window.matchMedia("(max-width: {}px)");
            const send = () => dioxus.send(window.innerWidth < {MOBILE_BREAKPOINT});
            query.addEventListener("change", send);
            send();
            await dioxus.recv();
            query.removeEventListener("change", send);
            "#,
            MOBILE_BREAKPOINT - 1
        ));

        while let Ok(value) = listener.recv::<bool>().await {
            is_mobile.set(value);
        }
    });

    ReadSignal::new(is_mobile)
}
