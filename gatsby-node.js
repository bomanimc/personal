exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const result = await graphql(`
    {
      allSanityProject(filter: {slug: {current: {ne: null}}}) {
        edges {
          node {
            slug {
              current
            }
            title
            _rawContent
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const projects = result.data.allSanityProject.edges || []
  projects.forEach((edge, index) => {
    const path = `/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve('./src/templates/project.jsx'),
      context: {slug: edge.node.slug.current},
    })
  })
}