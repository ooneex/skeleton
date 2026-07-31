import { interpolate } from "remotion";
import { brand } from "./brand";

/**
 * A mock of the Storybook UI — sidebar, canvas, controls panel — animated so a
 * reel can *show* how the tool works instead of describing it in bullet points.
 * Every size derives from `unit` so one component serves any composition width.
 */

export type StorybookUiProps = {
  unit: number;
  /** Index of the sidebar entry currently selected. */
  selectedIndex: number;
  /** 0 → 1 progress of the variant control being switched. */
  variantProgress: number;
  /** 0 → 1 progress of the state grid being revealed. */
  statesProgress: number;
  /** Height of the canvas area, so a tall frame gets a taller mock. */
  canvasHeight: number;
  accent: string;
};

const SIDEBAR_GROUPS = [
  { label: "Inputs", items: ["Button", "Checkbox", "Input", "Select"] },
  { label: "Feedback", items: ["Badge", "Toaster"] },
] as const;

const VARIANTS = ["primary", "secondary", "ghost"] as const;

const STATES = [
  { label: "default", opacity: 1 },
  { label: "hover", opacity: 1 },
  { label: "loading", opacity: 1 },
  { label: "disabled", opacity: 0.4 },
] as const;

const MockButton: React.FC<{
  unit: number;
  label: string;
  variant: (typeof VARIANTS)[number];
  accent: string;
  opacity?: number;
  scale?: number;
}> = ({ unit, label, variant, accent, opacity = 1, scale = 1 }) => {
  const background =
    variant === "primary" ? accent : variant === "secondary" ? brand.secondary : "transparent";

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: `${unit * 0.9}px ${unit * 2.4}px`,
        borderRadius: unit * 0.8,
        backgroundColor: background,
        border: variant === "ghost" ? `${unit * 0.15}px solid ${brand.border}` : "none",
        color: variant === "ghost" ? brand.text : brand.onAccent,
        fontSize: unit * 1.5,
        fontWeight: 600,
        whiteSpace: "nowrap",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      {label}
    </div>
  );
};

const Sidebar: React.FC<Pick<StorybookUiProps, "unit" | "selectedIndex" | "accent">> = ({
  unit,
  selectedIndex,
  accent,
}) => {
  const rows = SIDEBAR_GROUPS.flatMap((group) => [
    { kind: "group" as const, label: group.label },
    ...group.items.map((item) => ({ kind: "item" as const, label: item })),
  ]);

  let itemIndex = -1;

  return (
    <div
      style={{
        width: unit * 20,
        borderRight: `${unit * 0.12}px solid ${brand.border}`,
        padding: unit * 1.4,
        display: "flex",
        flexDirection: "column",
        gap: unit * 0.5,
      }}
    >
      {rows.map((row) => {
        if (row.kind === "group") {
          return (
            <div
              key={row.label}
              style={{
                fontSize: unit * 1.05,
                letterSpacing: unit * 0.06,
                textTransform: "uppercase",
                color: brand.mutedText,
                marginTop: unit * 0.8,
                marginBottom: unit * 0.2,
              }}
            >
              {row.label}
            </div>
          );
        }

        itemIndex += 1;
        const isSelected = itemIndex === selectedIndex;

        return (
          <div
            key={row.label}
            style={{
              padding: `${unit * 0.55}px ${unit * 0.9}px`,
              borderRadius: unit * 0.6,
              backgroundColor: isSelected ? brand.muted : "transparent",
              borderLeft: `${unit * 0.3}px solid ${isSelected ? accent : "transparent"}`,
              color: isSelected ? brand.text : brand.mutedText,
              fontSize: unit * 1.35,
              fontWeight: isSelected ? 600 : 400,
            }}
          >
            {row.label}
          </div>
        );
      })}
    </div>
  );
};

