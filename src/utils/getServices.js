import { graphql, useStaticQuery } from "gatsby";

export default function GetServices() {
    const { allContentfulServices } = useStaticQuery(graphql`
        query{
            allContentfulServices {
                edges {
                    node {
                        title
                        handle
                        content {
                            raw
                        }
                        keywords {
                            keywords
                        }
                    }
                }      
            }
        }
    `)
    return allContentfulServices.edges;
}