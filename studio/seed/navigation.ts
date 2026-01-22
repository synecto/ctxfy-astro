import {getCliClient} from 'sanity/cli'

// This script should be run with: sanity exec seed/navigation.ts --with-user-token
// Or: npm run seed-navigation
// The --with-user-token flag ensures you're authenticated
const client = getCliClient({apiVersion: '2023-10-01'})

const navigationDoc = {
  _id: 'navigation',
  _type: 'navigationSettings',
  primaryLinks: [
    {label: 'About', href: '/about'},
    {label: 'Contact', href: '/contact'},
  ],
  featuresMenu: {
    sections: [
      {
        sectionTitle: 'AI-Powered Insights',
        items: [
          {
            label: 'Predictive Modeling',
            href: '/platform#smart-analytics',
            icon: 'chartPie',
            description: 'Use AI-driven simulations to forecast outcomes with confidence.',
          },
          {
            label: 'Market Trends',
            href: '/platform#smart-analytics',
            icon: 'portfolio',
            description: 'Identify key trends and make strategic decisions with real-time insights.',
          },
        ],
      },
      {
        sectionTitle: 'Advanced Data Tools',
        items: [
          {
            label: 'Automated Reports',
            href: '/platform#automated-processing',
            icon: 'presentationChart',
            description: 'Generate detailed reports and dashboards in seconds.',
          },
        ],
      },
    ],
  },
  platformMenu: {
    items: [
      {
        title: 'DataNova Core',
        description: 'AI-powered risk analysis and data modeling engine.',
        href: '/platform',
        image: 'datanova',
      },
      {
        title: 'InsightFlow Cloud',
        description: 'A web-based platform for collaborative data analytics.',
        href: '/platform',
        image: 'if_cloud',
      },
      {
        title: 'InsightFlow Planner',
        description: 'Advanced forecasting and scenario planning for business strategy.',
        href: '/platform',
        image: 'if_planner',
      },
      {
        title: 'InsightFlow Visualizer',
        description: 'Custom dashboards and interactive data storytelling.',
        href: '/platform',
        image: 'if_visualizer',
      },
    ],
  },
  supportMenu: {
    sections: [
      {
        sectionTitle: 'Documentation',
        items: [
          {
            label: 'Articles',
            href: '/support/articles',
            icon: 'articles',
            description: 'Learn from our collection of insightful articles.',
          },
          {
            label: 'Sample Spreadsheets',
            href: '/support/sample-spreadsheets',
            icon: 'documentChartBar',
            description: 'Download sample spreadsheets to practice with.',
          },
          {
            label: 'Whitepapers',
            href: '/support/whitepapers',
            icon: 'blankDocument',
            description: 'Access detailed reports on advanced analytics techniques.',
          },
          {
            label: 'Reference',
            href: '/support/reference',
            icon: 'documentMagnifyingGlass',
            description: 'Find technical documentation and reference materials.',
          },
        ],
      },
      {
        sectionTitle: 'Knowledge Base',
        items: [
          {
            label: 'Search the Knowledge Base',
            href: '/support/knowledge-base',
            icon: 'info',
            description: 'Search for answers to your questions in our Knowledge Base.',
          },
        ],
      },
    ],
  },
  downloadsMenu: {
    sections: [
      {
        sectionTitle: 'Download',
        items: [
          {
            label: 'DataNova Core',
            href: '/downloads/datanova-core',
            icon: 'download',
            description: 'Download the free trial version of the DataNova Core.',
          },
        ],
      },
      {
        sectionTitle: 'Licensing',
        items: [
          {
            label: 'License Options',
            href: '/downloads/license-options',
            icon: 'badge',
            description: 'Choose the best license for your needs and unlock full features.',
          },
          {
            label: 'Request a Quote',
            href: '/downloads/request-quote',
            icon: 'chatBubble',
            description: 'Inquire about custom pricing, volume discounts, or tailored solutions.',
          },
          {
            label: 'Subscription Licensing',
            href: '/downloads/subscription-licensing',
            icon: 'arrowPath',
            description: 'Register the DataNova Core with a subscription license for seamless updates.',
          },
        ],
      },
    ],
  },
  primaryCTA: {
    text: 'Try Free',
    href: 'https://github.com/mearashadowfax/DataNova',
  },
}

async function run() {
  console.log('Seeding navigation settings...')
  await client.createOrReplace(navigationDoc)
  console.log('Navigation settings seeded!')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
