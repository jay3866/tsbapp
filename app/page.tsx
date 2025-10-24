export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-center border-b border-gray-200/50 bg-background-light/80 py-3 backdrop-blur-lg dark:border-gray-800/50 dark:bg-background-dark/80">
        <nav className="flex w-full max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold tracking-[-0.015em]">Talk Small Business</h2>
          </div>
          <a href="#waitlist" className="h-10 min-w-[84px] rounded-lg bg-primary px-4 text-sm font-bold text-white transition-transform hover:scale-105 inline-flex items-center justify-center">Request Demo</a>
        </nav>
      </header>

      {/* Hero with Spline */}
      <main className="flex grow flex-col items-center">
        <div className="flex w-full max-w-6xl flex-col items-center gap-16 px-6 py-14 md:gap-24 md:py-20">
          <section className="grid w-full items-center gap-10 text-center lg:grid-cols-2 lg:text-left">
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">Reclaim 40% of Your Time. Delegate with Voice, Not Logins.</h1>
                <h2 className="text-base leading-normal text-subtext-light dark:text-subtext-dark">Our voice-first platform streamlines operations and handles admin without sharing passwords. Focus on growth—let AI handle the rest.</h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#waitlist" className="cta-glow inline-flex h-12 items-center justify-center rounded-xl bg-primary px-5 text-base font-bold text-white transition-transform hover:scale-105">Start Delegating Today</a>
                <a href="#agents" className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-300 px-5 text-base font-bold dark:border-gray-700">See How It Works</a>
              </div>
              <p className="text-sm text-subtext-light dark:text-subtext-dark">Trusted by North America's Smartest Small Businesses</p>
            </div>
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 blur-3xl dark:from-blue-900/40 dark:to-purple-900/40"></div>
              <div className="spline-shadow spline-float spline-no-interact spline-crop mx-auto w-full max-w-xl">
                <spline-viewer url="https://prod.spline.design/UOwS6OgTZFp1-aMG/scene.splinecode" style={{width:'100%',height:'520px',background:'transparent',pointerEvents:'none'}}></spline-viewer>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="flex justify-center border-t border-gray-200 py-8 dark:border-gray-800">
        <div className="flex w-full max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <p className="text-sm text-subtext-light dark:text-subtext-dark">© 2025 TSB LLC. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm font-medium text-subtext-light dark:text-subtext-dark">
            <a className="hover:text-primary" href="./contact.html">Contact Us</a>
            <a className="hover:text-primary" href="./privacy.html">Privacy Policy</a>
            <a className="hover:text-primary" href="./terms.html">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
