import { codeToHtml } from "shiki"

export async function highlightCode(code: string, language: string = "tsx") {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "github-dark",
    transformers: [
      {
        pre(node) {
          node.properties["class"] = "bg-transparent! rounded-none p-4 m-0!"
        },
        code(node) {
          node.properties["data-line-numbers"] = ""
        },
        line(node) {
          node.properties["data-line"] = ""
        },
      },
    ],
  })

  return html
}
