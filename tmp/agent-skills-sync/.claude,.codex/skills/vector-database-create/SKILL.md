---
name: vector-database-create
description: Generate a new vector database class with its test file, then complete the generated code.
when_to_use: Use when creating a new vector database that extends AbstractVectorDatabase from @talosjs/rag.
model: sonnet
effort: medium
allowed-tools: Bash(talos vector-database:create *), Bash(talos project:check *), Read, Edit, Write, Grep, Glob
argument-hint: '[--name=<Name>] [--module=<module>]'
---

# Make Vector Database Class

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos project:check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

Generate a vector database class and test file, then complete the implementation. This covers only the vector-database-specific parts.

**Rules that apply throughout:**
- **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (e.g. once extracted into a shared package). Check both roots; every `modules/<module>/...` path applies equally under `packages/<module>/...`.
- **Shared workflow:** follow the `talos-scaffold` skill for run-from-root, `--name`/`--module` inference, module registration, lint/format, and conventions.

## Steps

### 1. Infer options, then run the generator

```bash
talos vector-database:create --name=<name> --module=<module>
```

- `--name` — vector database class name, from what it indexes ("a vector store for embeddings" → `Embedding`). Any casing; the CLI normalizes to PascalCase and appends the `VectorDatabase` suffix, so omit it.

### 2. Complete the vector database class

Read `modules/<module>/src/databases/<Name>VectorDatabase.ts`, then:

- Set `getDatabaseUri()` to the actual LanceDB database path
- Pick the embedding model — default to `{ model: "qwen3-embedding-8b" }`, or pass `{ model: "text-embedding-3-large" }` (or another OpenAI model) for OpenAI embeddings instead — both are served through OpenRouter's single `OpenrouterEmbeddingFunction`, so only `OPENROUTER_API_KEY` is needed
- Define custom metadata fields under `DataType["metadata"]` — the runtime schema always stores a single `metadata` column; the type param is what gives `metadata.<field>` filters their shape

```typescript
import { AbstractVectorDatabase, decorator } from "@talosjs/rag";
import type { EmbeddingModelType, FieldValueType } from "@talosjs/rag";
import { Utf8 } from "apache-arrow";

type DataType = {
  metadata: {
    name: string;
  };
};

const DEFAULT_EMBEDDING_MODEL: EmbeddingModelType = { model: "qwen3-embedding-8b" };

@decorator.vectorDatabase()
export class <Name>VectorDatabase extends AbstractVectorDatabase<DataType> {
  public constructor(embeddingModel: EmbeddingModelType = DEFAULT_EMBEDDING_MODEL) {
    super(embeddingModel);
  }

  public getDatabaseUri(): string {
    return "";
  }

  public getSchema(): { [K in keyof DataType]: FieldValueType } {
    return {
      metadata: new Utf8(),
    };
  }
}
```

`getEmbeddingModel()` is inherited from `AbstractVectorDatabase` — it just returns whatever was passed to the constructor. Don't override it; pick the provider by passing (or defaulting) the constructor argument instead.

### 3. Complete the test file

Read and replace `modules/<module>/tests/databases/<Name>VectorDatabase.spec.ts`:

**Coverage:** class identity (`name.endsWith("VectorDatabase")`), `getDatabaseUri` exists and returns a string, the default embedding model matches the constructor's default, an explicit embedding model argument overrides it, `getSchema` exists and returns a non-empty object with keys matching `DataType` fields, instance isolation.

```typescript
import { describe, expect, test } from "bun:test";
import { <Name>VectorDatabase } from "@/databases/<Name>VectorDatabase";

describe("<Name>VectorDatabase", () => {
  test("should have class name ending with 'VectorDatabase'", () => {
    expect(<Name>VectorDatabase.name.endsWith("VectorDatabase")).toBe(true);
  });

  test("should have 'getDatabaseUri' method", () => {
    expect(typeof <Name>VectorDatabase.prototype.getDatabaseUri).toBe("function");
  });

  test("'getDatabaseUri' should return a string", () => {
    const db = new <Name>VectorDatabase();
    expect(typeof db.getDatabaseUri()).toBe("string");
  });

  test("should default to the qwen embedding model", () => {
    const db = new <Name>VectorDatabase();
    expect(db.getEmbeddingModel()).toEqual({ model: "qwen3-embedding-8b" });
  });

  test("should accept an embedding model override", () => {
    const db = new <Name>VectorDatabase({ model: "text-embedding-3-small" });
    expect(db.getEmbeddingModel()).toEqual({ model: "text-embedding-3-small" });
  });

  test("should have 'getSchema' method", () => {
    expect(typeof <Name>VectorDatabase.prototype.getSchema).toBe("function");
  });

  test("'getSchema' keys should match the DataType fields", () => {
    const db = new <Name>VectorDatabase();
    const schema = db.getSchema();
    // Update this list to match the actual DataType fields defined in the class
    const expectedFields = ["metadata"];
    for (const field of expectedFields) {
      expect(Object.keys(schema)).toContain(field);
    }
  });

  test("should produce independent instances", () => {
    const a = new <Name>VectorDatabase();
    const b = new <Name>VectorDatabase();
    expect(a).not.toBe(b);
  });
});
```

### 4. Lint, format, and test

```bash
talos project:check --strict --logs
```

Fix every failure before completing.
