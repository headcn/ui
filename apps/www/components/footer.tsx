export default function Footer() {
  return (
    <footer className="my-10 flex flex-col items-center justify-center gap-1 text-sm">
      <span>
        Built by{" "}
        <a
          href="https://x.com/stabldev"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          stabldev
        </a>
      </span>
      <span>
        The source code is available on{" "}
        <a
          href="https://github.com/headcn/ui"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          GitHub
        </a>
      </span>
    </footer>
  )
}
