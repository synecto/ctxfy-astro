import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2023-10-01'})

const landingDoc = {
  _id: 'landing',
  _type: 'landingPage',
  title: 'Ctxfy',
  description: 'Communicate. Collaborate. Create.',
  nav: {
    brandName: 'Ctxfy',
    brandTagline: 'Communicate. Collaborate. Create.',
    links: [
      {label: 'Home', href: '#home'},
      {label: 'Product', href: '#product'},
      {label: 'Pricing Plans', href: '#pricing'},
      {label: 'Contact', href: '#contact'},
    ],
    cta: {label: 'Get Started', href: '#get-started'},
  },
  hero: {
    headline: 'Communicate. Collaborate. Create.',
    body:
      'Ctxfy provides an effective and powerful way to manage your projects with modern workflow tools, shared visibility, and real-time collaboration.',
    primaryCta: {label: 'Get Started', href: '#get-started'},
    bullets: ['Speed & Security', 'Flexibility & Scalability', 'Better Collaboration'],
  },
  offers: [
    {
      title: 'Workflows That Work',
      description: 'Build repeatable processes and keep every team in sync with visual timelines.',
    },
    {
      title: 'All-In-One Solution',
      description: 'Tasks, docs, approvals, and analytics in a single workspace.',
    },
    {
      title: 'Comprehensive Support',
      description: 'Dedicated onboarding plus tailored playbooks for your teams.',
    },
    {
      title: 'Smart Automation Tools',
      description: 'Automate status updates, routing, and notifications to keep work moving.',
    },
  ],
  split: {
    headline: 'Built for Creatives, by Creatives',
    body:
      'Ctxfy helps your team focus on the creative work by simplifying the operational noise. From concept to execution, everything stays in one place.',
    bullets: ['All-in-One Toolkit', 'Integrated File Sharing', 'Total Design Freedom'],
  },
  trusted: {
    headline: 'Trusted Among Industry Leaders',
    body: 'Leading teams use Ctxfy to bring clarity and speed to their project workflows.',
    logos: [
      {name: 'Meta Definer'},
      {name: 'Delta Tech'},
      {name: 'TechMed'},
      {name: 'Power Core'},
      {name: 'Strongest Link'},
      {name: 'COG Industry'},
      {name: 'A.T. Motion'},
      {name: 'BOND'},
    ],
  },
  testimonials: {
    headline: 'What Our Clients Say',
    items: [
      {
        quote: 'Ctxfy helped us align design, product, and delivery in one intuitive workflow.',
        author: 'Deena Levies',
        company: 'Mission Bay',
      },
      {
        quote: 'Our team ships twice as fast while maintaining visibility across departments.',
        author: 'Tom Smithenson',
        company: 'Parkmerced',
      },
      {
        quote: 'The automation toolkit removed repetitive tasks and kept everyone accountable.',
        author: 'Tilly Green',
        company: 'Hayes Valley',
      },
    ],
  },
  pricing: {
    headline: 'Explore Our Pricing Options',
    body:
      'Transparent plans built for teams of every size. Upgrade when you are ready and keep all your workflows intact.',
    cta: {label: 'See More', href: '#get-started'},
    plan: {
      badge: 'Best Value',
      name: 'Premium',
      currency: 'GEL',
      price: '50',
      cadence: 'Every month',
      description: 'Use this plan for growing teams who need advanced control.',
      ctaLabel: 'Get Started',
      benefits: ["I'm a benefit", "I'm a benefit", "I'm a benefit", "I'm a benefit"],
    },
  },
  finalCta: {
    headline: 'Get Ready to Maximize Your Productivity With Our Workflow Solutions',
    cta: {label: 'Get Started', href: '#contact'},
  },
  footer: {
    brandName: 'Ctxfy',
    brandTagline: 'Communicate. Collaborate. Create.',
    contactLines: [
      '500 Terry Francine Street',
      'San Francisco, CA 94158',
      'Sales: info@my-site.com',
      'Customer Care: info@my-site.com',
    ],
    quickLinks: [
      {label: 'Terms & Conditions', href: '#'},
      {label: 'Privacy Policy', href: '#'},
      {label: 'Contact', href: '#contact'},
    ],
    followLinks: [
      {label: 'LinkedIn', href: '#'},
      {label: 'YouTube', href: '#'},
      {label: 'Facebook', href: '#'},
    ],
    newsletterLabel: 'Email *',
    legalNote: '(c) Ctxfy',
  },
}

async function run() {
  await client.createOrReplace(landingDoc)
  // eslint-disable-next-line no-console
  console.log('Landing page seeded')
}

run().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})
