import { docs } from "@/.source"
import { loader } from "fumadocs-core/source"

export const source = loader({
  baseUrl: "/ui/docs",
  source: docs.toFumadocsSource(),
})
