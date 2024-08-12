import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Founder = () => {
    return (
        <section className=''>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='text-[#000244] md:text-[32px] max-md:text-[24px] md:mb-[20px] max-md:mb-[15px] capitalize text-center'>Founders of The Abacus</h2>
                </div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    <div className="md:mt-[90px] max-md:mt-[75px]">
                        <div className="bg-white text-center p-[15px] rounded-[10px] shadow-[0_0_1.25rem_rgba(108,_118,_134,_0.1)] duration-500 hover:bg-[#040538] group">
                            <div className="md:p-[25px] max-md:p-[15px] border-dashed border-[1px] border-[#ddd]">
                                <StaticImage src="../../images/about/president.webp" alt="Ranjit Singh Sandhu" 
                                    className="object-cover object-top rounded-full md:w-[150px] max-md:w-[110px] md:h-[150px] max-md:h-[110px] md:mt-[-100px] max-md:mt-[-78px] shadow-[5px_8.66px_30px_0px_rgba(0,0,0,0.15)]" />
                                <h3 className="md:text-[24px] max-md:text-[20px] md:mt-[20px] max-md:mt-[10px] md:mb-[10px] max-md:mb-[5px] group-hover:text-[#ffffff]">Ranjit Singh Sandhu</h3>
                                <h4 className="md:text-[18px] max-md:text-[16px] text-[#888888] my-0 group-hover:text-[#ffffff]">President Emeritus</h4>
                                <p className="md:text-[15px] max-md:text-[14px] md:mt-[20px] max-md:mt-[10px] mb-[0px] group-hover:text-[#ffffff]">I am devoted to transforming the landscape of cloud computing in the state. I want The Abacus to be at the forefront of revolutionising cloud and networking via its secure, intelligent, and efficient infrastructure.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-[90px] max-md:mt-[75px]">
                        <div className="bg-white text-center p-[15px] rounded-[10px] shadow-[0_0_1.25rem_rgba(108,_118,_134,_0.1)] duration-500 hover:bg-[#040538] group">
                            <div className="md:p-[25px] max-md:p-[15px] border-dashed border-[1px] border-[#ddd]">
                                <StaticImage src="../../images/about/ceo.webp" alt="Navjot Singh Sandhu" 
                                    className="object-cover object-top rounded-full md:w-[150px] max-md:w-[110px] md:h-[150px] max-md:h-[110px] md:mt-[-100px] max-md:mt-[-78px] shadow-[5px_8.66px_30px_0px_rgba(0,0,0,0.15)]" />
                                <h3 className="md:text-[24px] max-md:text-[20px] md:mt-[20px] max-md:mt-[10px] md:mb-[10px] max-md:mb-[5px] group-hover:text-[#ffffff]">Navjot Singh Sandhu</h3>
                                <h4 className="md:text-[18px] max-md:text-[16px] text-[#888888] my-0 group-hover:text-[#ffffff]">CEO/MD</h4>
                                <p className="md:text-[15px] max-md:text-[14px] md:mt-[20px] max-md:mt-[10px] mb-[0px] group-hover:text-[#ffffff]">I have always wanted to stay updated with the latest trends in the industry. I do not only want to build a great product but also an ecosystem that can garner value towards society</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-[90px] max-md:mt-[75px]">
                        <div className="bg-white text-center p-[15px] rounded-[10px] shadow-[0_0_1.25rem_rgba(108,_118,_134,_0.1)] duration-500 hover:bg-[#040538] group">
                            <div className="md:p-[25px] max-md:p-[15px] border-dashed border-[1px] border-[#ddd]">
                                <StaticImage src="../../images/about/cto.webp" alt="Dr. Pawanpreet Dhaliwal" 
                                    className="object-cover object-top rounded-full md:w-[150px] max-md:w-[110px] md:h-[150px] max-md:h-[110px] md:mt-[-100px] max-md:mt-[-78px] shadow-[5px_8.66px_30px_0px_rgba(0,0,0,0.15)]" />
                                <h3 className="md:text-[24px] max-md:text-[20px] md:mt-[20px] max-md:mt-[10px] md:mb-[10px] max-md:mb-[5px] group-hover:text-[#ffffff]">Dr. Pawanpreet Dhaliwal</h3>
                                <h4 className="md:text-[18px] max-md:text-[16px] text-[#888888] my-0 group-hover:text-[#ffffff]">CTO/Director</h4>
                                <p className="md:text-[15px] max-md:text-[14px] md:mt-[20px] max-md:mt-[10px] mb-[0px] group-hover:text-[#ffffff]">Being a passionate tech entrepreneur, I have always believed in turning ideas into impactful realities. As an expert in technology innovation and strategic leadership, I thrive in dynamic environments and challenges.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="text-center">
                    <Link to="/about-us/" className="btn-switch-text relative overflow-hidden w-full md:max-w-[190px] max-md:max-w-[160px] text-white bg-[#355adc] lg:px-[5px] lg:py-[17px] max-lg:py-[13px] max-lg:px-[30px] flex justify-center items-center md:text-[16px] max-md:text-[14px] rounded-full hover:bg-[#000244]" >
                        <span className="btn-double-text" data-text="About Us">About Us</span><FaArrowRightLong className="ml-[10px]"/>
                    </Link>
                </div> */}
            </div>
        </section>
    )
}

export default Founder;