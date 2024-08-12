import React from 'react'
import { Link } from 'gatsby';
import { windowScroll } from '../../utils/windowScroll';
import { StaticImage } from "gatsby-plugin-image";

const ContactBar = ({vertical=false}) => {
    return (
        <section className={`py-[20px] w-full bg-gradient-to-br from-blue-900 to-blue-400 rounded-[22px]`}>
            <div className={`max-w-[1100px] mx-auto flex w-full align-middle items-center justify-between p-[20px] ${vertical ? "flex-col py-[100px] px-[30px]" : "flex-row w-full px-[30px]"}`}>
                <div className={`w-full ${vertical ? "lg:w-full" : "lg:w-1/2 sm:w-full"}`}>
                    <h3 className='text-white max-w-[500px] text-[30px] pb-[40px] leading-[40px] font-normal'><span className='mt-[12px]'>Want to know more about</span> Abacus Private Cloud Services?</h3>
                    <Link
                        to="/contact-us"
                        onClick={windowScroll}
                        aria-label='contact us'
                        className='text-black bg-[#fff] h-[45px] w-[150px] flex justify-center items-center text-[16px] rounded-full hover:text-black hover:font-bold hover:text-[#3C62E9]'
                    >Get In Touch</Link>
                </div>
                <div className={`relative overflow-hidden lg:w-1/2 sm:w-full ${vertical ? "lg:animate-pulse lg:w-full mb-[30px] mt-[50px] text-center max-w-[400px] w-full lg:max-w-none pt-[100%] md:pt-[70%] lg:pt-[115%]" : "text-right pt-[40%] lg:pt-[25%] max-w-[220px] md:max-w-[250px] lg:max-w-[220px]"}`}>
                    <StaticImage
                        src="../../images/contact.webp"
                        alt="contact"
                        className='!absolute top-0 left-0 object-center object-cover w-full h-full'
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactBar;