export default function CockpitTeaser() {
  return (
    <section className="bg-[#010310] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="relative w-full overflow-hidden rounded-[12px] border border-[#1A2E55] pb-[66.67%] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
          <iframe
            src="/cockpit-teaser.html"
            className="absolute inset-0 h-full w-full"
            style={{ border: 'none' }}
            title="AGS Cockpit Teaser"
            scrolling="no"
          />
        </div>
      </div>
    </section>
  )
}
