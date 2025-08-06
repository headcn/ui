import { z } from "zod"

export const registryItemTypeSchema = z.enum([
  "registry:ui",
  "registry:example",
  "registry:lib",
  "registry:style",
])

export const registryItemFileSchema = z.object({
  path: z.string(),
  content: z.string().optional(),
  type: registryItemTypeSchema,
})

export const registryItemSchema = z.object({
  name: z.string(),
  type: registryItemTypeSchema,
  depends: z.array(z.string()).optional(),
  registryDepends: z.array(z.string()).optional(),
  files: z.array(registryItemFileSchema).optional(),
})

export const registrySchema = z.object({
  name: z.string(),
  homepage: z.string(),
  items: z.array(registryItemSchema),
})

export type RegistryItem = z.infer<typeof registryItemSchema>
export type Registry = z.infer<typeof registrySchema>
