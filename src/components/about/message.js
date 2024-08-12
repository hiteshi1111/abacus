import React from 'react';
import SectionHeader from '../../components/shared/sectionHeader';
import { StaticImage } from 'gatsby-plugin-image';

const Message = () => {
    return (
        <section className='bg-[#f3f5fa]'>
            <div className='container !max-w-[1100px]'>
                <SectionHeader
                    title={data.title}
                />
                <div className='md:pt-[20px] pt-[10px] flex flex-col md:flex-row gap-10 w-full mt-[50px]'>
                    <div className='max-w-[400px] md:m-0 m-auto'>
                        <figure className='bg-[#fff] p-[20px]'>
                            <StaticImage
                                src='../../images/about/president.webp'
                                alt="president"
                                className='object-center object-cover w-full h-full'
                                loading="lazy"
                            />
                            <figcaption className='mt-[20px] text-[18px] text-center font-semibold'>Yours sincerely,<br /><span className='uppercase inline-block pt-[5px]'>RANJIT SINGH SANDHU</span></figcaption>
                        </figure>
                    </div>
                    <div className='Message w-full lg:w-[65%] md:w-[65%] mx-auto text-left md:text-justify lg:text-left'>
                        <p className='text-[17px] leading-[30px]' dangerouslySetInnerHTML={{ __html: data.description }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

const data = {
    title: "President's Message",
    description: "I am delighted to welcome you to Abacus. We are transforming the landscape of cloud computing and broadband services in our state. Continuously striving to expand our reach, enhance capabilities, and broaden service offerings, Abacus is at the forefront of revolutionizing cloud and networking in Punjab through its secure, intelligent, and efficient infrastructure—a consistent effort over the past few months.<br/><br/> Our innovative mindset and forward-thinking approach set us apart. This distinctiveness is why we consistently earn trust and why numerous clients return to us. We have a clear vision of our objective—providing secure dataspace and high-speed internet access with absolute reliability. Guided by five core values—lead, grow, deliver, sustain, and protect—we steer our business. <br/><br/> I take pride in the work we accomplish and personally assure you that we will uphold our commitments, ensuring safety and sustainability in all that we deliver."
}

export default Message;