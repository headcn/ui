import DemoSection from "./_components/demo-section"
import HeroSection from "./_components/hero-section"

export default function Page() {
  return (
    <>
      {/* lines */}
      <div className="pointer-events-none absolute inset-0 px-6">
        <div className="pointer-events-none mx-auto grid size-full max-w-325 grid-cols-3 gap-4">
          <div className="border-x"></div>
          <div className="border-x"></div>
          <div className="border-x"></div>
        </div>
      </div>
      {/* lines */}
      <HeroSection />
      <DemoSection />
    </>
  )
}
