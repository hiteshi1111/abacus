const path = require("path");
const redirects = require("./redirects.json");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage, createRedirect  } = actions;

    redirects.forEach(redirect =>
        createRedirect({
            fromPath: redirect.fromPath,
            toPath: redirect.toPath,
            isPermanent: true
        })
    )

    const blogs = await graphql(`
    {
        allContentfulBlogs {
            edges {
                node {
                    title
                    handle
                    bannerImage {
                        title
                        description
                        gatsbyImageData
                    }
                    author
                    content {
                        raw
                    }
                    metaTitle
                    metaDescription
                    keywords
                    publishedAt
                    keywords
                }
            }
        }
    }
    `)

    const services = await graphql(`
    {
        allContentfulServices {
            edges {
                node {
                    title
                    subtitle
                    handle
                    bannerImage {
                        gatsbyImageData
                    }
                    content {
                        raw
                    }
                    metaTitle
                    metaDescription
                    keypoints {
                        title
                    }
                    keywords {
                        keywords
                    }
                    reasons {
                        title
                        icon {
                            gatsbyImageData
                        }
                        description {
                            description
                        }
                    }
                    typesDescription {
                        typesDescription
                    }
                    types {
                        title
                        description {
                            description
                        }
                        icon {
                            gatsbyImageData
                        }
                    }
                    howDoesItWorkDescription {
                        howDoesItWorkDescription
                    }
                    howDoesItWorks {
                        title
                        description {
                            description
                        }
                    }
                }
            }
        }
    }
    `)

    // Create pages for each markdown file.
    const serviceTemplate = path.resolve(`src/templates/service.js`)
    services.data.allContentfulServices.edges.forEach(({node}) => {
        createPage({
            path: `/service/${node.handle}`,
            component: serviceTemplate,
            context: {
                data: node,
            },
        })
    })
    const blogTemplate = path.resolve(`src/templates/blog.js`)
    blogs.data.allContentfulBlogs.edges.forEach(({node}) => {
        createPage({
            path: `/blog/${node.handle}`,
            component: blogTemplate,
            context: {
                data: node,
            },
        })
    })
}