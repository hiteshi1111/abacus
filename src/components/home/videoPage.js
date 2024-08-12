import { Link } from 'gatsby';
import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import animate1 from "../../images/home/animate1.webp"
import animate2 from "../../images/home/animate2.webp"
import { FaArrowRightLong } from "react-icons/fa6";

const VideoPage = () => {
    return (
        <>
            <section className='md:pt-[30px] relative overflow-hidden'>
                <div className='container'>
                    <div className='flex flex-wrap items-center'>
                        <div className='w-full lg:w-1/2 lg:pe-[40px]'>
                            <h1 className='text-[#000244] md:text-[32px] max-md:text-[24px] md:mb-[20px] max-md:mb-[15px] capitalize'>Cloud Computing & Data Server Solution for Your Business' Growth</h1>
                            <p className='mt-0 max-lg:mb-[30px]'>
                                Welcome to The Abacus, a dynamic cloud computing services provider, is committed to fueling your success. With expertise spanning industries, we offer cloud computing, data center or data server solutions for both startups and enterprises. Our services include Private Cloud, Public Cloud, Rackspace, Bare Metal Servers, VPS Hosting and more. Founded on principles of innovation and excellence, we thrive on delivering measurable results. At The Abacus, we're not just a data center or cloud server, we're your partners in growth.
                                Let's collaborate and elevate your business to new heights.
                            </p>
                        </div>
                        <div className='w-full lg:w-1/2 border-[4px] border-solid border-[#3c62e9]'>
                            <LiteYouTubeEmbed 
                                id="Au3SeC8v8bI"
                                title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                            />
                        </div>
                    </div>
                </div>
                <div className='md:pt-[80px] max-md:pt-[50px] relative overflow-hidden'>
                    <div className='container'>
                        <div className='bg-[#000244] md:py-[60px] max-md:py-[40px] md:px-[60px] max-md:px-[20px] cta-bg-one bg-cover bg-top bg-no-repeat md:rounded-tl-[60px] max-md:rounded-tl-[40px] md:rounded-br-[60px] max-md:rounded-br-[40px]'>
                            <div className='flex flex-wrap items-center'>
                                <div className='lg:w-2/3'>
                                    <h2 className='text-[#fff] md:text-[32px] max-md:text-[24px] lg:mb-[15px] max-lg:mb-[10px] capitalize'>Elevate Your Market Growth</h2>
                                    <p className='my-0 text-[#fff] md:text-[17px] pb-5'>Want to stay secure and connected across the industries? Get infrastructure assembled in minutes and shift
                                    workloads along with applications close to your users.</p>
                                </div>
                                <div className='lg:w-1/3'>
                                    <div>
                                        <Link to="/cloud-computing-franchisee" className="lg:mx-auto btn-switch-text relative overflow-hidden w-full md:max-w-[190px] max-md:max-w-[160px] text-white bg-[#355adc] lg:px-[5px] lg:py-[17px] max-lg:py-[13px] max-lg:px-[30px] flex justify-center items-center md:text-[16px] max-md:text-[14px] rounded-full hover:bg-[#000244]" >
                                            <span className="btn-double-text" data-text="Franchise">Franchise</span><FaArrowRightLong className="ml-[10px]"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="over-shape">
                                <img src={animate1} alt="shape icon" />
                                <img src={animate1} alt="shape icon" />
                                <img src={animate2} alt="shape icon" />
                                <img src={animate2} alt="shape icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoPage;
