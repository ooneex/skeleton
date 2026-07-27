use dioxus::document::eval;
use dioxus::prelude::*;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum AnchorSideType {
    Top,
    Right,
    #[default]
    Bottom,
    Left,
}

impl AnchorSideType {
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Top => "top",
            Self::Right => "right",
            Self::Bottom => "bottom",
            Self::Left => "left",
        }
    }
}

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum AnchorAlignType {
    Start,
    #[default]
    Center,
    End,
}

impl AnchorAlignType {
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Start => "start",
            Self::Center => "center",
            Self::End => "end",
        }
    }
}

#[derive(Clone, PartialEq)]
pub struct AnchorPositionOptionsType {
    pub anchor_id: String,
    /// Fixed-position element wrapping the popup; receives coordinates and CSS vars.
    pub positioner_id: String,
    pub side: AnchorSideType,
    pub align: AnchorAlignType,
    pub side_offset: f64,
    pub align_offset: f64,
    /// Minimum gap kept between the popup and the viewport edges.
    pub collision_padding: f64,
}

impl AnchorPositionOptionsType {
    pub fn new(anchor_id: impl Into<String>, positioner_id: impl Into<String>) -> Self {
        Self {
            anchor_id: anchor_id.into(),
            positioner_id: positioner_id.into(),
            side: AnchorSideType::default(),
            align: AnchorAlignType::default(),
            side_offset: 0.0,
            align_offset: 0.0,
            collision_padding: 8.0,
        }
    }
}

/// Anchors a `position: fixed` element to another element, flipping to the
/// opposite side when the preferred side lacks viewport space and clamping into
/// the viewport. Sets the CSS variables `--anchor-width`, `--available-height`
/// and `--transform-origin` on the positioner so popup styles can consume them.
/// Tracks scroll, resize and size changes while `open` is true.
pub fn use_anchor_position(open: ReadSignal<bool>, options: AnchorPositionOptionsType) {
    let mut listener = use_signal(|| None::<dioxus::document::Eval>);

    use_effect(move || {
        if let Some(previous) = listener.write().take() {
            let _ = previous.send("stop");
        }

        if !open() {
            return;
        }

        listener.set(Some(eval(&build_script(&options))));
    });
}

fn build_script(options: &AnchorPositionOptionsType) -> String {
    let AnchorPositionOptionsType {
        anchor_id,
        positioner_id,
        side,
        align,
        side_offset,
        align_offset,
        collision_padding,
    } = options;

    format!(
        r#"
        const anchor = document.getElementById("{anchor_id}");
        const positioner = document.getElementById("{positioner_id}");
        if (anchor && positioner) {{
            const side = "{side}";
            const align = "{align}";
            const sideOffset = {side_offset};
            const alignOffset = {align_offset};
            const padding = {collision_padding};
            const opposite = {{ top: "bottom", bottom: "top", left: "right", right: "left" }};

            const spaceOnSide = (candidate, rect, viewportWidth, viewportHeight) => {{
                if (candidate === "top") return rect.top;
                if (candidate === "bottom") return viewportHeight - rect.bottom;
                if (candidate === "left") return rect.left;
                return viewportWidth - rect.right;
            }};

            const transformOrigin = (candidate) => {{
                if (candidate === "top" || candidate === "bottom") {{
                    const x = align === "start" ? "left" : align === "end" ? "right" : "center";
                    return `${{x}} ${{candidate === "bottom" ? "top" : "bottom"}}`;
                }}
                const y = align === "start" ? "top" : align === "end" ? "bottom" : "center";
                return `${{candidate === "right" ? "left" : "right"}} ${{y}}`;
            }};

            const update = () => {{
                const rect = anchor.getBoundingClientRect();
                const viewportWidth = document.documentElement.clientWidth;
                const viewportHeight = document.documentElement.clientHeight;

                positioner.style.setProperty("--anchor-width", `${{rect.width}}px`);

                const applyAvailableHeight = (candidate) => {{
                    const available = candidate === "top" || candidate === "bottom"
                        ? Math.max(0, spaceOnSide(candidate, rect, viewportWidth, viewportHeight) - sideOffset - padding)
                        : viewportHeight - padding * 2;
                    positioner.style.setProperty("--available-height", `${{available}}px`);
                }};

                applyAvailableHeight(side);
                let {{ width, height }} = positioner.getBoundingClientRect();

                let finalSide = side;
                const requested = spaceOnSide(side, rect, viewportWidth, viewportHeight);
                const needed = (side === "top" || side === "bottom" ? height : width) + sideOffset + padding;
                if (requested < needed && spaceOnSide(opposite[side], rect, viewportWidth, viewportHeight) > requested) {{
                    finalSide = opposite[side];
                    applyAvailableHeight(finalSide);
                    ({{ width, height }} = positioner.getBoundingClientRect());
                }}

                let top;
                let left;
                if (finalSide === "top" || finalSide === "bottom") {{
                    top = finalSide === "bottom" ? rect.bottom + sideOffset : rect.top - height - sideOffset;
                    left = align === "start"
                        ? rect.left + alignOffset
                        : align === "end"
                            ? rect.right - width - alignOffset
                            : rect.left + rect.width / 2 - width / 2 + alignOffset;
                }} else {{
                    left = finalSide === "right" ? rect.right + sideOffset : rect.left - width - sideOffset;
                    top = align === "start"
                        ? rect.top + alignOffset
                        : align === "end"
                            ? rect.bottom - height - alignOffset
                            : rect.top + rect.height / 2 - height / 2 + alignOffset;
                }}

                left = Math.min(Math.max(left, padding), Math.max(padding, viewportWidth - width - padding));
                top = Math.min(Math.max(top, padding), Math.max(padding, viewportHeight - height - padding));

                positioner.style.top = `${{top}}px`;
                positioner.style.left = `${{left}}px`;
                positioner.style.setProperty("--transform-origin", transformOrigin(finalSide));
            }};

            update();
            window.addEventListener("resize", update);
            document.addEventListener("scroll", update, {{ capture: true, passive: true }});
            const observer = new ResizeObserver(update);
            observer.observe(anchor);
            observer.observe(positioner);

            await dioxus.recv();

            window.removeEventListener("resize", update);
            document.removeEventListener("scroll", update, {{ capture: true }});
            observer.disconnect();
        }}
        "#,
        side = side.as_str(),
        align = align.as_str(),
    )
}
