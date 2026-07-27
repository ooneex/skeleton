// `Chart` in the TypeScript source is `Object.assign(ChartContainer, { Style, Tooltip, … })`.
// Rust has no equivalent; all sub-components are re-exported from `mod.rs` so
// callers import them directly:
//
//   use crate::components::chart::{ChartContainer, ChartStyle, ChartTooltipContent, …};

pub use super::ChartContainer::{ChartContainer, ChartContainerProps};
