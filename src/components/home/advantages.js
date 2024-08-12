import React from "react";
import data from "../../data/home.json";
import { StaticImage } from "gatsby-plugin-image";

const Advantages = () => {
    return(
        <section className="p-0 w-full bg-[#f2f4f8]">
            <div className="container-fluid max-md:px-[15px] max-lg:px-[30px]">
                <div className="flex max-lg:flex-col items-center gap-[30px]">
                    <div className="w-full lg:w-1/2">
                        <div className="bg-col-helf relative p-[50px] overflow-hidden z-10 text-center">
                            <div className="relative w-full">
                                <StaticImage
                                    src="../../images/home/featured.webp"
                                    alt={data.featureSection.altText || "featured"}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="max-w-[680px] max-lg:pb-[40px]">
                            <div className='heading-animation before:left-[50px] !text-left after:left-[50px] after:right-auto'> 
                                <h2 className="text-[#000244] md:text-[32px] max-md:text-[24px] md:mb-[20px] max-md:mb-[15px] capitalize">{data.featureSection.title}</h2>       
                            </div>
                            <p dangerouslySetInnerHTML={{__html: data.featureSection.description}} />
                            <div className="flex flex-col gap-[10px] mt-[20px]">
                                {data.featureSection.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-[10px] w-full">
                                        <StaticImage
                                            src="../../icons/blueTick.svg"
                                            alt="blueTick"
                                            className="max-w-[18px]"
                                        />
                                        <span className="capitalize text-[16px] text-[#333] font-normal">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages;