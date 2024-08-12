import React from "react";
import { Link } from 'gatsby';
import { IoMdCall } from "react-icons/io";
import data from "../../data/home.json";
import { StaticImage } from 'gatsby-plugin-image';
import { FaArrowRightLong } from "react-icons/fa6";

const Velosting = () => {
    return (
        <section className='py-0 w-full bg-[#f2f4f8]'>
            <div className='container-fluid max-md:px-[15px] max-lg:px-[30px]'>
                <div className='flex max-lg:flex-col items-center gap-[30px]'>
                    <div className='w-full lg:w-1/2'>
                        <div className="bg-col-helf relative p-[50px] overflow-hidden z-10 text-center">
                            <div className="relative w-full">
                                <a href="https://velosting.com/" target='_blank' className='block' aria-label="velosting" rel="noreferrer">
                                    <StaticImage
                                        src="../../images/velosting-logo.webp"
                                        alt="velosting"
                                        loading="lazy"
                                        className="lg:w-[400px]"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <div className="max-w-[680px] max-lg:pb-[40px]">
                            <div className='heading-animation before:left-[50px] !text-left after:left-[50px] after:right-auto'> 
                                <h2 className="text-[#000244] md:text-[32px] max-md:text-[24px] md:mb-[20px] max-md:mb-[15px] capitalize">Faster, Secure & Powerful Cloud Web Hosting & Domain Services</h2>       
                            </div>
                            <p className="mt-0 mb-0">Experience Velosting: Lightning-fast, secure, and robust cloud web hosting and domain services. Power your online presence with unparalleled speed and reliability. Elevate your website's performance and security with Velosting today!</p>
                            <div className="flex flex-wrap items-center gap-[10px] md:mt-[30px] max-md:mt-[20px]">
                                <Link to={`tel:${data.collaboratorSection.velosting.number}`} className="btn-switch-text relative overflow-hidden w-full md:max-w-[190px] max-md:max-w-[160px] text-white bg-[#355adc] lg:px-[5px] lg:py-[17px] max-lg:py-[13px] max-lg:px-[30px] flex justify-center items-center md:text-[16px] max-md:text-[14px] rounded-full hover:bg-[#000244]" >
                                    <IoMdCall size={22} className='mr-[7px]' /><span className="btn-double-text" data-text="Call Now">Call Now</span>
                                </Link>
                                <Link to="https://velosting.com" target='_blank' className="btn-switch-text relative overflow-hidden w-full md:max-w-[190px] max-md:max-w-[160px] text-white bg-[#355adc] lg:px-[5px] lg:py-[17px] max-lg:py-[13px] max-lg:px-[30px] flex justify-center items-center md:text-[16px] max-md:text-[14px] rounded-full hover:bg-[#000244]" >
                                    <span className="btn-double-text" data-text="Know More">Know More</span><FaArrowRightLong className="ml-[10px]"/>
                                </Link>
                                {/* <a href={`tel:${data.collaboratorSection.velosting.number}`}
                                    className='lg:w-full md:lg:w-full max-w-[205px] text-white bg-[#3C62E9] inline-flex mt-[30px] mr-[15px] h-[45px] w-[150px] flex justify-center items-center text-[14px] md:text-[16px]  md:w-[208px] rounded-full hover:bg-white hover:text-black hover:font-bold hover:text-[#3C62E9] hover:border hover:border-[#3C62E9]'
                                    aria-label="contact number"
                                ><IoMdCall className='mr-[5px]' />{data.collaboratorSection.velosting.number}</a> */}
                                {/* <a href={`https://velosting.com`}
                                    target='_blank' 
                                    className='lg:w-full md:lg:w-full max-w-[205px] text-white bg-[#3C62E9] inline-flex mt-[30px] h-[45px] w-[150px] flex justify-center items-center text-[14px] md:text-[16px] md:w-[208px] rounded-full hover:bg-white hover:text-black hover:font-bold hover:text-[#3C62E9] hover:border hover:border-[#3C62E9]'
                                    aria-label="contact number"
                                    rel="noreferrer"
                                >Know More</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Velosting;