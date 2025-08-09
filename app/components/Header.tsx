'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = [
    { href: '#solutions', label: 'Solutions' },
    { href: '#process', label: 'Process' },
    { href: '#vision', label: 'Vision' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : ''}`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          <Logo className="h-8 w-8 text-white" />
          <span className="font-semibold text-white text-lg">Inferaform</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map(n => (
            <a key={n.href} href={n.href} className="text-gray-300 hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary text-sm">Start a Project →</a>
      </div>
    </header>
  )
}
