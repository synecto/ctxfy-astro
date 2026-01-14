import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemaTypes'
import {structure} from './deskStructure'

// (опционально) чтобы удобнее было в интерфейсе
const singletonTypes = new Set(['homePage', 'pricingPage'])

export default defineConfig({
  name: 'default',
  title: 'Cerses Studio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [
    deskTool({
      structure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Убираем "Create new" и некоторые действия для singleton-документов
    actions: (prev, context) => {
      const schemaType = context.schemaType
      if (singletonTypes.has(schemaType)) {
        return prev.filter(({action}) => action !== 'duplicate' && action !== 'delete')
      }
      return prev
    },
  },
})
