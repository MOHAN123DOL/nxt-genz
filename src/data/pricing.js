// Pricing — taken from the NXT GENZ presentation. All prices are in INR and exclusive of GST.
// To change a price or feature, edit it here; the Pricing, Services and Home pages update automatically.

export const priceTabs = [
  {
    id: 'web',
    label: 'Website',
    heading: 'Website Development',
    blurb: 'Custom-built websites delivered in about 20 days — from a simple static site to a fully tailored build.',
    contactService: 'Website Development',
  },
  {
    id: 'erp',
    label: 'ERP',
    heading: 'ERP Software',
    blurb: 'A custom ERP built in about 4 months. Own it outright, or pay monthly per team size.',
    contactService: 'ERP Software',
  },
  {
    id: 'dm',
    label: 'Digital Marketing',
    heading: 'Digital Marketing',
    blurb: 'Content, ads and reporting handled end-to-end. Onboarding takes 1 week and includes competitive analysis.',
    contactService: 'Digital Marketing',
  },
  {
    id: 'branding',
    label: 'Personal Branding',
    heading: 'Personal Branding',
    blurb: 'Monthly strategy, content and reels to build a consistent personal brand online.',
    contactService: 'Personal Branding',
  },
]

// price: number string shown after ₹. Use `priceText` for non-numeric prices.
export const plans = {
  web: [
    {
      id: 'web-basic',
      name: 'Basic',
      label: 'Static Website',
      price: '5,999',
      suffix: 'one-time',
      perks: ['3 pages', 'Mobile responsive', '1 year support (any bug)', 'SEO setup', 'WhatsApp, mobile & email integration with contact form'],
    },
    {
      id: 'web-standard',
      name: 'Standard',
      label: 'Dynamic Website',
      price: '14,999',
      suffix: 'one-time',
      popular: true,
      perks: ['8 pages', 'Admin panel', '1 year support', 'Mobile responsive', 'SEO optimization', 'WhatsApp, mobile & email integration with contact form'],
    },
    {
      id: 'web-premium',
      name: 'Premium',
      label: 'Dynamic Website',
      price: '19,999',
      suffix: 'one-time',
      perks: ['10 pages', 'Admin panel', '1 year support', 'Mobile responsive', 'SEO optimization', 'WhatsApp, mobile & email integration', 'Data analytics dashboard (single city)'],
    },
    {
      id: 'web-custom',
      name: 'Custom',
      label: 'Tailored Build',
      priceText: "Let's Talk",
      suffix: 'quote on request',
      perks: ['Scoped to your exact requirements', 'Pages, integrations & features you choose', 'Price varies based on project scope', 'Timeline set after requirement review'],
    },
  ],
  erp: [
    {
      id: 'erp-own',
      name: 'Ownership',
      label: 'Pay once, own it',
      price: '50,000',
      suffix: 'upfront',
      popular: true,
      perks: ['Full software delivered', 'Source, setup & deployment included', 'No recurring licence fees', 'Maintenance: hosting cost + 20%'],
    },
    {
      id: 'erp-3',
      name: '3 Users',
      label: 'Monthly subscription',
      price: '1,999',
      suffix: 'per month',
      perks: ['Full ERP access for your team', 'Billed monthly', 'No long-term lock-in'],
    },
    {
      id: 'erp-8',
      name: '8 Users',
      label: 'Monthly subscription',
      price: '4,999',
      suffix: 'per month',
      badge: 'BEST VALUE',
      perks: ['Full ERP access for your team', 'Billed monthly', 'No long-term lock-in'],
    },
    {
      id: 'erp-11',
      name: '11 Users',
      label: 'Monthly subscription',
      price: '6,699',
      suffix: 'per month',
      perks: ['Full ERP access for your team', 'Billed monthly', 'No long-term lock-in'],
    },
  ],
  dm: [
    {
      id: 'dm-silver',
      name: 'Silver',
      label: 'Starter growth',
      price: '7,999',
      suffix: '/ month',
      note: 'Service ₹4,999 · Ad cost ₹3,000',
      perks: ['Social media page handling', '15 poster designs', '3 reels', 'GMB setup & optimization', 'Meta ad setup'],
    },
    {
      id: 'dm-gold',
      name: 'Gold',
      label: 'Ads + reporting',
      price: '14,999',
      suffix: '/ month',
      popular: true,
      note: 'Service ₹9,999 · Ad cost ₹5,000',
      perks: ['Social media page handling', '30 poster designs', '6 reels', 'GMB setup & optimization', 'Meta & Google ad setup', 'Monthly performance report'],
    },
    {
      id: 'dm-platinum',
      name: 'Platinum',
      label: 'Full brand growth',
      price: '18,999',
      suffix: '/ month',
      note: 'Service ₹11,999 · Ad cost ₹7,000',
      perks: ['Social media page handling', '30 poster designs', '8 reels', 'GMB setup & optimization', 'Meta & Google ad setup', 'Monthly performance report', 'Personal branding strategy'],
    },
  ],
  branding: [
    {
      id: 'pb-basic',
      name: 'Basic',
      label: 'Start your brand',
      price: '2,999',
      suffix: '/ month',
      perks: ['Brand strategy & profile optimization', '8 Instagram reels (ideas + scripts)', 'Shoot + editing', 'Monthly content planning', 'Instagram bio optimization'],
    },
    {
      id: 'pb-growth',
      name: 'Growth',
      label: 'Build momentum',
      price: '4,999',
      suffix: '/ month',
      popular: true,
      perks: ['Personal brand strategy', 'Instagram profile optimization', '10 reels (ideas + scripts)', 'Shoot + editing', '8 personal branding posters', 'Monthly content calendar', 'Content performance review'],
    },
    {
      id: 'pb-premium',
      name: 'Premium',
      label: 'Complete brand',
      price: '7,999',
      suffix: '/ month',
      perks: ['Complete personal brand strategy', 'Profile optimization', '17 reels (ideas + scripts)', 'Shoot + editing', '12 personal branding posters', 'Monthly content calendar', 'Content performance report', 'Monthly strategy consultation'],
    },
  ],
}

