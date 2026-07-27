use dioxus::document::eval;
use dioxus::prelude::*;

#[derive(Clone, Copy, PartialEq)]
pub struct AutoHeightOptionsType {
    /// Adds the padding and border of the parent to the reported height.
    pub include_parent_box: bool,
    /// Adds the padding and border of the element itself.
    pub include_self_box: bool,
}

impl Default for AutoHeightOptionsType {
    fn default() -> Self {
        Self {
            include_parent_box: true,
            include_self_box: false,
        }
    }
}

/// Reports the rendered height of the element carrying `element_id`, following
/// every resize of the element and of its parent.
pub fn use_auto_height(element_id: String, options: AutoHeightOptionsType) -> ReadSignal<f64> {
    let mut height = use_signal(|| 0.0_f64);

    use_future(move || {
        let element_id = element_id.clone();

        async move {
            let mut listener = eval(&format!(
                r#"
                const element = document.getElementById("{element_id}");
                if (element) {{
                    const box = (node) => {{
                        const style = getComputedStyle(node);
                        if (style.boxSizing !== "border-box") return 0;
                        return (
                            (parseFloat(style.paddingTop) || 0) + (parseFloat(style.paddingBottom) || 0) +
                            (parseFloat(style.borderTopWidth) || 0) + (parseFloat(style.borderBottomWidth) || 0)
                        );
                    }};
                    const measure = () => {{
                        let total = element.getBoundingClientRect().height || 0;
                        if ({include_parent} && element.parentElement) total += box(element.parentElement);
                        if ({include_self}) total += box(element);
                        const ratio = window.devicePixelRatio || 1;
                        return Math.ceil(total * ratio) / ratio;
                    }};
                    const observer = new ResizeObserver(() => dioxus.send(measure()));
                    observer.observe(element);
                    if ({include_parent} && element.parentElement) observer.observe(element.parentElement);
                    dioxus.send(measure());
                    await dioxus.recv();
                    observer.disconnect();
                }}
                "#,
                include_parent = options.include_parent_box,
                include_self = options.include_self_box,
            ));

            while let Ok(value) = listener.recv::<f64>().await {
                height.set(value);
            }
        }
    });

    ReadSignal::new(height)
}
