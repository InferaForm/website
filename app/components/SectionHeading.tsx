export default function SectionHeading({ label, title, desc }:{ label:string, title:string, desc?:string }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <div className="text-brand-400 font-semibold tracking-wide uppercase text-xs">{label}</div>
      <h2 className="text-3xl md:text-4xl font-semibold mt-2">{title}</h2>
      {desc && <p className="text-gray-400 mt-3">{desc}</p>}
    </div>
  )
}
