import { type ConfigLoaderSuccessResult, createMatchPath } from "tsconfig-paths"

/**
 * Function that takes alias import path and returns a resolved path.
 * Works for ".ts,.tsx,.js,.jsx,.css" extensions.
 *
 * @param importPath Resolved alias path.
 * @param config Config object with resolved paths.
 * @returns A promise which resolves to a path or undefined.
 */
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
