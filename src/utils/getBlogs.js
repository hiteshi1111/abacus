import { graphql, useStaticQuery } from "gatsby";

export default function GetBlogs() {
    const { allContentfulBlogs } = useStaticQuery(graphql`
        query{
            allContentfulBlogs(sort: {publishedAt: DESC}){
                edges {
                    node {
                        title
                        handle
                        featuredImage {
                            title
                            description
                            gatsbyImageData
                        }
                        author
                        shortDescription
                        publishedAt
                        content {
                            raw
                        }
                    }
                }
            }
        }
    `)

    return allContentfulBlogs.edges;
}