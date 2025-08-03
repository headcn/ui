import { z } from "zod"

export const configSchema = z.object({
  $schema: z.string().optional(),
  style: z.string(),
  rsc: z.coerce.boolean().default(true),
  tsx: z.coerce.boolean().default(true),
  tailwind: z.object({
    css: z.string(),
    prefix: z.string(),
  }),
  iconLibrary: z.string().optional(),
  aliases: z.object({
    components: z.string(),
    utils: z.string(),
    ui: z.string().optional(),
    lib: z.string().optional(),
  }),
})

export type Config = z.infer<typeof configSchema>
