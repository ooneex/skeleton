import { describe, expect, test } from "bun:test";
import { SharedDatabase } from "@module/shared/databases/SharedDatabase";
import type { AppEnv } from "@talosjs/app-env";
import { DatabaseException } from "@talosjs/database";

const envWith = (url: string | undefined): AppEnv => ({ DATABASE_URL: url }) as AppEnv;

describe("SharedDatabase", () => {
  test("should build a postgres data source from DATABASE_URL", () => {
    const database = new SharedDatabase(envWith("postgres://user:pass@localhost:5432/skeleton"));

    const source = database.getSource();

    expect(source.options.type).toBe("postgres");
    expect(source.isInitialized).toBe(false);
  });

  test("should return the same data source on every call", () => {
    const database = new SharedDatabase(envWith("postgres://user:pass@localhost:5432/skeleton"));

    expect(database.getSource()).toBe(database.getSource());
  });

  test("should throw a CONNECTION_FAILED exception when DATABASE_URL is missing", () => {
    const database = new SharedDatabase(envWith(undefined));

    expect(() => database.getSource()).toThrow(DatabaseException);
    expect(() => database.getSource()).toThrow(/DATABASE_URL/);
  });
});
