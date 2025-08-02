import fs from "fs/promises"

/**
 * Check if the given path exists or not by try to access it using fs module
 * and return the result in boolean.
 *
 * @param path Path to file/directory to check.
 * @returns Boolean wheather the path exits or not.
 */
export async function pathExists(path: string): Promise<boolean> {
  try {
    await fs.access(path)
    return true
  } catch {
    return false
  }
}
