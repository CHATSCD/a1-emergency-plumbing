'use client';

import { useState } from 'react';
import { site } from '@/lib/site';
import { PhoneIcon, CheckIcon } from '@/components/Icons';

const URGENCY_OPTIONS = [
  'Emergency — right now',
  'Today / within a few hours',
  'Soon / can schedule this week',
  'Not sure — please advise',
];

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/25';
const labelClass = 'mb-1.5 block text-sm font-semibold text-slate-700';

export default function RequestForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    name: '',
    phone: '',
    service: site.services[0].title,
    urgency: URGENCY_OPTIONS[0],
    notes: '',
    company: '', // honeypot — real people never see this field
  });

  const update = (key) => (event) =>
    setValues((prev) => ({ ...prev, [key]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    setError('');

    try {
      const response = await fetch('/api/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || 'Something went wrong.');
      }

      setStatus('sent');
    } catch (err) {
      setError(err.message || 'Could not send your request.');
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center sm:p-8">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-green-600 text-white">
          <CheckIcon className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-xl font-black text-slate-900">Request received.</h3>
        <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-slate-700">
          We&rsquo;ll call you back at the number you gave us — usually within a few minutes.
          If water is actively leaking or backing up, calling is faster:
        </p>
        <a
          href={site.phoneHref}
          aria-label={`Call ${site.name} now at ${site.phoneDisplay}`}
          className="btn-call shadow-call mt-4 py-4 text-lg"
        >
          <PhoneIcon className="h-5 w-5 shrink-0" />
          <span>Call Now: {site.phoneDisplay}</span>
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="req-name">
            Your name
          </label>
          <input
            id="req-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="First and last name"
            value={values.name}
            onChange={update('name')}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="req-phone">
            Best phone number
          </label>
          <input
            id="req-phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="(228) 000-0000"
            value={values.phone}
            onChange={update('phone')}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="req-service">
            What do you need?
          </label>
          <select
            id="req-service"
            name="service"
            value={values.service}
            onChange={update('service')}
            className={inputClass}
          >
            {site.services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Something else / not sure">Something else / not sure</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="req-urgency">
            How urgent is it?
          </label>
          <select
            id="req-urgency"
            name="urgency"
            value={values.urgency}
            onChange={update('urgency')}
            className={inputClass}
          >
            {URGENCY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="req-notes">
          What&rsquo;s going on? <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <textarea
          id="req-notes"
          name="notes"
          rows={3}
          placeholder="Example: water backing up in the tub, or a wet spot under the water heater."
          value={values.notes}
          onChange={update('notes')}
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* Honeypot: hidden from humans, catches form bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="req-company">Company</label>
        <input
          id="req-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={update('company')}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-call bg-brand-navy py-4 text-lg shadow-call-strong transition active:scale-[0.99] disabled:opacity-70"
      >
        {status === 'sending' ? 'Sending…' : "Send Request — We'll Call You Back"}
      </button>

      {status === 'error' && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error} Please call us instead:{' '}
          <a href={site.phoneHref} className="underline">
            {site.phoneDisplay}
          </a>
        </p>
      )}

      <p className="text-center text-xs leading-relaxed text-slate-500">
        In an active emergency, calling is always fastest:{' '}
        <a href={site.phoneHref} className="font-bold text-brand-red underline">
          {site.phoneDisplay}
        </a>
        . We answer 24/7 — nights, weekends, and holidays.
      </p>
    </form>
  );
}
