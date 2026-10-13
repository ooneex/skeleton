import { describe, expect, test } from "bun:test";
import { MainDatabase } from "@module/shared/databases/MainDatabase";
import type { AppEnv } from "@talosjs/app-env";
import { DatabaseException } from "@talosjs/database";

const env = (url?: string): AppEnv => ({ DATABASE_URL: url }) as unknown as AppEnv;

describe("MainDatabase", () => {
  test("should have class name ending with 'Database'", () => {
    expect(MainDatabase.name.endsWith("Database")).toBe(true);
  });

  test("getSource throws a DatabaseException when DATABASE_URL is missing", () => {
    const database = new MainDatabase(env());
    expect(() => database.getSource()).toThrow(DatabaseException);
  });

  test("getSource builds a postgres source from DATABASE_URL and reuses it", () => {
    const database = new MainDatabase(env("postgresql://talos:talos@localhost:5432/talos"));
    const source = database.getSource();
    expect(source.options.type).toBe("postgres");
    expect(database.getSource()).toBe(source);
  });

  test("getSource maps the entities registered on the class", () => {
    class SampleEntity {}
    MainDatabase.registerEntities(SampleEntity);
    const database = new MainDatabase(env("postgresql://talos:talos@localhost:5432/registry"));
    expect(database.getSource().options.entities).toContain(SampleEntity);
  });
});
