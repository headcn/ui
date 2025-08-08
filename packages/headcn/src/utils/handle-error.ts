import { logger } from "@/src/utils/logger"
import { z } from "zod"

/**
 * Function that gracefully handles unknown errors.
 * Handles string, zod and exception errors and exit program.
 *
 * @param error Unknown error instance to handle.
 */
export function handleError(error: unknown) {
  logger.break()
  logger.error(
    "Something went wrong. Please check the error below for more details."
  )
  logger.error("If the problem persists, please open an issue on GitHub.")
  logger.break()
  if (typeof error === "string") {
    logger.error(error)
  } else if (error instanceof z.ZodError) {
    logger.error("Validation failed:")
    logger.error(z.treeifyError(error).errors.join("\n"))
  } else if (error instanceof Error) {
    logger.error(error.message)
  }

  logger.break()
  process.exit(1)
}
