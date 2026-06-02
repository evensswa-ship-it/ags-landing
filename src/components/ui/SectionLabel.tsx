export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-[var(--font-montserrat)] text-[10px] font-medium uppercase tracking-[0.22em] text-[#1660EC]">
      {children}
    </p>
  )
}
