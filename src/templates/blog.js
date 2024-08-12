import React, { useEffect, useState } from "react";
import Seo from "../components/shared/seo";
import OtherBlogs from "../components/blog/otherBlogs";
import BreadCrumbs from "../components/shared/breadCrumbs";
import { GatsbyImage } from "gatsby-plugin-image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import GetBlogs from "../utils/getBlogs";
import ContactBar from "../components/service/contactBar";
import { Link } from "gatsby";

const Blog = ({ pageContext }) => {
    const blogData = pageContext.data;
    const data = GetBlogs();
    const [otherBlogs, setOtherBlogs] = useState(null);
    
    useEffect(() => {
        const otherData = data.filter(({node}) => {
            return node.handle !== blogData.handle;
        })
        setOtherBlogs(otherData);
    }, [data, blogData]);

    const pages = [
        {
            title: "Blog",
            handle: "/blog"
        },
        {
            title: blogData?.title,
            handle: ""
        }
    ]
    const document = blogData?.content && JSON.parse(blogData.content.raw);
    const options = {
        renderText: text => {
            return text.split('\n').reduce((children, textSegment, index) => {
                return [
                    ...children,
                    index > 0 && <br key={index} />,
                    textSegment,
                ]
            }, [])
        },
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <img
                    src={node.data?.target?.fields?.file?.url}
                    alt={node.data?.target?.fields?.title || "blog"}
                />
            ),
        },
    }

    return(
        <>
        <Seo 
            title={blogData?.metaTitle} 
            description={blogData?.metaDescription}
            keywords={blogData?.keywords}
            schema={`{
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.theabacus.in/blog/${blogData?.handle}"
                },
                "headline": "${blogData?.title}",
                "image": [
                    "${blogData?.bannerImage}"
                ],
                "datePublished": "${blogData?.publishedAt}",
                "author": {
                    "@type": "Person",
                    "name": "${blogData?.author}"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "The Abacus",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.theabacus.in/static/media/logo.066dea317256359dee23ed5e766a7626.svg"
                    }
                },
                "description": "${blogData?.shortDescription}"
            }`}
        />
        <div>
            <div className='relative sm:pt-[35%] pt-[40%] w-full'>
                {blogData?.bannerImage && (
                    <GatsbyImage 
                        image={blogData?.bannerImage.gatsbyImageData} 
                        title={blogData?.bannerImage.title}
                        alt={blogData?.bannerImage.description || blogData?.bannerImage.title}
                        className='!absolute top-0 left-0 w-full h-full object-center object-cover '
                    />
                )}
                <div className="absolute z-[1] w-full h-full bg-[#00000075] top-0"/>
                <div className="absolute z-[2] top-[10%] lg:top-[40%] left-[0] w-full">
                    <BreadCrumbs pages={pages} white />
                    <h1 className='capitalize max-md:text-[20px] font-bold text-white w-full text-center px-[10px] md:px-[30px]'>{blogData?.title}</h1>
                </div>
            </div>
            <div className="relative lg:flex container gap-[10px]">
                <div className="mt-[20px]">
                    {blogData?.content && (
                        <section className="w-full mx-auto !max-w-[1200px] px-[10px] lg:px-[30px] !pt-[10px]">
                            <div className="blog_content">{documentToReactComponents(document, options)}</div>
                        </section>
                    )}
                    <div className='w-full mx-auto !max-w-[1200px] px-[10px] lg:px-[30px] flex justify-between items-center mb-[20px]'>
                        <div className='mb-0 font-medium text-[16px]'><span className="font-bold text-[16px]">Author:</span> {blogData?.author}</div>
                        <div className='mb-0 font-medium text-[16px]'><span className="font-bold text-[16px]">Published At:</span> {blogData?.publishedAt}</div>
                    </div>
                </div>
                <div className="pt-[50px]">
                    <ContactBar vertical/>
                    <div className="mt-[50px]">
                        <h3>Recent Blogs</h3>
                        <div className="grid gap-[10px] mt-[20px]">
                            {otherBlogs?.length > 0 && otherBlogs.map(({node}, i) => (
                                <Link
                                    key={i}
                                    to={`/blog/${node.handle}`}
                                    className="border px-[10px] py-[5px] flex justify-between items-center gap-[10px]"
                                >
                                    <span className="text-[16px]">{node.title}</span>
                                    <GatsbyImage
                                        image={node.featuredImage.gatsbyImageData}
                                        alt="blog"
                                        className="max-w-[90px]"
                                    />
                                </Link>    
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <OtherBlogs title="Other Blogs" otherBlogs={otherBlogs} />
            </div>
        </div>
        </>
    )
}

export default Blog;
