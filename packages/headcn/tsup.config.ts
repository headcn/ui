import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["esm"],
  sourcemap: true,
  minify: true,
  target: "esnext",
  dts: true,
  clean: true,
  outDir: "dist",
  treeshake: true,
});
