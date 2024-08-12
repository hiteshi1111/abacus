import React from 'react'
import SectionHeader from '../../components/shared/sectionHeader';
import testimonialBg from "../../images/leadership_bg.webp";
import { StaticImage } from 'gatsby-plugin-image';

const Leadership = () => {
    return (
        <section className="relative leadership_section bg-[#fff] bg-cover bg-repeat bg-fixed after:content-[''] after:absolute after:w-full after:h-full after:mix-blend-multiply after:top-0 after:inset-x-0 after:bg-[#000244d4]"
         style={{ backgroundImage: `url(${testimonialBg})` }}>
            <div className='container relative z-10	!max-w-[900px]'>
                <SectionHeader
                    title={data.title}
                />
                <div className='md:pt-[20px] pt-[10px] grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[10px] lg:gap-[20px] xl:gap-[30px] w-full mt-[50px] md:max-w-[100%] max-w-[400px] mx-[auto]'>
                    <div className='bg-[#fff] shadow-[0px_4px_20px_rgba(0,0,0,0.04)]'>
                        <div className='relative pt-[120%] w-full'>
                            <StaticImage 
                                src='../../images/about/ceo.webp'
                                alt={data.team[0].fullName}
                                className='!absolute top-0 left-0 object-center w-full h-full'
                                loading="lazy"
                            />
                        </div>
                        <div className='p-[25px] lg:p-[20px] xl:p-[30px] grid gap-[10px]'>
                            <h3 className='text-[17px] lg:text-[18px] xl:text-[20px] !m-0'>{data.team[0].fullName}</h3>
                            <p className='text-[14px] lg:text-[15px] xl:text-[16px] !m-0 uppercase'>{data.team[0].designation}</p>
                        </div>
                    </div>
                    <div className='bg-[#fff] shadow-[0px_4px_20px_rgba(0,0,0,0.04)]'>
                        <div className='relative pt-[120%] w-full'>
                            <StaticImage 
                                src='../../images/about/cto.webp'
                                alt={data.team[1].fullName}
                                className='!absolute top-0 left-0 object-center w-full h-full'
                                loading="lazy"
                            />
                        </div>
                        <div className='p-[25px] lg:p-[20px] xl:p-[30px] grid gap-[10px]'>
                            <h3 className='text-[17px] lg:text-[18px] xl:text-[20px] !m-0'>{data.team[1].fullName}</h3>
                            <p className='text-[14px] lg:text-[15px] xl:text-[16px] !m-0 uppercase'>{data.team[1].designation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const data = {
    title: "Leadership Team",
    description: "I am delighted to welcome you to Abacus. We are transforming the landscape of cloud computing and broadband services in our state. Continuously striving to expand our reach, enhance capabilities, and broaden service offerings, Abacus is at the forefront of revolutionizing cloud and networking in Punjab through its secure, intelligent, and efficient infrastructure—a consistent effort over the past few months.<br/><br/> Our innovative mindset and forward-thinking approach set us apart. This distinctiveness is why we consistently earn trust and why numerous clients return to us. We have a clear vision of our objective—providing secure dataspace and high-speed internet access with absolute reliability. Guided by five core values—lead, grow, deliver, sustain, and protect—we steer our business. <br/><br/> I take pride in the work we accomplish and personally assure you that we will uphold our commitments, ensuring safety and sustainability in all that we deliver.",
    team: [
        // {
        //     fullName: "RANJEET SINGH SANDHU",
        //     designation: "PRESIDENT EMERITUS"
        // },
        {
            fullName: "NAVJOT SINGH SANDHU",
            designation: "Director"
        },
        {
            fullName: "DR. PAWANPREET DHALIWAL",
            designation: "Director"
        },
    ]
}

export default Leadership;