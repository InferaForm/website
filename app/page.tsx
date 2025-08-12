'use client'
import { motion } from 'framer-motion'
import Header from './components/Header'
import SectionHeading from './components/SectionHeading'
import Logo from './components/Logo'
import { useState } from 'react'

export default function Page() {
  const [status, setStatus] = useState<string | null>(null)

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('Sending...')
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const out = await res.json()
      if (res.ok) setStatus('Sent! We will get back to you shortly.')
      else setStatus(out?.error ?? 'Something went wrong.')
    } catch (err:any) {
      setStatus(err?.message ?? 'Network error.')
    }
  }

  return (
    <>
      <Header />
      {/* HERO */}
      <section className="section pt-36 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
            animate={{ y: [0,-10,0], x: [0,10,0], scale: [1,1.05,1] }}
            transition={{ duration: 16, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-20 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl"
            animate={{ y: [0,15,0], x: [0,-10,0], scale: [1,0.97,1] }}
            transition={{ duration: 18, repeat: Infinity }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
            </div>
            <div className="flex items-center gap-3 mb-6">
            </div>
            <div className="flex items-center gap-3 mb-6">
            </div>
            <div className="flex items-center gap-3 mb-6">
            </div>
            <div className="flex items-center gap-3 mb-6">
            </div>
            <div className="flex items-center gap-3 mb-6">
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Crafting intelligent systems<br/>that scale with you.
            </h1>
            <p className="text-gray-400 mt-6 text-lg">
              We design and implement AI-powered workflows that automate work, surface insights, and move KPIs—without breaking your stack.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="btn btn-primary">Book a Discovery Call</a>
              <a href="#solutions" className="btn btn-ghost">Explore Solutions</a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="card p-4">Avg. time to first value <div className="text-white font-semibold text-xl">14 days</div></div>
              <div className="card p-4">Typical ROI window <div className="text-white font-semibold text-xl">90 days</div></div>
            </div>
          </div>
          <motion.div className="card p-6 md:p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="absolute inset-0 pointer-events-none">
              <motion.div className="absolute -top-10 -right-10 h-52 w-52 rounded-full bg-brand-500/20 blur-2xl"
                animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: 'linear' }} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Implementation Stacks</h3>
            <ul className="grid grid-cols-2 gap-3 text-gray-300">
              <li className="card p-3">CRMs & ERPs</li>
              <li className="card p-3">Warehouses (BiqQuery/Snowflake)</li>
              <li className="card p-3">Marketing suites</li>
              <li className="card p-3">Helpdesks</li>
              <li className="card p-3">Internal apps</li>
              <li className="card p-3">Custom APIs</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="section">
        <SectionHeading label="Solutions" title="Where we deliver fast, measurable wins" desc="End-to-end systems tailored to your reality—no bloat, just outcomes." />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            {title:'Lead Intelligence & Routing',desc:'Enrich, score, triage, and route leads in real-time to boost conversion.',icon:'⚡'},
            {title:'Support Copilots',desc:'AI copilots that draft, route, and summarize to slash handling time.',icon:'🤝'},
            {title:'Marketing Personalization',desc:'Automatic segmentation and dynamic content for higher LTV.',icon:'🎯'},
            {title:'Ops Automation',desc:'Close-the-loop workflows that trigger across your tools.',icon:'🛠️'},
            {title:'Insights & Reporting',desc:'Unified views and alerts across scattered data.',icon:'📊'},
            {title:'Knowledge & Search',desc:'Private, secure retrieval and assistants with clear guardrails.',icon:'🔐'},
          ].map((c,i)=>(
            <motion.div key={i} className="card p-6 hover:shadow-glow transition-shadow"
              whileHover={{ scale: 1.02 }}>
              <div className="text-3xl">{c.icon}</div>
              <h3 className="mt-3 font-semibold text-xl">{c.title}</h3>
              <p className="text-gray-400 mt-2">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section">
        <SectionHeading label="Process" title="A focused path from idea to impact" />
        <ol className="max-w-5xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-sm">
          {[
            {title:'Discovery',desc:'We map your workflows, KPIs, constraints.'},
            {title:'Feasibility',desc:'We validate value, scope, and guardrails.'},
            {title:'Build',desc:'We implement, integrate, and test.'},
            {title:'Iterate',desc:'We measure, tune, and scale.'},
          ].map((s,i)=>(
            <motion.li key={i} className="card p-5" whileHover={{ y: -4 }}>
              <div className="text-brand-400 font-semibold">0{i+1}</div>
              <h4 className="mt-2 text-lg font-semibold">{s.title}</h4>
              <p className="text-gray-400 mt-2">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* VISION */}
      <section id="vision" className="section">
        <SectionHeading label="Vision" title="Intelligence that stays maintainable" desc="Elegant systems, transparent intelligence, and measured impact." />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            {title:'Practical innovation',desc:'Grounded in your reality and stack.'},
            {title:'Elegant systems',desc:'Composable, observable, and documented.'},
            {title:'Transparent intelligence',desc:'Clear prompts, evals, and safeguards.'},
          ].map((c,i)=>(
            <div key={i} className="card p-6">
              <h4 className="text-lg font-semibold">{c.title}</h4>
              <p className="text-gray-400 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <SectionHeading label="FAQ" title="Quick answers" />
        <div className="max-w-4xl mx-auto px-6 divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden">
          {[
            {q:'How fast can we start?',a:'Discovery within a week; first value typically in 14 days.'},
            {q:'Do you replace our tools?',a:'No. We integrate with your stack and fill the gaps.'},
            {q:'Security & privacy?',a:'We use least-privilege, logging, and data minimization by default.'},
          ].map((f,i)=>(
            <details key={i} className="group p-6">
              <summary className="cursor-pointer list-none flex justify-between items-center">
                <span className="font-medium">{f.q}</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="text-gray-400 mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <SectionHeading label="Contact" title="Let’s shape your intelligent system" desc="Tell us about your workflows, tools, and goals." />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <form onSubmit={submitForm} className="card p-6 space-y-4">
            <div>
              <label className="block text-sm mb-1 text-gray-300">Name</label>
              <input name="name" required className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 text-gray-300">Email</label>
                <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500" />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-300">Company</label>
                <input name="company" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 text-gray-300">Preferred Date</label>
                <input type="date" name="date" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-300">Time</label>
                <input type="time" name="time" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-300">What are you trying to achieve?</label>
              <textarea name="goals" rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500" placeholder="Workflows, tools, problems, KPIs..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">Book Discovery Call →</button>
            {status && <p className="text-center text-sm text-gray-300">{status}</p>}
            <p className="text-xs text-gray-500 text-center">Or email us directly: <a className="underline" href="mailto:huzaifa@inferaform.com">huzafa@inferaform.com</a></p>
          </form>

          <div className="card p-6">
            <h3 className="text-xl font-semibold">Why Inferaform</h3>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li>• Practical innovation grounded in your reality.</li>
              <li>• Elegant systems that stay maintainable.</li>
              <li>• Transparent intelligence with clear guardrails.</li>
              <li>• Real-world impact, measured and iterated.</li>
            </ul>
          </div>
        </div>
        <footer className="mt-20 py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Inferaform. All rights reserved.
        </footer>
      </section>
    </>
  )
}