// "Mix & match" individual services outside the fixed plans.
export const customPricing = [
  { service: 'Meta Ads Management', rate: '₹5,000–₹10,000 / month' },
  { service: 'Google Ads Management', rate: '₹5,000–₹10,000 / month' },
  { service: 'SEO', rate: '₹6,000–₹15,000 / month' },
  { service: 'Social Media Management', rate: '₹5,000–₹12,000 / month' },
  { service: 'Content Creation', rate: '₹500–₹1,500 / post' },
  { service: 'Poster Design', rate: '₹300–₹800 / design' },
  { service: 'Video Editing', rate: '₹800–₹2,500 / video' },
  { service: 'Personal Branding', rate: '₹8,000–₹20,000 / month' },
]

export const faqs = [
  {
    q: 'Are the prices inclusive of GST?',
    a: 'No. All prices shown are exclusive of GST. GST is added at the applicable rate on your invoice.',
  },
  {
    q: 'How long does a website or ERP take to build?',
    a: 'Websites follow a 20-day development timeline. A custom ERP takes about 4 months. Custom website builds get a timeline after we review your requirements.',
  },
  {
    q: 'What does ERP maintenance cost under the ownership model?',
    a: 'Ongoing maintenance is billed as your hosting cost plus a 20% service fee, covering updates and support.',
  },
  {
    q: 'Can I have an ERP plan for a different team size?',
    a: 'The subscription tiers are fixed at 3, 8 and 11 users. For any other team size, contact us and we will quote a custom plan.',
  },
  {
    q: 'How do digital marketing and personal branding start?',
    a: 'Onboarding takes about 1 week and includes a competitive analysis, so the strategy is built around your market from day one.',
  },
]
