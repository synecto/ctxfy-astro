// studio/deskStructure.ts
import type {StructureResolver} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list' // optional, если захочешь drag&drop порядок
// Если не хочешь orderable — можно удалить импорт и блоки с orderable.

const singletonTypes = new Set(['homePage', 'pricingPage', 'landingPage'])

export const structure: StructureResolver = (S, context) => {
  // Helper: singleton item
  const singleton = (title: string, type: string, id = type) =>
    S.listItem().title(title).id(id).child(S.document().schemaType(type).documentId(id))

  // Helper: filter out singletons from auto lists
  const defaultItems = S.documentTypeListItems().filter(
    (item) => !singletonTypes.has(item.getId() || ''),
  )

  return S.list()
    .title('Content')
    .items([
      singleton('Home', 'homePage', 'home'),
      singleton('Landing', 'landingPage', 'landing'),
      singleton('Pricing', 'pricingPage', 'pricing'),

      S.divider(),

      // Use Cases
      S.listItem()
        .title('Use cases')
        .id('useCases')
        .child(
          S.documentTypeList('useCase')
            .title('Use cases')
            .menuItems([
              S.orderingMenuItem({title: 'Title A→Z', by: [{field: 'title', direction: 'asc'}]}),
              S.orderingMenuItem({title: 'Newest', by: [{field: '_createdAt', direction: 'desc'}]}),
            ]),
        ),

      // Examples
      S.listItem()
        .title('Examples')
        .id('examples')
        .child(
          S.documentTypeList('example')
            .title('Examples')
            .menuItems([
              S.orderingMenuItem({title: 'Newest', by: [{field: '_createdAt', direction: 'desc'}]}),
              S.orderingMenuItem({title: 'Title A→Z', by: [{field: 'title', direction: 'asc'}]}),
            ]),
        ),

      S.divider(),

      // Docs: categories -> docs in category
      S.listItem()
        .title('Docs')
        .id('docsRoot')
        .child(
          S.list()
            .title('Docs')
            .items([
              S.listItem()
                .title('Categories')
                .id('docCategories')
                .child(
                  S.documentTypeList('docCategory')
                    .title('Doc categories')
                    .menuItems([
                      S.orderingMenuItem({
                        title: 'Order',
                        by: [{field: 'order', direction: 'asc'}],
                      }),
                      S.orderingMenuItem({
                        title: 'Title A→Z',
                        by: [{field: 'title', direction: 'asc'}],
                      }),
                    ]),
                ),

              S.listItem()
                .title('Pages (all)')
                .id('docAll')
                .child(
                  S.documentTypeList('doc')
                    .title('All doc pages')
                    .menuItems([
                      S.orderingMenuItem({
                        title: 'Order',
                        by: [{field: 'order', direction: 'asc'}],
                      }),
                      S.orderingMenuItem({
                        title: 'Title A→Z',
                        by: [{field: 'title', direction: 'asc'}],
                      }),
                    ]),
                ),

              // Быстрый доступ: pages by category (nested)
              S.divider(),
              S.listItem()
                .title('Pages by category')
                .id('docByCategory')
                .child(
                  S.documentTypeList('docCategory')
                    .title('Pick a category')
                    .child((categoryId) =>
                      S.documentList()
                        .title('Pages in category')
                        .filter('_type == "doc" && category._ref == $categoryId')
                        .params({categoryId})
                        .menuItems([
                          S.orderingMenuItem({
                            title: 'Order',
                            by: [{field: 'order', direction: 'asc'}],
                          }),
                          S.orderingMenuItem({
                            title: 'Title A→Z',
                            by: [{field: 'title', direction: 'asc'}],
                          }),
                        ]),
                    ),
                ),
            ]),
        ),

      S.divider(),

      ...defaultItems,
    ])
}
