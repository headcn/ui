export default function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 px-4 sm:px-6">
        <div className="mx-auto grid size-full max-w-325 grid-cols-12 gap-4">
          <div className="col-span-3 border-x"></div>
          <div className="col-span-6 border-x"></div>
          <div className="col-span-3 border-x"></div>
        </div>
      </div>
      {children}
    </>
  )
}
