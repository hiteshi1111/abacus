import React, { useState } from "react";
import Seo from '../components/shared/seo';
import SectionHeader from "../components/shared/sectionHeader";
import BreadCrumbs from "../components/shared/breadCrumbs";
import GetPageData from "../utils/getPageData";
import { useLocation } from "react-use";
import { graphql } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';
import { LuZoomIn } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const Media = ({ data }) => {
    const { pathname } = useLocation();
    const [ selectedImage, setSelectedImage ] = useState(null);
    const pageData = GetPageData(pathname?.replaceAll("/", ""));
    const galleryEdges = data.allContentfulGallery.edges;
    const imagesArray = [];
    const videosArray = [];

    galleryEdges.forEach(edge => {
        const { image, videoLink } = edge.node;
        if (image) {
            imagesArray.push(image);
        }
        if (videoLink) {
            videosArray.push(videoLink);
        }
    });

    function closeHandler() {
        setSelectedImage(null);
    }

    return (
        <>
            <Seo
                title={pageData?.metaTitle}
                description={pageData?.metaDescription?.metaDescription}
                keywords={pageData?.keywords?.keywords}
            />
            <section className="container relative">
                <PreviewPopup selectedImage={selectedImage} closeHandler={closeHandler} />
                <BreadCrumbs pages={pages} />
                <SectionHeader
                    title={pageData?.title}
                    description=""
                    h1
                />
                <h2 className="pt-[50px] mb-[20px]">Images</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[30px]'>
                    {imagesArray.map((image, i) => (
                        <button key={i} className='flex flex-col group rounded-[8px] duration-500 justify-start' onClick={() => setSelectedImage(image.gatsbyImageData)}>
                            <div className='relative pt-[62%] w-full overflow-hidden group'>
                                <GatsbyImage
                                    image={image.gatsbyImageData}
                                    alt={image.title || "media"}
                                    className='!absolute top-0 left-0 w-full h-full object-center object-cover'
                                />
                                <div className="group-hover:flex hidden absolute top-0 left-0 justify-center items-center w-full h-full bg-[#0000007d]">
                                    <LuZoomIn size={50} color="#fff" />
                                </div>
                            </div>
                            <p>{image.title}</p>
                        </button>
                    ))}
                </div>

                <h2 className="mt-[50px] mb-[20px]">Videos</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
                    {videosArray.map((videoLink, i) => {
                        return(
                            <div key={i} className='flex flex-col group rounded-[8px] duration-500 justify-start'>
                                <div className='relative w-full overflow-hidden duration-500'>
                                    <LiteYouTubeEmbed
                                        id={videoLink}
                                        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    );
}

const PreviewPopup = ({selectedImage, closeHandler=()=>{}}) => {
    return(
        <div className={`bg-[#0000007d] w-full h-full fixed top-0 left-0 justify-center items-center z-[111] ${selectedImage ? "flex" : "hidden"}`}>
            <div className='bg-white shadow-md p-[10px] rounded-[5px] max-w-[800px] mx-[24px]'>
                <div className="relative w-auto flex h-full ">
                    <button
                        onClick={closeHandler}
                        aria-label="close"
                        className="absolute top-[-25px] right-[-25px] text-black z-[100] font-bold md:w-[35px] max-md:w-[30px] md:h-[35px] max-md:h-[30px] rounded-full bg-white shadow-md flex justify-center items-center"
                    >
                        <IoCloseSharp size={22} />
                    </button>
                    {/* <GatsbyImage 
                        image={selectedImage}
                        alt="gallery"
                        className="preview-img"
                    /> */}
                    <GatsbyImage 
                        image={selectedImage}
                        alt="gallery"
                        className="w-full object-center object-cover z-[99] preview-img"
                    />
                </div>
            </div>
        </div>
    )
}

const pages = [
    {
        title: "Media",
        handle: ""
    }
];

export const query = graphql`
    query {
        allContentfulGallery {
            edges {
                node {
                    image {
                        gatsbyImageData
                        title
                    }
                    videoLink
                }
            }
        }
    }
`;

export default Media;
