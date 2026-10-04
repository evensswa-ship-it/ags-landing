type Item = { question: string; answer: string }

export default function Faq({ items }: { items: Item[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <span className="t-h3">{item.question}</span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 shrink-0 fill-none stroke-mist stroke-[1.75] transition-transform duration-200 group-open:rotate-45"
            >
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </summary>
          <p className="t-lede max-w-[44rem] pb-7">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
