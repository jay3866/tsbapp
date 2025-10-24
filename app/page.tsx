import Spline from '@splinetool/react-spline/next'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'

export default function Home() {
  return (
    <main className="font-display bg-background-dark text-text-dark">
      <header className="sticky top-0 z-50 flex items-center justify-center border-b border-gray-800/50 bg-background-dark/80 py-3 backdrop-blur-lg">
        <nav className="flex w-full max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-primary to-sky-400 font-extrabold text-background-dark">★</div>
            <h2 className="text-lg font-bold tracking-[-0.015em]">Talk Small Business</h2>
          </div>
          <button className="h-10 min-w-[84px] rounded-lg bg-primary px-4 text-sm font-bold text-white transition-transform hover:scale-105">Request Demo</button>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-14 text-center lg:grid-cols-2 lg:text-left md:py-20">
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">Reclaim 40% of Your Time. Delegate with Voice, Not Logins.</h1>
            <h2 className="text-base leading-normal text-subtext-dark">Our voice-first platform streamlines operations and handles admin without sharing passwords. Focus on growth—let AI handle the rest.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <MovingBorderButton borderRadius="1.5rem" className="bg-primary text-white border-transparent">Start Delegating Today</MovingBorderButton>
            <a href="#agents" className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-700 px-5 text-base font-bold">See How It Works</a>
          </div>
          <p className="text-sm text-subtext-dark">Trusted by 10,000+ Small Businesses</p>
        </div>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-blue-900/40 to-purple-900/40 blur-3xl"></div>
          <div className="spline-shadow spline-float spline-no-interact spline-crop mx-auto w-full max-w-xl">
            <Spline scene="https://prod.spline.design/UOwS6OgTZFp1-aMG/scene.splinecode" className="pointer-events-none" />
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-16 px-6 md:gap-24">
        <section className="flex w-full flex-col gap-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-[-0.015em] md:text-3xl">Stop Drowning in Busywork</h2>
            <p className="mx-auto mt-1 max-w-2xl text-sm text-subtext-dark">You’re losing up to 40% of your day on non-revenue tasks. We give that time back.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-800/60 bg-background-dark/40 p-6">
              <span className="material-symbols-outlined text-red-400" style={{ fontSize: 32 }}>sync_problem</span>
              <p className="mt-3 text-base font-medium">The Old Way: Complex Software & Manual Entry</p>
              <p className="text-sm text-subtext-dark">Juggling apps, logins, and manual data entry that drains your time.</p>
            </div>
            <div className="rounded-xl border border-primary/40 bg-primary/10 p-6">
              <span className="material-symbols-outlined text-green-400" style={{ fontSize: 32 }}>record_voice_over</span>
              <p className="mt-3 text-base font-medium">The TSB Way: Simple Voice Commands</p>
              <p className="text-sm text-subtext-dark">Just talk. Our AI agents understand, integrate, and get the job done for you.</p>
            </div>
          </div>
        </section>

        <section id="agents" className="flex w-full flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-[-0.015em] md:text-4xl">Meet Your AI-Powered Team</h2>
            <p className="mx-auto mt-2 max-w-2xl text-base text-subtext-dark">Three core agents ready to handle your most time-consuming tasks.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="glassmorphism rounded-xl p-6 text-left">
              <span className="material-symbols-outlined rounded-lg bg-primary p-2 text-white" style={{ fontSize: 28, width: 'fit-content' }}>support_agent</span>
              <h3 className="mt-3 text-lg font-bold">Dispatch Agent</h3>
              <p className="text-sm text-subtext-dark">Routing, scheduling, and notifications handled with a single voice command.</p>
            </div>
            <div className="glassmorphism rounded-xl p-6 text-left">
              <span className="material-symbols-outlined rounded-lg bg-primary p-2 text-white" style={{ fontSize: 28, width: 'fit-content' }}>campaign</span>
              <h3 className="mt-3 text-lg font-bold">Marketing Agent</h3>
              <p className="text-sm text-subtext-dark">Launch promos and campaigns faster than ever—just say the word.</p>
            </div>
            <div className="glassmorphism rounded-xl p-6 text-left">
              <span className="material-symbols-outlined rounded-lg bg-primary p-2 text-white" style={{ fontSize: 28, width: 'fit-content' }}>request_quote</span>
              <h3 className="mt-3 text-lg font-bold">Collections Agent</h3>
              <p className="text-sm text-subtext-dark">Automates outreach and follow-ups to get overdue invoices paid.</p>
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col items-center gap-10 text-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-[-0.015em] md:text-3xl">Get Started in Seconds</h2>
            <p className="mx-auto max-w-2xl text-sm text-subtext-dark">No complicated setup wizards. Just talk to your business.</p>
          </div>
          <div className="grid w-full max-w-4xl gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined">phone_iphone</span>
              </div>
              <div>
                <h3 className="font-bold">1. Open App & Talk</h3>
                <p className="text-sm text-subtext-dark">Start a conversation like you would with a human assistant.</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined">model_training</span>
              </div>
              <div>
                <h3 className="font-bold">2. System Learns & Integrates</h3>
                <p className="text-sm text-subtext-dark">Learns your business and connects to your tools with a tap.</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined">task_alt</span>
              </div>
              <div>
                <h3 className="font-bold">3. Delegate & Done</h3>
                <p className="text-sm text-subtext-dark">Agents execute tasks autonomously in the background.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col gap-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-[-0.015em] md:text-3xl">Don't Just Take Our Word For It</h2>
            <p className="mx-auto mt-1 max-w-2xl text-sm text-subtext-dark">Hear from owners already saving hours every week.</p>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-800/60 bg-background-dark/40 p-6">
              <span className="material-symbols-outlined text-primary">format_quote</span>
              <p className="italic text-subtext-dark">"I used to spend evenings catching up on invoicing. Now I just say 'Send all pending invoices' and it’s done. Game changer."</p>
              <div className="mt-3">
                <p className="font-bold">Maria Garcia</p>
                <p className="text-sm text-subtext-dark">Owner, Garcia's Plumbing</p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-800/60 bg-background-dark/40 p-6">
              <span className="material-symbols-outlined text-primary">format_quote</span>
              <p className="italic text-subtext-dark">"The marketing agent is like a dedicated assistant for a fraction of the cost. We launch promotions in minutes."</p>
              <div className="mt-3">
                <p className="font-bold">David Chen</p>
                <p className="text-sm text-subtext-dark">Retail Entrepreneur</p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-800/60 bg-background-dark/40 p-6">
              <span className="material-symbols-outlined text-primary">format_quote</span>
              <p className="italic text-subtext-dark">"Dispatching used to be a nightmare. Now the closest tech is notified instantly with details."</p>
              <div className="mt-3">
                <p className="font-bold">Samantha Jones</p>
                <p className="text-sm text-subtext-dark">Service Business Owner</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full rounded-xl bg-primary/20 p-8 text-center md:p-12">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold tracking-[-0.015em] md:text-3xl">A Smarter Investment for Your Business</h2>
            <p className="mx-auto max-w-2xl text-sm text-subtext-dark">Each agent is designed to replace a $40–65K/year employee, giving you enterprise-level efficiency without the cost.</p>
            <a href="#pricing" className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-5 text-base font-bold text-white transition-transform hover:scale-105">See Pricing & Plans</a>
          </div>
        </section>

        <section id="waitlist" className="relative w-full overflow-hidden rounded-xl p-8 text-center md:p-12">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
          <div className="glassmorphism relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-[-0.015em] md:text-3xl">Get Early Access</h2>
            <p className="text-base text-subtext-dark">Join the waitlist and get our free guide to automating your small business.</p>
            <form id="optin-form" className="mt-2 grid w-full max-w-md grid-cols-1 items-start gap-3 sm:grid-cols-[1fr_auto]" noValidate>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" name="email" type="email" inputMode="email" autoComplete="email" placeholder="you@example.com" required aria-describedby="email-help" className="w-full rounded-lg border-gray-700 bg-background-dark px-4 py-2.5 text-text-dark placeholder-subtext-dark focus:border-primary focus:ring-primary"/>
              <button type="submit" className="h-11 rounded-lg bg-primary px-5 text-sm font-bold text-white transition-transform hover:scale-105">Join the Waitlist</button>
              <div id="email-help" className="col-span-full text-left text-subtext-dark">No spam. Unsubscribe anytime.</div>
              <div id="form-message" className="col-span-full text-left" aria-live="polite"></div>
            </form>
          </div>
        </section>
      </div>

      <footer className="mt-8 flex justify-center border-t border-gray-800 py-8">
        <div className="flex w-full max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary"></div>
            <p className="text-sm text-subtext-dark">© {new Date().getFullYear()} Talk Small Business. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm font-medium text-subtext-dark">
            <a className="hover:text-primary" href="#">Contact Us</a>
            <a className="hover:text-primary" href="#">Privacy Policy</a>
            <a className="hover:text-primary" href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  )
}


