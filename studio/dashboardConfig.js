export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eca60abc94566308b5a2067',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-i5kn59jn',
                  apiId: 'e449c32c-2863-4c47-8029-b036cd8cb1e0'
                },
                {
                  buildHookId: '5eca60abc16d847f6a50dd3d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y3125wdd',
                  apiId: 'ceb9178b-74a6-4f63-9afd-490faff3b5d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ThomasVanBroekhoven/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y3125wdd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