const Controls: React.FC<Pick<StorybookUiProps, "unit" | "variantProgress" | "accent">> = ({
  unit,
  variantProgress,
  accent,
}) => {
  const selected = Math.min(VARIANTS.length - 1, Math.floor(variantProgress * VARIANTS.length));

  return (
    <div
      style={{
        width: unit * 22,
        borderLeft: `${unit * 0.12}px solid ${brand.border}`,
        padding: unit * 1.4,
        display: "flex",
        flexDirection: "column",
        gap: unit * 1.1,
      }}
    >
      <div
        style={{
          fontSize: unit * 1.05,
          letterSpacing: unit * 0.06,
          textTransform: "uppercase",
          color: brand.mutedText,
        }}
      >
        Controls
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: unit * 0.5 }}>
        <div style={{ fontSize: unit * 1.15, color: brand.mutedText, fontFamily: brand.mono }}>
          variant
        </div>
        {VARIANTS.map((variant, index) => (
          <div
            key={variant}
            style={{
              display: "flex",
              alignItems: "center",
              gap: unit * 0.7,
              padding: `${unit * 0.4}px ${unit * 0.6}px`,
              borderRadius: unit * 0.5,
              backgroundColor: index === selected ? brand.muted : "transparent",
            }}
          >
            <div
              style={{
                width: unit * 1.1,
                height: unit * 1.1,
                borderRadius: unit * 0.55,
                border: `${unit * 0.15}px solid ${index === selected ? accent : brand.border}`,
                backgroundColor: index === selected ? accent : "transparent",
              }}
            />
            <div
              style={{
                fontSize: unit * 1.25,
                fontFamily: brand.mono,
                color: index === selected ? brand.text : brand.mutedText,
              }}
            >
              {variant}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: unit * 0.5 }}>
        <div style={{ fontSize: unit * 1.15, color: brand.mutedText, fontFamily: brand.mono }}>
          disabled
        </div>
        <div
          style={{
            width: unit * 3.4,
            height: unit * 1.8,
            borderRadius: unit * 0.9,
            backgroundColor: brand.muted,
            border: `${unit * 0.12}px solid ${brand.border}`,
            display: "flex",
            alignItems: "center",
            padding: unit * 0.2,
          }}
        >
          <div
            style={{
              width: unit * 1.4,
              height: unit * 1.4,
              borderRadius: unit * 0.7,
              backgroundColor: brand.mutedText,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const StateGrid: React.FC<{ unit: number; progress: number; accent: string }> = ({
  unit,
  progress,
  accent,
}) => (
  <div
    style={{
      display: "flex",
      gap: unit * 1.2,
      marginTop: unit * 2,
      opacity: progress,
      transform: `translateY(${interpolate(progress, [0, 1], [unit * 1.5, 0])}px)`,
    }}
  >
    {STATES.map((state, index) => {
      const reveal = interpolate(
        progress,
        [index / STATES.length, (index + 1) / STATES.length],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
      );

      return (
        <div
          key={state.label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: unit * 0.6,
            opacity: reveal,
          }}
        >
          <MockButton
            unit={unit * 0.85}
            label="Save"
            variant="primary"
            accent={accent}
            opacity={state.opacity}
          />
          <div style={{ fontSize: unit * 0.95, color: brand.mutedText, fontFamily: brand.mono }}>
            {state.label}
          </div>
        </div>
      );
    })}
  </div>
);

export const StorybookUi: React.FC<StorybookUiProps> = ({
  unit,
  selectedIndex,
  variantProgress,
  statesProgress,
  canvasHeight,
  accent,
}) => {
  const variant = VARIANTS[
    Math.min(VARIANTS.length - 1, Math.floor(variantProgress * VARIANTS.length))
  ] as (typeof VARIANTS)[number];
  // Nudge the preview on each control change, so the canvas visibly reacts.
  const pulse = 1 + 0.06 * Math.sin(variantProgress * VARIANTS.length * Math.PI);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: unit * 1.4,
        overflow: "hidden",
        backgroundColor: brand.surface,
        border: `${unit * 0.12}px solid ${brand.border}`,
        boxShadow: `0 ${unit * 2}px ${unit * 5}px rgba(0,0,0,0.45)`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: unit * 0.7,
          padding: unit * 1.1,
          borderBottom: `${unit * 0.12}px solid ${brand.border}`,
        }}
      >
        {[brand.destructive, accent, brand.secondary].map((color) => (
          <div
            key={color}
            style={{
              width: unit * 0.9,
              height: unit * 0.9,
              borderRadius: unit * 0.45,
              backgroundColor: color,
            }}
          />
        ))}
        <div
          style={{
            marginLeft: unit * 0.8,
            fontSize: unit * 1.1,
            color: brand.mutedText,
            fontFamily: brand.mono,
          }}
        >
          storybook
        </div>
      </div>
      <div style={{ display: "flex", minHeight: canvasHeight }}>
        <Sidebar unit={unit} selectedIndex={selectedIndex} accent={accent} />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: unit * 2,
            backgroundColor: brand.background,
          }}
        >
          <MockButton unit={unit * 1.6} label="Save" variant={variant} accent={accent} scale={pulse} />
          <StateGrid unit={unit} progress={statesProgress} accent={accent} />
        </div>
        <Controls unit={unit} variantProgress={variantProgress} accent={accent} />
      </div>
    </div>
  );
};
