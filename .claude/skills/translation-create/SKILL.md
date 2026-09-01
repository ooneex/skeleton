---
name: translation-create
description: Generate a new translation class with its test file and a sibling translations.yml dictionary, then fill in the translations.
when_to_use: Use when creating a translation that extends the Translation base class from @talosjs/translation (localized, interpolated, pluralized messages).
model: sonnet
effort: low
allowed-tools: Bash(talos translation:create *), Bash(talos project:check *), Read, Edit, Write, Grep, Glob
argument-hint: '[--name=<Name>] [--module=<module>]'
---

# Make Translation Class

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos project:check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (e.g. once extracted into a shared package). Check both roots before assuming a path is missing.

Generate a translation class, its test file, and a sibling `translations.yml` dictionary, then complete the dictionary. Follow the `talos-scaffold` skill (run-from-root, `--name`/`--module` inference, lint/format, conventions); this covers only the translation-specific parts.

## 1. Infer options, then run the generator

- `--name` — class name from its domain ("translations for the dashboard" → `Dashboard`). Any casing; the CLI normalizes to PascalCase and appends the `Translation` suffix, so omit the suffix.

```bash
talos translation:create --name=<name> --module=<module>
```

Creates `modules/<module>/src/translations/<Name>Translation.ts`, a sibling `translations.yml` (only if absent), and the test file. The class loads `translations.yml` as its dictionary, so translation classes in the same folder share that file.

## 2. Complete the dictionary

Check `modules/<module>/<module>.yml` for a `locales:` list (declared on `api`, `microservice`, and `spa` module types, e.g. `locales: [en, fr]`) — that's the locale set every key must cover, beyond the `en` source. Edit `modules/<module>/src/translations/translations.yml` and add the keys the domain needs:

- Nested keys use dot notation: `trans("user.profile.name", ...)`.
- Each leaf is an object keyed by `LocaleType` (`en`, `fr`, ...); `en` is the fallback. Fill every locale from the module's `locales:` list (write `en` yourself, then dispatch `/translation-translate` or the `translation-translator` agent to fill the rest — don't leave declared locales empty).
- Interpolation uses `{{ param }}` placeholders, filled via `params`.
- Pluralization uses sibling keys selected by `count`: `<key>` (singular), `<key>_plural` (count > 1 or < 0), `<key>_zero` (optional).

```yaml
user:
  profile:
    name:
      en: "Full name"
      fr: "Nom complet"
notifications:
  unread:
    en: "You have {{ count }} unread notification"
    fr: "Vous avez {{ count }} notification non lue"
  unread_plural:
    en: "You have {{ count }} unread notifications"
    fr: "Vous avez {{ count }} notifications non lues"
```

## 3. Complete the translation class

Read `modules/<module>/src/translations/<Name>Translation.ts`. Set `getName()` to a stable snake_case domain identifier; keep `getDict()` loading the sibling `translations.yml`.

```typescript
import type { TranslationDictType } from "@talosjs/translation";
import { decorator, Translation } from "@talosjs/translation";
import dict from "./translations.yml";

@decorator.translation()
export class <Name>Translation extends Translation {
  public getName = (): string => "<snake_name>";

  public getDict = (): TranslationDictType => dict as TranslationDictType;
}
```

## 4. Complete the test file

Read and replace `modules/<module>/tests/translations/<Name>Translation.spec.ts`. Cover: class identity (`name.endsWith("Translation")`), `getName` returns a non-empty string, `getDict` returns an object, `has`/`trans` exist. After filling the dictionary, add assertions for real keys — `en` fallback, interpolation with `params`, pluralization with `count`.

## 5. Lint, format, and test

```bash
talos project:check --strict --logs
```

Fix every failure before completing.
