import React from 'react';
import Seo from '../components/shared/seo';
import { Link } from 'gatsby';
import { windowScroll } from '../utils/windowScroll';
import SectionHeader from '../components/shared/sectionHeader';
import BreadCrumbs from '../components/shared/breadCrumbs';
import GetBlogs from '../utils/getBlogs';
import { GatsbyImage } from 'gatsby-plugin-image';

const Blogs = () => {
    const data = GetBlogs();
    return (
        <>
        <Seo 
            title="The Abacus Blog: Get Cloud Computing Server Solutions"
            description='Find the latest insights on cloud computing server solutions and cloud server technologies at The Abacus Blog. Stay informed & optimize your cloud infrastructure.'
            keywords='clod computing blog, data server, data center, cloud computing services'
        />
        <div className='container'>
            <section>
                <BreadCrumbs pages={pages} />
                <SectionHeader 
                    title="Blogs"
                    description='Navigating the Cloudscape: Your Ultimate Guide to Optimizing and Understanding Cloud Solutions'
                    h1
                    breadCrumb
                />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] sm:gap-[20px] lg:gap-[20px] '>
                    {data.map(({node}, i) => (
                        <Link key={i} to={`/blog/${node.handle}`} onClick={windowScroll} className='flex flex-col group border p-[8px] rounded-[8px] duration-500 shadow-md hover:shadow-[0px_4px_25px_rgba(0,0,0,0.12)] justify-start' aria-label={node.title}>
                            <div className='relative pt-[75%] w-full overflow-hidden relative duration-500'>
                                {node.featuredImage && (
                                    <GatsbyImage
                                        image={node.featuredImage.gatsbyImageData} 
                                        title={node.featuredImage.title}
                                        alt={node.featuredImage.description || node.featuredImage.title}
                                        className='!absolute top-0 left-0 w-full h-full object-center object-cover duration-500 group-hover:scale-[1.08]'
                                    />
                                )}
                            </div>
                            <div className='flex flex-col justify-between items-center p-[10px] gap-[10px] h-full'>
                                <div>
                                    {node.title && (
                                        <h4 className='!mb-[10px] text-[#000244] group-hover:text-[#3c62e9] duration-500'>{node.title}</h4>
                                    )}
                                    {node.shortDescription && (
                                        <p className='!mb-0 text-[16px]'>{node.shortDescription}... <span className='text-[#00F] text-[14px]'>Read More</span></p>
                                    )}
                                </div>
                                <div className='w-full mx-auto'>
                                    {node.author && (
                                        <div className='mb-0 font-medium text-[16px]'><span className="font-bold text-[16px]">Author:</span> {node.author}</div>
                                    )}
                                    {node.publishedAt && (
                                        <div className='mb-0 font-medium text-[16px]'><span className="font-bold text-[16px]">Published At:</span> {node.publishedAt}</div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
        </>
    )
}

const pages = [
    {
        title: "Blogs",
        handle: ""
    }
]

export default Blogs;