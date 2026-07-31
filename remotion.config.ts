import { Config } from "@remotion/cli/config";

// This repo pins TypeScript 7, whose native API drops `readConfigFile`/`sys` —
// the shape Remotion's esbuild-loader expects. Supplying `tsconfigRaw` up front
// stops the loader from reading tsconfig.json through that removed API.
const tsconfigRaw = {
  compilerOptions: {
    jsx: "react-jsx",
    target: "es2020",
    module: "esnext",
    moduleResolution: "bundler",
  },
} as const;

Config.overrideWebpackConfig((config) => ({
  ...config,
  module: {
    ...config.module,
    rules: (config.module?.rules ?? []).map((rule) => {
      if (typeof rule !== "object" || rule === null || !("use" in rule)) {
        return rule;
      }

      const use = Array.isArray(rule.use) ? rule.use : [rule.use];

      return {
        ...rule,
        use: use.map((entry) =>
          typeof entry === "object" &&
          entry !== null &&
          typeof entry.loader === "string" &&
          entry.loader.includes("esbuild-loader")
            ? { ...entry, options: { ...(entry.options as object), tsconfigRaw } }
            : entry,
        ),
      };
    }),
  },
}));
