use dioxus::document::eval;
use dioxus::prelude::*;

/// Calls `handler` whenever a pointer press lands outside the element carrying
/// `element_id`. The listener lives in the document, like its React
/// counterpart, so presses on portalled popups are seen too.
pub fn use_click_outside(element_id: String, handler: Callback<()>) {
    use_future(move || {
        let element_id = element_id.clone();

        async move {
            let mut listener = eval(&format!(
                r#"
                const element = document.getElementById("{element_id}");
                if (element) {{
                    const onPress = (event) => {{
                        if (!element.contains(event.target)) dioxus.send(true);
                    }};
                    document.addEventListener("mousedown", onPress);
                    document.addEventListener("touchstart", onPress);
                    await dioxus.recv();
                    document.removeEventListener("mousedown", onPress);
                    document.removeEventListener("touchstart", onPress);
                }}
                "#
            ));

            while listener.recv::<bool>().await.is_ok() {
                handler.call(());
            }
        }
    });
}
