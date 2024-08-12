import React from "react";
import { Link } from 'gatsby';
import bg1 from "../../images/home/bg1.webp"
import bg1_shaddow from "../../images/home/bg1_shaddow.webp"
import bg2 from "../../images/home/bg2.webp"
import bg2_shaddow from "../../images/home/bg2_shaddow.webp"
import { FaArrowRightLong } from "react-icons/fa6";

const CallToAction = () => {
    return(
       <>
         <section className='relative bg-[#f8fafe] overflow-hidden'>
                <div className='container'>
                    <div className='z-[40] relative text-center max-w-[800px] m-auto cta-bg-three'>
                        <h3 className='text-[#000244] md:text-[32px] max-md:text-[24px] md:mb-[20px] max-md:mb-[10px] capitalize text-center'>Collaborate With The Abacus</h3>
                        <p className='text-[18px]'>Together we guarantee that every business excels.</p>
                        <div className='text-center mt-[30px]'>
                            <Link to="/contact-us" className="mx-auto btn-switch-text relative overflow-hidden w-full md:max-w-[190px] max-md:max-w-[160px] text-white bg-[#355adc] lg:px-[5px] lg:py-[17px] max-lg:py-[13px] max-lg:px-[30px] flex justify-center items-center md:text-[16px] max-md:text-[14px] rounded-full hover:bg-[#000244]" >
                                <span className="btn-double-text" data-text="Contact Us">Contact Us</span><FaArrowRightLong className="ml-[10px]"/>
                            </Link>
                        </div>
                    </div>
                    <div className="animation-layers absolute h-full w-full top-0 left-0 overflow-hidden">
                        <div className="absolute top-0 z-[20] ml-[-50px] animate-[hoa-move1_1.8s_ease-in-out_infinite_alternate]">
                            <img src={bg1} alt="Layer One" className="img-responsive"/>
                        </div>
                        <div className="absolute top-0 z-[10] ml-[-50px] animate-[hoa-move2_2s_ease-in-out_infinite_alternate]">
                            <img src={bg1_shaddow} alt="Layer two" className="img-responsive"/>
                        </div>
                        <div className="absolute top-0 z-[20] mr-[-20px] animate-[hoa-move3_2s_ease-in-out_infinite_alternate]">
                            <img src={bg2} alt="Layer three" className="img-responsive" />
                        </div>
                        <div className="absolute top-0 z-[10] mr-[-20px] animate-[hoa-move4_1.8s_ease-in-out_infinite_alternate]">
                            <img src={bg2_shaddow} alt="Layer Four" className="img-responsive" />
                        </div>
                    </div>
                </div>
            </section>
       </>
    )
}

export default CallToAction;