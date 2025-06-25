import DemoSection from "./_components/demo-section"
import HeroSection from "./_components/hero-section"

export default function Page() {
  return (
    <>
      {/* lines */}
      <div className="pointer-events-none absolute inset-0 px-4 sm:px-6">
        <div className="pointer-events-none mx-auto grid size-full max-w-325 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border-x"></div>
          <div className="hidden border-x sm:block"></div>
          <div className="hidden border-x lg:block"></div>
        </div>
      </div>
      {/* lines */}
      <HeroSection />
      <DemoSection />
    </>
  )
}
