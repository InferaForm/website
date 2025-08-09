export default function Logo({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Inferaform">
      <path d="M60 9c10 0 18 8 18 18 0 5-2 9-5 12l0 0c4 3 7 8 7 14 0 10-8 18-18 18-4 0-7-1-10-3-3 9-12 15-22 15-13 0-24-11-24-24 0-10 6-18 15-22-2-3-3-6-3-10 0-10 8-18 18-18 6 0 11 3 14 7 3-3 7-5 12-5Z" fill="currentColor" opacity="0.16"/>
      <circle cx="62" cy="28" r="7" fill="white"/>
      <circle cx="34" cy="56" r="7" fill="white"/>
      <circle cx="62" cy="56" r="7" fill="white"/>
      <path d="M37 54 L58 30" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.9"/>
      <path d="M37 58 L58 54" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.9"/>
    </svg>
  )
}
