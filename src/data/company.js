// Company details used across the site. Edit here once — it updates everywhere.

export const company = {
  name: 'NXT GENZ',
  legalName: 'NXTGENZ SOLUTIONZ',
  tagline: 'Next Generation, Limitless Solutionz',
  phoneDisplay: '+91 93636 28747',
  phoneTel: '+919363628747',
  whatsappNumber: '919363628747',
  email: 'nxtgenzzzzz@gmail.com',
  instagramHandle: '@nxtgenzsolution',
  instagramUrl: 'https://www.instagram.com/nxtgenzsolution',
}

export const waLink = (text = '') =>
  `https://wa.me/${company.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`

// Launch offer shown on Home (discount card) and Pricing (ticket).
export const offer = {
  percent: 21,
  code: 'NXTGENZ21',
  appliesTo: 'Website Development & Digital Marketing',
}

// Headline numbers (Home page stats card).
export const stats = [
  { id: 'secure', qty: '100%', label: 'Secure' },
  { id: 'web', qty: '10+', label: 'Websites' },
  { id: 'dm', qty: '4+', label: 'Digital Marketing' },
  { id: 'erp', qty: '2+', label: 'ERP' },
]

// Team — from the company presentation.
export const team = [
  { name: 'Yaadhav', role: 'Business Analyst' },
  { name: 'Mohan', role: 'Web Development' },
  { name: 'Naveen', role: 'Android Developer' },
  { name: 'Gopi', role: 'Digital Marketing' },
  { name: 'Gowtham', role: 'Graphic Designer' },
  { name: 'Karthi', role: 'SAP Consultant' },
  { name: 'Vignesh', role: 'Database Management' },
  { name: 'Ram', role: 'AI / ML Developer' },
]
