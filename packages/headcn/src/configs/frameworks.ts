export interface Frameworks {
  [key: string]: {
    name: string
    label: string
    links: {
      installation: string
      tailwind: string
    }
  }
}

export const FRAMEWORKS: Frameworks = {
  "next-app": {
    name: "next-app",
    label: "Next.js",
    links: {
      installation: "https://ui.shadcn.com/docs/installation/next",
      tailwind: "https://tailwindcss.com/docs/guides/nextjs",
    },
  },
  "next-pages": {
    name: "next-pages",
    label: "Next.js",
    links: {
      installation: "https://ui.shadcn.com/docs/installation/next",
      tailwind: "https://tailwindcss.com/docs/guides/nextjs",
    },
  },
  manual: {
    name: "manual",
    label: "Manual",
    links: {
      installation: "https://ui.shadcn.com/docs/installation/manual",
      tailwind: "https://tailwindcss.com/docs/installation",
    },
  },
}
