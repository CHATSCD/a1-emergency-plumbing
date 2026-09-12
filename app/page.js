import RequestForm from '@/components/RequestForm';
import { site } from '@/lib/site';
import {
  PhoneIcon,
  ClockIcon,
  ShieldIcon,
  StarIcon,
  ChevronIcon,
  CheckIcon,
  serviceIcons,
  uspIcons,
} from '@/components/Icons';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#areas', label: 'Service Area' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
];

const CALL_LABEL = `Call A-1 Emergency Plumbing at ${site.phoneDisplay}`;

/* ------------------------------------------------------------------ */

function Stars({ className = 'h-4 w-4' }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-amber-400" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <StarIcon key={i} className={className} />
      ))}
    </span>
  );
}

function CallButton({ size = 'base', className = '' }) {
  const sizing =
    size === 'xl'
      ? 'px-5 py-5 text-[1.15rem] sm:text-2xl'
      : size === 'lg'
        ? 'px-5 py-4 text-lg'
        : 'px-4 py-3 text-sm';

  return (
    <a
      href={site.phoneHref}
      aria-label={CALL_LABEL}
      className={`btn-call shadow-call transition active:scale-[0.99] ${sizing} ${className}`}
    >
      <PhoneIcon className={size === 'base' ? 'h-4 w-4 shrink-0' : 'h-6 w-6 shrink-0'} />
      <span className="whitespace-nowrap">{site.phoneDisplay}</span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, sub, center = false, light = false }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p
          className={`text-xs font-black uppercase tracking-[0.16em] ${
            light ? 'text-brand-red' : 'text-brand-red'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 text-2xl font-black leading-tight tracking-tight sm:text-3xl ${
          light ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-3 text-[15px] leading-relaxed sm:text-base ${
            light ? 'text-white/75' : 'text-slate-600'
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* ============ Sticky top bar (minimal nav) ============ */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-navy/95 backdrop-blur supports-[backdrop-filter]:bg-brand-navy/90">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-red text-[13px] font-black text-white">
              A1
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-[13px] font-black text-white">
                {site.shortName}
              </span>
              <span className="block truncate text-[11px] font-medium text-white/60">
                Gulfport • Biloxi • Long Beach
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-white/75 md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
            <a
              href="#request"
              className="rounded-lg border border-white/25 px-3 py-1.5 text-white transition hover:border-white/60"
            >
              Request Service
            </a>
          </nav>

          <a
            href={site.phoneHref}
            aria-label={CALL_LABEL}
            className="flex shrink-0 items-center gap-1.5 rounded-lg bg-brand-red px-3 py-2 text-[13px] font-black text-white shadow-call transition active:scale-[0.98] sm:text-sm"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>{site.phoneDisplay}</span>
          </a>
        </div>
      </header>

      <main id="top">
        {/* ============ HERO — everything above the fold ============ */}
        <section className="hero-glow bg-brand-navy text-white">
          <div className="mx-auto max-w-5xl px-4 pb-8 pt-6 sm:pb-12 sm:pt-12">
            <p className="text-[13px] font-black uppercase tracking-[0.16em] text-white/70">
              {site.name}
            </p>

            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-brand-red/50 bg-brand-red/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-brand-red opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red" />
              </span>
              {site.hoursBadge}
            </div>

            <h1 className="mt-4 text-[1.9rem] font-black leading-[1.08] tracking-tight sm:text-5xl">
              Emergency Plumber in{' '}
              <span className="text-brand-red">Gulfport, Biloxi &amp; Long Beach, MS</span>
            </h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/80 sm:text-lg">
              Water leak, backed-up drain, or no hot water? A local licensed master plumber is on
              the way — <strong className="font-bold text-white">15–30 minute average response</strong>,
              24/7/365. Free verbal estimate over the phone before we roll.
            </p>

            {/* Primary CTA — tappable without scrolling */}
            <div className="mt-6 sm:max-w-md">
              <a
                href={site.phoneHref}
                aria-label={CALL_LABEL}
                className="flex w-full flex-col items-center justify-center rounded-2xl bg-brand-red px-5 py-4 text-white shadow-call-strong ring-1 ring-white/20 transition active:scale-[0.99]"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/85">
                  Tap to Call — Answered 24/7
                </span>
                <span className="mt-0.5 text-[1.9rem] font-black leading-none tracking-tight sm:text-4xl">
                  {site.phoneDisplay}
                </span>
              </a>

              <a
                href="#request"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Prefer not to call? Request service online
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-white/75">
              <Stars />
              <span>
                <strong className="font-black text-white">{site.rating}</strong> from{' '}
                {site.reviewCount}+ local reviews
              </span>
              <span className="text-white/40" aria-hidden="true">
                •
              </span>
              <span>{site.license}</span>
            </p>
          </div>
        </section>

        {/* ============ TRUST BAR ============ */}
        <section className="border-b border-slate-200 bg-white">
          <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-x-3 gap-y-4 px-4 py-4 sm:py-5 lg:grid-cols-4">
            <li className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-navy/5 text-brand-red">
                <ShieldIcon className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-[13px] font-black text-brand-navy">
                  Licensed &amp; Insured
                </span>
                <span className="block text-[11px] text-slate-500">MS Master Plumber</span>
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-navy/5 text-brand-red">
                <ClockIcon className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-[13px] font-black text-brand-navy">
                  {site.yearsInBusiness}+ Years
                </span>
                <span className="block text-[11px] text-slate-500">Family-owned &amp; local</span>
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-navy/5 text-brand-red">
                <StarIcon className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-[13px] font-black text-brand-navy">
                  {site.rating} Stars
                </span>
                <span className="block text-[11px] text-slate-500">
                  {site.reviewCount}+ reviews
                </span>
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-navy/5 text-brand-red">
                <ClockIcon className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-[13px] font-black text-brand-navy">
                  {site.responseTime}
                </span>
                <span className="block text-[11px] text-slate-500">Average response</span>
              </span>
            </li>
          </ul>
        </section>

        {/* ============ SERVICES ============ */}
        <section id="services" className="bg-slate-50 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4">
            <SectionHeading
              eyebrow="What we fix — day or night"
              title="24/7 Emergency Plumbing Services"
              sub="No jargon and no runaround. If water is where it should not be, we will find it, fix it, and tell you the price first."
            />

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {site.services.map((service) => {
                const Icon = serviceIcons[service.icon];
                return (
                  <li
                    key={service.id}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-navy text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-3.5 text-[17px] font-black leading-snug text-brand-navy">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                      {service.blurb}
                    </p>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-brand-navy px-5 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="text-[15px] font-bold text-white sm:text-base">
                Not listed above? Call anyway — if we cannot help, we will tell you straight.
              </p>
              <CallButton size="lg" className="w-full sm:w-auto" />
            </div>
          </div>
        </section>

        {/* ============ WHY A-1 (USPs / urgency) ============ */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4">
            <SectionHeading
              eyebrow="Why people call A-1 first"
              title="Local trucks, real people, no waiting on hold"
              sub="Water damage gets worse by the hour. Here is why the Gulf Coast calls us instead of waiting on a national dispatch line."
            />

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {site.usps.map((usp) => {
                const Icon = uspIcons[usp.icon];
                return (
                  <li key={usp.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-red text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-3.5 text-[17px] font-black leading-snug text-brand-navy">
                      {usp.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">{usp.blurb}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ============ SERVICE AREA ============ */}
        <section id="areas" className="hero-glow bg-brand-navy py-12 text-white sm:py-16">
          <div className="mx-auto max-w-5xl px-4">
            <SectionHeading
              light
              eyebrow="Local service area"
              title="Serving Gulfport, Biloxi, Long Beach &amp; All of Harrison County"
              sub="We are a Gulf Coast company — that is why our average response time is measured in minutes, not hours. If you are nearby, we can usually be at your door fast."
            />

            <ul className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              {site.cities.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-red text-white">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-[15px] font-bold">
                    {city}, MS <span className="font-medium text-white/60">— full coverage</span>
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 sm:col-span-2">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-red text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-[15px] font-bold">
                  {site.county}{' '}
                  <span className="font-medium text-white/60">— including nearby communities</span>
                </span>
              </li>
            </ul>

            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/75">
              Not sure whether you are in range? Call and ask — we will tell you immediately whether
              we can get a plumber to you tonight.
            </p>

            <div className="mt-6 sm:max-w-md">
              <CallButton size="lg" className="w-full" />
              <p className="mt-2 text-center text-xs text-white/60">
                Average response time: {site.responseTime} · {site.hoursShort}
              </p>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section id="reviews" className="bg-slate-50 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4">
            <SectionHeading
              eyebrow="Reviews from your neighbors"
              title="4.9 out of 5 from 180+ Gulf Coast customers"
              sub={`Verified reviews across ${site.reviewSources}. Here is what people say after we show up.`}
            />

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {site.testimonials.map((review) => (
                <li
                  key={review.name}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-700">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-4 border-t border-slate-100 pt-3">
                    <p className="text-[14px] font-black text-brand-navy">{review.name}</p>
                    <p className="text-[12px] text-slate-500">{review.city}, MS</p>
                  </footer>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4">
            <SectionHeading
              center
              eyebrow="Straight answers"
              title="Questions people ask before they call"
              sub="The things homeowners want to know at 2 a.m. — answered with no fine print."
            />

            <div className="mt-8 space-y-3">
              {site.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 open:bg-white open:shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <span className="text-[15px] font-black text-brand-navy sm:text-base">
                      {faq.q}
                    </span>
                    <span className="faq-chevron shrink-0 text-brand-red">
                      <ChevronIcon className="h-5 w-5" />
                    </span>
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
              <p className="text-[15px] font-bold text-brand-navy">
                Still deciding whether it can wait? Ask us — it costs nothing.
              </p>
              <p className="mt-1 text-sm text-slate-600">{site.pricingNote}</p>
              <CallButton size="lg" className="mx-auto mt-4 max-w-sm" />
            </div>
          </div>
        </section>

        {/* ============ SECONDARY CTA — REQUEST SERVICE ============ */}
        <section id="request" className="bg-slate-50 py-12 sm:py-16">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Secondary option"
                title="Request service online"
                sub="In an emergency, calling is always fastest. If you would rather type it out, send this short form and we will call you right back."
              />
              <ul className="mt-6 space-y-3">
                {[
                  'A real person calls you back — usually within minutes.',
                  'Tell us the urgency so dispatch can prioritize you.',
                  'Free verbal estimate over the phone, no hidden fees.',
                  `Someone answers 24/7 — nights, weekends, and holidays.`,
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-red text-white">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-slate-700">{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl bg-brand-navy p-5">
                <p className="text-[13px] font-bold uppercase tracking-widest text-white/70">
                  Fastest way to get help
                </p>
                <CallButton size="lg" className="mt-3 w-full" />
                <p className="mt-2 text-center text-xs text-white/70">{site.hoursLong}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <RequestForm />
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="bg-brand-red">
          <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:py-14">
            <h2 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
              Water damage gets worse by the hour. Let&rsquo;s stop it now.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/90 sm:text-base">
              Licensed Mississippi master plumbers, {site.yearsInBusiness}+ years local, dispatch
              24/7/365. Average response time: {site.responseTime}.
            </p>
            <a
              href={site.phoneHref}
              aria-label={CALL_LABEL}
              className="mx-auto mt-6 flex max-w-md flex-col items-center justify-center rounded-2xl bg-brand-navy px-5 py-4 text-white shadow-call-strong ring-1 ring-white/25 transition active:scale-[0.99]"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
                Tap to Call — Available Now
              </span>
              <span className="mt-0.5 text-[1.9rem] font-black leading-none sm:text-4xl">
                {site.phoneDisplay}
              </span>
            </a>
            <p className="mt-3 text-xs font-semibold text-white/85">
              Free verbal estimate over the phone · No hidden fees
            </p>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="bg-brand-navyDeep pb-32 pt-10 text-white sm:pb-28">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-red text-sm font-black text-white">
                  A1
                </span>
                <span className="text-[15px] font-black leading-tight">{site.name}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Family-owned emergency plumbing serving the Mississippi Gulf Coast for{' '}
                {site.yearsInBusiness}+ years.
              </p>
              <p className="mt-3 text-[13px] font-semibold text-white/80">{site.license}</p>
            </div>

            <div>
              <h3 className="text-[13px] font-black uppercase tracking-widest text-white/60">
                Contact
              </h3>
              <a
                href={site.phoneHref}
                aria-label={CALL_LABEL}
                className="mt-3 flex items-center gap-2 text-xl font-black text-white"
              >
                <PhoneIcon className="h-5 w-5 text-brand-red" />
                {site.phoneDisplay}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {site.hoursShort}
                <br />
                Dispatch available late nights, weekends &amp; holidays.
              </p>
            </div>

            <div>
              <h3 className="text-[13px] font-black uppercase tracking-widest text-white/60">
                Service Area
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Gulfport, MS
                <br />
                Biloxi, MS
                <br />
                Long Beach, MS
                <br />
                {site.county}
              </p>
              <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-semibold text-white/70">
                {NAV_LINKS.map((link) => (
                  <a key={link.href} href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs leading-relaxed text-white/50">
              &copy; {year} {site.name}. Licensed &amp; Insured — State of Mississippi Master
              Plumber. Emergency drain clearing, main line clog removal, water leak detection, sewer
              line video inspections, hot water heater repair, and fixture service in Gulfport,
              Biloxi, Long Beach, and Harrison County, MS.
            </p>
          </div>
        </div>
      </footer>

      {/* ============ STICKY CALL BAR (always visible) ============ */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-brand-navy/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur sm:px-4 sm:pt-2.5">
        <div className="mx-auto flex max-w-5xl items-center gap-2">
          <a
            href={site.phoneHref}
            aria-label={CALL_LABEL}
            className="btn-call flex-1 bg-brand-red px-3 py-3.5 text-[15px] shadow-call-strong sm:text-lg"
          >
            <PhoneIcon className="h-5 w-5 shrink-0" />
            <span className="whitespace-nowrap">Call Now: {site.phoneDisplay}</span>
          </a>
          <a
            href="#request"
            className="hidden shrink-0 rounded-xl border border-white/25 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:block"
          >
            Request Service
          </a>
        </div>
        <p className="mx-auto mt-1 max-w-5xl text-center text-[11px] font-medium text-white/60 sm:hidden">
          {site.hoursShort} · Avg response {site.responseTime}
        </p>
      </div>
    </>
  );
}
