import { z } from "zod";

export const registryItemTypeSchema = z.enum([
  "registry:ui",
  "registry:example",
]);

export const registryItemFileSchema = z.object({
  path: z.string(),
  content: z.string().optional(),
  type: registryItemTypeSchema,
});

export const registryItemSchema = z.object({
  name: z.string(),
  type: registryItemTypeSchema,
  files: z.array(registryItemFileSchema),
});

export const registrySchema = z.object({
  name: z.string(),
  homepage: z.string(),
  items: z.array(registryItemSchema),
});

export type RegistryItem = z.infer<typeof registryItemSchema>;
export type Registry = z.infer<typeof registrySchema>;
