import React from 'react';
import Seo from '../components/shared/seo';
import { Link, graphql } from 'gatsby';
import SectionHeader from '../components/shared/sectionHeader';
import BreadCrumbs from '../components/shared/breadCrumbs';
import GetPageData from '../utils/getPageData';
import { useLocation } from 'react-use';
import { GatsbyImage } from 'gatsby-plugin-image';

const Services = ({data}) => {
    const allServices = data.allContentfulServices.edges;
    const { pathname } = useLocation();
    const pageData = GetPageData(pathname?.replaceAll("/", ""));
    return (
        <>
        <Seo 
            title={pageData?.metaTitle} 
            description={pageData?.metaDescription?.metaDescription}
            keywords={pageData?.keywords?.keywords}
        />
        <section className='bg-[#f0f0f0]'>
            <BreadCrumbs pages={pages} />
            <SectionHeader title={pageData?.title} h1/>

            <div className='container'>
                {allServices.map(({node}, i) => (
                    <div key={i} className={`flex justify-center items-center px-[30px] gap-[80px] ${i%2===0 ? "flex-row" : "flex-row-reverse"}`}>
                        <div className='min-[320px]:hidden lg:block py-5'>
                            <GatsbyImage 
                                image={node.featuredImage.gatsbyImageData}
                                alt={node.title || "cloud based services"}
                                className='w-[530px]'
                            />
                        </div>
                        <div className='lg:w-1/2 sm:w-full sm:w-[100%] sm:tems-left'>
                            <h2 className=''>{node.title}</h2>
                            <p>{node.shortDescription?.shortDescription}</p>
                            <Link 
                                to={`/service/${node.handle}`} 
                                aria-label={node.title || "cloud based services"}
                                className='max-w-[150px] text-white bg-[#355adc] h-[45px] w-[150px] flex justify-center items-center text-[14px] md:text-[16px] rounded-full hover:bg-[#040538] min-[320px]:my-5'
                            >Read More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

const pages = [
    {
        title: "Services",
        handle: ""
    }
]

export const query = graphql`
    query{
        allContentfulServices(sort: {createdAt: ASC}) {
            edges {
                node {
                    title
                    shortDescription {
                        shortDescription
                    }
                    handle
                    featuredImage {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`

export default Services;