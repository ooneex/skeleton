import { AppEnv } from "@talosjs/app-env";
import { inject } from "@talosjs/container";
import { DatabaseException, DataSource, decorator, SqlDatabase } from "@talosjs/database";

@decorator.database()
export class MainDatabase extends SqlDatabase {
  public constructor(@inject(AppEnv) private readonly env: AppEnv) {
    super();
  }

  public getSource(_database?: string): DataSource {
    const url = this.env.DATABASE_URL ?? "";

    if (!url) {
      throw new DatabaseException(
        "Database URL is required. Please provide a URL either through the constructor options or set the DATABASE_URL environment variable.",
        "CONNECTION_FAILED",
      );
    }

    return this.sharedSource(url, () => {
      return new DataSource({
        synchronize: false,
        entities: this.registeredEntities(),
        extra: {
          max: 10,
          // idleTimeoutMillis: 30000,
        },
        url,
        type: "postgres",
      });
    });
  }
}
