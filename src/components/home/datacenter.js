import React from "react";
import { Link } from 'gatsby';
import animate1 from "../../images/home/animate1.webp"
import animate2 from "../../images/home/animate2.webp"
import { FaArrowRightLong } from "react-icons/fa6";


const Datacenter = () => {
    return (
        <>
            <section className="pt-0">
                <div className='relative overflow-hidden'>
                    <div className='container'>
                        <div className='bg-[#000244] md:pt-[40px] md:pb-[30px] max-md:py-[30px] md:px-[60px] max-md:px-[20px] cta-bg-two bg-cover bg-top bg-no-repeat rounded-[10px]'>
                            <div className='flex flex-wrap items-center'>
                                <div className='lg:w-2/3'>
                                    <h2 className='text-[#fff] md:text-[32px] max-md:text-[24px] lg:mb-[15px] max-lg:mb-[10px] capitalize'>Buy Cloud Hosting Services & Domain</h2>
                                    <p className='my-0 text-[#fff] md:text-[17px] pb-5'>We are a one stop destination for reliable hosting and domain services. At velosting, we ensure  providing top-notch hosting solutions customised to your unique requirements. No matter whether it is a small organisation or a large corporation, we offer you a perfect plan to support your business. Join us today and take your online presence to new heights.</p>
                                </div>
                                <div className='lg:w-1/3'>
                                    <div>
                                        <Link to="/contact-us/" className="lg:mx-auto btn-switch-text relative overflow-hidden w-full md:max-w-[190px] max-md:max-w-[160px] text-[#000244] bg-[#fff] lg:px-[5px] lg:py-[17px] max-lg:py-[13px] max-lg:px-[30px] flex justify-center items-center md:text-[16px] max-md:text-[14px] rounded-full hover:bg-[#fff]" >
                                            <span className="btn-double-text" data-text="Contact Us">Contact Us</span><FaArrowRightLong className="ml-[10px]"/>
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
export default Datacenter;