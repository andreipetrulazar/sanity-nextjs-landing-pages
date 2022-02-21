export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62134d71ee4be84f2b22eefe',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ukwoyvp1',
                  apiId: 'ca0f93e0-4edb-4969-a7cd-dc58f7e0033b'
                },
                {
                  buildHookId: '62134d7130c0b5ad51f5c7a2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-be9xtudd',
                  apiId: '6ff99fad-297f-4a44-af8e-0de3ae329e2e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andreipetrulazar/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-be9xtudd.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
