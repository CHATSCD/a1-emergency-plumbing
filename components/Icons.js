/**
 * Inline SVG icons — no icon font, no image requests, no layout shift.
 * All icons inherit currentColor and size via className.
 */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
};

function Svg({ className = 'h-6 w-6', children }) {
  return (
    <svg {...base} className={className}>
      {children}
    </svg>
  );
}

export function PhoneIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.416l-.98 1.294a.75.75 0 0 1-.938.256 12.042 12.042 0 0 1-4.966-4.966.75.75 0 0 1 .256-.938l1.294-.98c.361-.271.526-.734.416-1.173L7.215 5.352A1.125 1.125 0 0 0 6.124 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
    </Svg>
  );
}

export function ClockIcon({ className }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3.25 2" />
    </Svg>
  );
}

export function ShieldIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M12 3 5.25 5.6v5.5c0 4.3 2.86 7.94 6.75 9.4 3.89-1.46 6.75-5.1 6.75-9.4V5.6L12 3Z" />
      <path d="M9.25 12.1 11.2 14l3.6-3.9" />
    </Svg>
  );
}

export function StarIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.6l2.86 6.02 6.53.9-4.78 4.6 1.17 6.6L12 17.6l-5.78 3.12 1.17-6.6-4.78-4.6 6.53-.9L12 2.6Z" />
    </svg>
  );
}

export function CheckIcon({ className = 'h-5 w-5' }) {
  return (
    <Svg className={className}>
      <path d="m4.5 12.75 5.25 5.25L19.5 6.75" />
    </Svg>
  );
}

export function ChevronIcon({ className = 'h-5 w-5' }) {
  return (
    <Svg className={className}>
      <path d="m6 9.5 6 6 6-6" />
    </Svg>
  );
}

export function BoltIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M13.5 2.75 4.75 13.5h5.5l-.75 7.75 8.75-10.75h-5.5l.75-7.75Z" />
    </Svg>
  );
}

/* --- Service icons ------------------------------------------------- */

/** 24/7 emergency drain clearing — spiral drain swirl */
export function DrainIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M12 21a9 9 0 1 0-9-9" />
      <path d="M12 17.25a5.25 5.25 0 1 0-5.25-5.25" />
      <path d="M12 13.5a1.5 1.5 0 1 0-1.5-1.5" />
    </Svg>
  );
}

/** Main line clog removal — pipe with elbow */
export function PipeIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M3 6h7a5 5 0 0 1 5 5v7" />
      <path d="M3 11h6a1 1 0 0 1 1 1v6" />
      <path d="M3 6v5" />
      <path d="M18 18v3" />
    </Svg>
  );
}

/** Water leak detection — droplet under a magnifier */
export function LeakIcon({ className }) {
  return (
    <Svg className={className}>
      <circle cx="10" cy="10" r="6" />
      <path d="M14.4 14.4 20 20" />
      <path d="M10 6.6c1.9 2.3 3 3.6 3 5.1a3 3 0 1 1-6 0c0-1.5 1.1-2.8 3-5.1Z" />
    </Svg>
  );
}

/** Sewer line video inspection — inspection camera */
export function CameraIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M15.75 10.5l4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72" />
      <rect x="2.25" y="6" width="13.5" height="12" rx="2.25" />
    </Svg>
  );
}

/** Hot water heater repair — flame */
export function HeaterIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M15.36 5.21A8.25 8.25 0 0 1 12 21a8.25 8.25 0 0 1-5.96-13.95 8.29 8.29 0 0 0 2.96 2.55 8.98 8.98 0 0 1 3.36-6.87 8.21 8.21 0 0 0 3 2.48Z" />
      <path d="M12 18a3.75 3.75 0 0 0 .49-7.47 5.99 5.99 0 0 0-1.92 3.55 5.97 5.97 0 0 1-2.14-1A3.75 3.75 0 0 0 12 18Z" />
    </Svg>
  );
}

/** Dishwashers, faucets & fixtures — wrench */
export function WrenchIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M21.75 6.75a4.5 4.5 0 0 1-4.88 4.48c-1.08-.09-2.26.07-2.95.9l-7.15 8.69a2.55 2.55 0 1 1-3.59-3.59l8.69-7.15c.83-.69.99-1.87.9-2.95a4.5 4.5 0 0 1 6.34-4.49l-3.28 3.28a3 3 0 0 0 2.25 2.25l3.28-3.28c.26.57.39 1.2.39 1.86Z" />
    </Svg>
  );
}

export const serviceIcons = {
  drain: DrainIcon,
  pipe: PipeIcon,
  leak: LeakIcon,
  camera: CameraIcon,
  heater: HeaterIcon,
  wrench: WrenchIcon,
};

export const uspIcons = {
  bolt: BoltIcon,
  clock: ClockIcon,
  shield: ShieldIcon,
};
