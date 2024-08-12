import { graphql, useStaticQuery } from "gatsby";

export default function GetPageData(handle) {
    const { allContentfulPageData } = useStaticQuery(graphql`
        query{
            allContentfulPageData {
                edges {
                    node {
                        title
                        handle
                        metaTitle
                        metaDescription {
                            metaDescription
                        }
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
    if (handle){
        const currentPageData = allContentfulPageData.edges.filter(({node}) => {
            return node.handle === handle;
        })
        if (currentPageData.length > 0){
            return currentPageData[0].node;
        }else{
            return null;
        }
    }else{
        return allContentfulPageData.edges;
    }
}
