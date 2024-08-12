import React from 'react';
import SectionHeader from '../shared/sectionHeader';
import { Link } from 'gatsby';
import { windowScroll } from '../../utils/windowScroll';
import { GatsbyImage } from 'gatsby-plugin-image';
import frameshapdot1 from "../../images/home/frame-shap-dot1.webp"

const OtherBlogs = ({otherBlogs, title=""}) => {
    return (
        <section className='relative overflow-hidden'>
            <div className="absolute w-[full] right-[10px] bottom-[50px] animate-[animate-bounceTop_5s_infinite_ease-in-out_alternate] max-lg:opacity-30 opacity-40">
                <img className="object-cover" src={frameshapdot1} alt=""/>
            </div>
            <div className='container relative z-10'>
            <SectionHeader title={title} />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] sm:gap-[20px] lg:gap-[20px] pt-[20px]'>
                {otherBlogs?.length > 0 && otherBlogs.splice(0,3).map(({node}, i) => (
                    <Link 
                        key={i} 
                        to={`/blog/${node.handle}`} 
                        onClick={windowScroll} 
                        aria-label={node.title}
                        className='bg-[#fff] flex flex-col group border p-[8px] rounded-[8px] duration-500 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0px_4px_25px_rgba(0,0,0,0.12)] justify-start'
                    >
                        <div className='relative pt-[75%] w-full overflow-hidden relative duration-500'>
                            <GatsbyImage 
                                image={node.featuredImage.gatsbyImageData}
                                title={node.featuredImage.title}
                                alt={node.featuredImage.description || node.featuredImage.title}
                                className='!absolute top-0 left-0 w-full h-full object-center object-cover duration-500 group-hover:scale-[1.08]'
                                loading="lazy"
                            />
                        </div>
                        <div className='flex flex-col justify-between items-center p-[10px] gap-[10px] h-full'>
                            <div>
                                <h3 className='text-[22px] !mb-[10px] text-[#000244] group-hover:text-[#3c62e9] duration-500'>{node.title}</h3>
                                <p className='!mb-0 text-[16px]'>{node.shortDescription}... <span className='text-[#00F] text-[14px]'>Read More</span></p>
                            </div>
                            <div className='w-full mx-auto'>
                                <div className='mb-0 font-medium text-[16px]'><span className="font-bold text-[16px]">Author:</span> {node.author}</div>
                                <div className='mb-0 font-medium text-[16px]'><span className="font-bold text-[16px]">Published At:</span> {node.publishedAt}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            </div>
        </section>
    )
}

export default OtherBlogs;