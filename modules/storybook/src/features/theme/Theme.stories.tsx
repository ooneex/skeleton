import { ThemeSwitcher, type ThemeType } from "@module/design/components/theme";
import { themeGroups } from "@module/design/components/theme/ThemeSwitcherOption";
import type { Meta } from "../../shared/story";

const themeFamilyUsage = {
  "clerkship-mode": "clinical training flows and ward-style learner work",
  "exam-clinic": "assessment and mock-exam experiences",
  "osce-station": "station-based practice and timed checklists",
  "study-ward": "review sessions and study-heavy learner dashboards",
  "residency-prep": "career-prep and transition-to-practice journeys",
  "faculty-desk": "teaching dashboards and educator administration",
  "mentor-ward": "supervision flows and mentor-led review work",
  "teaching-ward": "instructional content and classroom-like medical learning",
  "lecture-hall": "presentation-led experiences and lesson delivery",
  "case-builder": "authoring screens for scenarios, cases, and structured content",
  "consult-room": "patient-facing clinical work in bright, calm contexts",
  "on-call-suite": "urgent operational work and overnight workflows",
  "grand-rounds": "presentation-heavy clinical discussions and review sessions",
  "diagnostic-dash": "data-forward analysis and decision-support screens",
  "clinic-day": "everyday care workflows with a practical, approachable tone",
  "med-ambassador": "community-facing advocacy and representation work",
  "ambassador-lounge": "relationship-building spaces and member hubs",
  "ambassador-rounds": "outreach updates, recaps, and status sharing",
  "ambassador-suite": "premium ambassador programs and curated admin spaces",
  "faculty-ambassador": "staff-led outreach and institutional partnerships",
  "campus-ambassador": "student recruitment and campus community programs",
  "clinical-ambassador": "healthcare-partner outreach and clinical brand moments",
  "global-ambassador": "international programs and multi-region representation",
  "brand-ambassador": "marketing-forward advocacy and promotional campaigns",
  "partner-ambassador": "co-branded relationships and external collaborations",
  "med-vanguard": "forward-looking flagship experiences with strong product energy",
  "med-advocate": "mission-led experiences that should feel supportive and assertive",
  "clinical-champion": "care-quality wins, excellence programs, and standout outcomes",
  "knowledge-champion": "learning achievements and expertise-focused experiences",
  "care-champion": "patient-centered success moments and trust-building surfaces",
  "teaching-champion": "educator recognition and instructional achievement flows",
  "insight-leader": "advisory, strategy, and thought-leadership spaces",
  "mentor-circle": "peer support, coaching groups, and collaborative guidance",
  "med-mentor": "one-to-one mentorship and growth-focused journeys",
  "mentor-council": "structured mentor governance and leadership coordination",
} as const satisfies Record<string, string>;

const getThemeUsage = (theme: ThemeType, scheme?: "light" | "dark") => {
  if (theme === "system") {
    return "Follows the device preference automatically. Use as the default when the interface should track the user's OS theme without asking them to choose upfront.";
  }

  if (theme === "light") {
    return "Neutral bright palette with familiar product contrast. Use as the everyday default when the UI should feel open, crisp, and broadly conventional.";
  }

  if (theme === "dark") {
    return "Neutral dark palette with reduced glare. Use for low-light environments, prolonged reading, or users who prefer a darker chrome.";
  }

  const family = theme.replace(/-(light|dark)$/, "");
  const surface = scheme === "dark" ? "dark" : "light";
  const context = themeFamilyUsage[family as keyof typeof themeFamilyUsage];

  return `${surface === "dark" ? "Dark" : "Light"} branded palette for ${context}. Use when that audience or workflow should feel distinct while staying readable on a ${surface} surface.`;
};

const themeOptions = themeGroups.flatMap(({ themes }) =>
  themes.map((theme) => ({
    name: theme.code,
    usage: getThemeUsage(theme.code, "scheme" in theme ? theme.scheme : undefined),
  })),
);

export const meta = {
  title: "Theme",
  group: "Components",
  tags: [],
  component: ThemeSwitcher,
  usage: [
    "**ThemeSwitcher** is the app's theme picker. It renders the active theme as an icon plus label inside a `Select` trigger, groups the full catalog into base, student, teacher, doctor, ambassador, champion, and mentor collections, and applies the chosen `data-theme` to the document while persisting the selection for the next visit.",
    "",
    "**How to use it** — mount it anywhere the user should be able to change the interface theme: a header utility area, account menu, or appearance settings screen. Use `defaultValue` for a self-managed picker, or `value` + `onChange` when your app keeps the theme in shared state. Match `size` to the surrounding chrome and give the trigger a wider `className` when you want the full label to breathe.",
    "",
    "**When to use it** — when the user is choosing how the whole UI should look, including switching between system, light, dark, and the branded medical theme families. It is especially useful in persistent navigation or a preferences page where the choice should be discoverable and reversible.",
    "",
    "**When not to use it** — do not use it for content filters, status pills, or any selection that is not the global visual theme. If the product only offers a binary light/dark toggle with no catalog, a dedicated switch can read faster than the full dropdown.",
  ].join("\n"),
  props: [
    {
      name: "defaultValue",
      control: "select",
      options: themeOptions,
      default: "system",
    },
    {
      name: "size",
      control: "select",
      options: [
        {
          name: "xs",
          usage:
            "Smallest trigger. Use in dense headers and utility bars where the switcher sits beside several compact controls.",
        },
        {
          name: "sm",
          usage: "Compact default. Use in standard nav bars, account menus, and side panels.",
        },
        {
          name: "md",
          usage: "Comfortable field size. Use on settings pages where appearance is a first-class preference.",
        },
        {
          name: "lg",
          usage: "Largest trigger. Use on onboarding or profile pages where theme choice gets prominent space.",
        },
      ],
      default: "sm",
    },
    {
      name: "className",
      default: "min-w-56",
    },
    {
      name: "disabled",
      control: "boolean",
      default: false,
    },
    {
      name: "onChange",
      callback: (theme: ThemeType) => theme,
    },
  ],
} satisfies Meta<typeof ThemeSwitcher>;
