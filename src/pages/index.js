import React from 'react';
import Advantages from '../components/home/advantages';
import Meet from '../components/home/meet';
import Services from '../components/home/services';
import Technology from '../components/home/technology';
import Features from '../components/home/features';
import Collaborators from '../components/home/collaborations';
// import Testimonial from '../components/home/testimonial'; 
import Hero from '../components/home/hero';
import Seo from '../components/shared/seo';
import GetPageData from '../utils/getPageData';
import Datacenter from '../components/home/datacenter';
import OtherBlogs from '../components/blog/otherBlogs';
import GetBlogs from '../utils/getBlogs';
import Velosting from '../components/home/velosting';
import Founder from '../components/home/founders';
import CallToAction from '../components/home/cta';
import VideoPage from '../components/home/videoPage';
import { Link } from 'gatsby';
import Content from '../components/home/content';
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
    const pageData = GetPageData("home");
    const allBlogs = GetBlogs();
    return (
        <>
            <Seo
                title={pageData?.metaTitle}
                description={pageData?.metaDescription?.metaDescription}
                script={`
                    {         
                        "@context": "https://schema.org/",         
                        "@type": "Organization",         
                        "@id": "#Organization",         
                        "url": "https://www.theabacus.in/",         
                        "legalName": "The Abacus cloud computing",         
                        "name": "The Abacus",         
                        "description": "Grow your business using Abacus cloud server, a trusted cloud computing provider for secure & reliable solutions.Boost success with leading cloud servers!",         
                        "image": "https://www.theabacus.in/static/media/logo.066dea317256359dee23ed5e766a7626.svg",         
                        "logo": "https://www.theabacus.in/static/media/logo.066dea317256359dee23ed5e766a7626.svg",         
                        "telephone": "07696721675",         
                        "faxNumber": "",         
                        "email": "theabacus.in@gmail.com",         
                        "address": {             
                            "@type": "PostalAddress",             
                            "streetAddress": "B-70, Phase 7, Sector 74, SAS Nagar, Punjab 160055",             
                            "addressLocality": "SAS Nagar",             
                            "addressRegion": "PB",             
                            "addressCountry": "India",             
                            "postalCode": "160055"        
                        },         
                        "sameAs": [             
                            "https://www.facebook.com/abacuscloudcomputing",          
                            "",             
                            "https://www.instagram.com/abacus.cloud/",             
                            "https://www.linkedin.com/company/abacuscloud/",           
                            "https://twitter.com/Abacus_cloud"       
                        ] 
                    } 
                `}
                schema={`
                    {
                        "@context": "https://schema.org/",
                        "@type": "WebSite",
                        "name": "theabacus",
                        "url": "https://www.theabacus.in/",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://www.theabacus.in/?search={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    }
                `}
                otherScript={`
                    {         
                        "@context": "https://schema.org/",         
                        "@type": "LocalBusiness",         
                        "@id": "https://www.theabacus.in/#LocalBusiness",         
                        "url": "https://www.theabacus.in/",          
                        "name": "The Abacus",
                        "description": "Grow your business using Abacus cloud server, a trusted cloud computing provider for secure & reliable solutions.Boost success with leading cloud servers!",
                        "logo": "https://www.theabacus.in/static/media/logo.066dea317256359dee23ed5e766a7626.svg",
                        "telephone": "+91 7696721675",
                        "email": "theabacus.in@gmail.com",
                        "address": {             
                            "@type": "PostalAddress",             
                            "streetAddress": "B-70, Phase 7, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar",             
                            "addressLocality": "Mohali",             
                            "addressRegion": "PB",             
                            "addressCountry": "India",             
                            "postalCode": "160055"        
                        }
                    } 
                `}
                keywords={pageData?.keywords?.keywords}
            />
            <>
                <Hero/>
                <VideoPage />
                <Technology/>
                <Advantages />
                <Services />
                <Features/>
                <Datacenter/>
                <Collaborators />
                <Founder/>
                <Velosting/>
                {/* <Testimonial /> */}
                <Meet />
                <div className='section-blog'>
                    <OtherBlogs otherBlogs={allBlogs.slice(0,3)} title="Our latest newsletter and blogs" />
                    <div className='flex justify-center w-full md:mt-[-40px] pb-[70px]'>
                        <Link to="/blog" className="mx-auto btn-switch-text relative overflow-hidden w-full md:max-w-[190px] max-md:max-w-[160px] text-white bg-[#355adc] lg:px-[5px] lg:py-[17px] max-lg:py-[13px] max-lg:px-[30px] flex justify-center items-center md:text-[16px] max-md:text-[14px] rounded-full hover:bg-[#000244]" >
                            <span className="btn-double-text" data-text="See All">See All</span><FaArrowRightLong className="ml-[10px]"/>
                        </Link>
                    </div>
                </div>
                <Content/>
                <CallToAction/>
            </>
        </>
    )
}

export default Home;