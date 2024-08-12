import React from 'react';
import SectionHeader from '../shared/sectionHeader';
import { StaticImage } from 'gatsby-plugin-image';
import frameshapdot1 from "../../images/home/frame-shap-dot1.webp"

const Meet = () => {
    return (
        <section className="pb-[5px] relative overflow-hidden">
            <div className="absolute w-full left-[10px] bottom-[50px] animate-[animate-bounceTop_5s_infinite_ease-in-out_alternate] max-lg:opacity-30 opacity-40">
                <img className="object-cover" src={frameshapdot1} alt=""/>
            </div>
            {/* <div className="absolute w-[full] right-[10px] bottom-[50px] animate-[animate-bounceTop_5s_infinite_ease-in-out_alternate] max-lg:opacity-30 opacity-40">
                <img className="object-cover" src={frameshapdot1} alt=""/>
            </div> */}
            <div className="container">
                <SectionHeader
                    title='meet abacus'
                    description='Since last decade, Abacus cloud solutions has set a goal to provide visionaries with best cloud computing and network management services.'
                    maxWidth='700px'
                />
                <div className="grid md:grid-cols-3 max-md:grid-cols-1 lg:gap-[30px] max-lg:gap-[15px] mt-[40px]">
                    <div className={`relative rounded-[30px] border w-full lg:px-[40px] max-lg:px-[25px] py-[40px] md:my-[0] max-md:my-[10px] md:max-w-[unset] max-md:max-w-[450px] m-auto bg-white`}>
                        <div className="relative w-[80px] h-[80px] rounded-full flex justify-center items-center border mx-auto"> 
                            <StaticImage
                                src="../../icons/meet/meet1.webp"
                                alt={data[0].title}
                                loading="lazy"
                                className='max-w-[30px]'
                            />
                            <span className={`absolute left-[-15px] top-[-6px] opacity-[0.15] h-[40px] w-[40px] rounded-[50%] bg-[#0A1992]`} ></span>
                        </div>
                        <h3 className={`capitalize md:text-[24px] max-md:text-[20px] w-full text-center mt-[15px] mb-[0px] text-black`}>{data[0].title}</h3>
                        <p className='text-center text-[15px] mt-[20px] mb-[0px] w-full max-w-[472px] mx-auto'>{data[0].desc}</p>
                    </div>
                    <div className={`relative rounded-[30px] border py-[40px] w-full px-[25px] lg:px-[40px] md:my-[0] my-[10px] md:max-w-[unset] max-w-[450px] m-auto bg-[#21407E] text-white`}>
                        <div className="relative w-[80px] h-[80px] rounded-full flex justify-center items-center border mx-auto"> 
                            <StaticImage
                                src="../../icons/meet/meet2.svg"
                                alt={data[1].title}
                                loading="lazy"
                            />
                            <span className={`absolute left-[-15px] top-[-6px] opacity-[0.15] h-[40px] w-[40px] rounded-[50%] bg-[#fff]`} ></span>
                        </div>
                        <h3 className={`capitalize md:text-[24px] max-md:text-[20px] w-full text-center mt-[15px] mb-[0px] text-white`}>{data[1].title}</h3>
                        <p className='text-center text-[15px] mt-[20px] mb-[0px] w-full max-w-[472px] mx-auto'>{data[1].desc}</p>
                    </div>
                    <div className={`relative rounded-[30px] border py-[40px] w-full px-[25px] lg:px-[40px] md:my-[0] my-[10px] md:max-w-[unset] max-w-[450px] m-auto bg-white`}>
                        <div className="relative w-[80px] h-[80px] rounded-full flex justify-center items-center border mx-auto"> 
                            <StaticImage
                                src="../../icons/meet/meet3.svg"
                                alt={data[2].title}
                                loading="lazy"
                            />
                            <span className={`absolute left-[-15px] top-[-6px] opacity-[0.15] h-[40px] w-[40px] rounded-[50%] bg-[#0A1992]`} ></span>
                        </div>
                        <h3 className={`capitalize md:text-[24px] max-md:text-[20px] w-full text-center mt-[15px] mb-[0px] text-black`}>{data[2].title}</h3>
                        <p className='text-center text-[15px] mt-[20px] mb-[0px] w-full max-w-[472px] mx-auto'>{data[2].desc}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const data = [
    {
        title: "Our story",
        desc: "The founders of Abacus cloud server agency have a proven track record of turning ideas into impactful realities. We lead a dedicated team in creating cutting-edge cloud computing  solutions that shape tomorrow's world. With expertise in technology, innovation and strategic leadership, we thrive in dynamic environments and thrive on challenges. Let's connect and collaborate on the next big thing!"
    },
    {
        title: "Our vision",
        desc: "Abacus Cloud’s vision is to empower users with cutting-edge cloud solutions beyond the boundaries. At Abacus business cloud server, we are committed to creating a virtual heaven where your data lives securely, and your ambitions grow without limits. We shape a world where possibilities are limitless, and growth knows no limits. Welcome to the future with Abacus Cloud."
    },
    {
        title: "our technology",
        desc: "Abacus cloud computing servers guarantee to help you take your business to new heights by providing a robust and user-friendly cloud computing platform. The Abacus’ state-of-the-art security features and dynamic interface, certify smooth & protected computing experience.So, if you look for a future in cloud based computing, embrace it with Abacus- where innovation meets reliability for unmatched business success."
    }
];

export default Meet;