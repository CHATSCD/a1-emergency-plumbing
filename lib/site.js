/**
 * Single source of truth for all business info.
 * Used by the page, the metadata/schema in layout.js, and the API route.
 *
 * TODO before launch: set the real domain via NEXT_PUBLIC_SITE_URL.
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.a1emergencyplumbingrepair.com';

export const site = {
  name: 'A-1 Emergency Plumbing Repair',
  shortName: 'A-1 Emergency Plumbing',
  schemaType: ['Plumber', 'LocalBusiness'],

  // --- Contact (keep these in sync with the directory listings: Angi / BBB / YellowPages / Facebook)
  phoneDisplay: '(228) 860-9008',
  phoneE164: '+12288609008',
  phoneHref: 'tel:+12288609008',

  // --- Availability
  hoursShort: '24/7 Emergency Service',
  hoursLong:
    'Open 24 hours a day, 7 days a week. Dispatch available late nights, weekends, and holidays.',
  hoursBadge: '24/7 Live Dispatch — Nights, Weekends & Holidays',

  // --- Trust signals
  rating: 4.9,
  reviewCount: 180,
  reviewSources: 'Google, BBB & Angi',
  yearsInBusiness: 15,
  responseTime: '15–30 minutes',
  license: 'Licensed & Insured — State of Mississippi Master Plumber',
  priceRange: '$$',
  pricingNote:
    'Transparent emergency pricing, no hidden fees. Free verbal estimate over the phone before we roll a truck.',

  // --- Coverage
  city: 'Gulfport',
  region: 'MS',
  cities: ['Gulfport', 'Biloxi', 'Long Beach'],
  county: 'Harrison County, MS',
  serviceAreaLabel: 'Gulfport, Biloxi, Long Beach & Harrison County, MS',

  services: [
    {
      id: 'drain-clearing',
      icon: 'drain',
      title: '24/7 Emergency Drain Clearing',
      blurb:
        'Sink, tub, or floor drain backed up at 2 a.m.? We clear clogged drains any hour of the day or night.',
    },
    {
      id: 'main-line',
      icon: 'pipe',
      title: 'Main Line Clog Removal',
      blurb:
        'Sewage backing up into the house is an emergency. We locate the blockage and clear the main line — fast.',
    },
    {
      id: 'leak-detection',
      icon: 'leak',
      title: 'Water Leak Detection',
      blurb:
        "Can't find where the water is coming from? We pinpoint hidden leaks without tearing your home apart.",
    },
    {
      id: 'sewer-camera',
      icon: 'camera',
      title: 'Sewer Line Video Inspections',
      blurb:
        'We send a camera down the line and show you exactly what is wrong before you pay for any repair.',
    },
    {
      id: 'water-heater',
      icon: 'heater',
      title: 'Hot Water Heater Repair',
      blurb:
        'No hot water, a leaking tank, or a pilot that will not light? We repair and replace hot water heaters.',
    },
    {
      id: 'fixtures',
      icon: 'wrench',
      title: 'Dishwashers, Faucets & Fixtures',
      blurb:
        'Leaking faucets, running toilets, and dishwashers that will not drain — fixed clean and done right.',
    },
  ],

  usps: [
    {
      icon: 'bolt',
      title: '15–30 Minute Local Dispatch',
      blurb:
        'We are based right here on the Gulf Coast, not routed through a national call center. Average response time: 15–30 minutes.',
    },
    {
      icon: 'clock',
      title: 'True 24/7/365 Availability',
      blurb:
        '2 a.m. on a Tuesday, Sunday morning, Thanksgiving, or the 4th of July — call and someone answers.',
    },
    {
      icon: 'shield',
      title: 'Family-Owned Local Master Plumbers',
      blurb:
        '15+ years serving Harrison County, licensed and insured by the State of Mississippi. You get the price before we start.',
    },
  ],

  testimonials: [
    {
      quote:
        'Came out within 15 minutes of me getting ahold of them! Had a water leak and could not find it—I wouldn\u2019t go to any other plumbing service.',
      name: 'Sean J.',
      city: 'Gulfport',
    },
    {
      quote:
        'Called plumbers on Sunday, no one would come. Found A1 and in 1 1/2 hours they were there and fixed the problem.',
      name: 'Erie T.',
      city: 'Biloxi',
    },
    {
      quote:
        'When A1 says they have 24 hour emergency service they mean it! Very professional and reasonably priced, even for an emergency call on the 4th of July.',
      name: 'Andrew R.',
      city: 'Gulfport',
    },
  ],

  faqs: [
    {
      q: 'How fast can someone actually get here?',
      a: 'Our average response time is 15–30 minutes in Gulfport, Biloxi, Long Beach, and the rest of Harrison County. We are a local company with trucks in the area — not a national call center that has to find somebody for you.',
    },
    {
      q: 'How much will an emergency call cost?',
      a: 'You get transparent emergency pricing with no hidden fees, and a free verbal estimate over the phone before we head your way. We tell you what the price is before we start the work — no surprise invoice.',
    },
    {
      q: 'Is it really 24/7, even on holidays?',
      a: 'Yes. We are open 24 hours a day, 7 days a week, 365 days a year. Our dispatchers are available late nights, weekends, and holidays. One of our reviews is from a customer we helped on the 4th of July.',
    },
    {
      q: 'Do you charge for estimates?',
      a: 'Verbal estimates over the phone are free. If your issue needs a plumber on site to diagnose, we give you the price before any repair work begins so you can decide.',
    },
    {
      q: 'Are you licensed and insured?',
      a: 'Yes. We are licensed and insured, and we have been a State of Mississippi Master Plumber serving the Gulf Coast for more than 15 years.',
    },
    {
      q: 'I am not sure if this counts as an emergency. Should I call?',
      a: 'Call anyway — it costs you nothing. Describe what is happening and we will tell you straight whether it can wait until morning or needs a plumber right now.',
    },
  ],
};

export const fullAddress = {
  '@type': 'PostalAddress',
  addressLocality: site.city,
  addressRegion: site.region,
  addressCountry: 'US',
};
