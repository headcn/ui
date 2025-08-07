import { type ConfigLoaderSuccessResult, createMatchPath } from "tsconfig-paths"

export async function resolveTsImport(
  importPath: string,
  config: ConfigLoaderSuccessResult
): Promise<string | undefined> {
  return createMatchPath(config.absoluteBaseUrl, config.paths)(
    importPath,
    undefined,
    () => true,
    ["ts", ".tsx", ".js", ".jsx", ".css"]
  )
}
