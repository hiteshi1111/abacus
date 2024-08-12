import React from 'react';

const SectionHeader = ({title="", description= "", maxWidth="", h1=false, titleClassName="" }) => {
    return (
        h1 ? (
            <div className='mb-[30px]'>
                <div className='heading-animation'> 
                    {title && (
                        <h1 className={`text-[#000244] md:text-[32px] max-md:text-[24px] md:mb-[20px] max-md:mb-[15px] capitalize text-center ${titleClassName}`}>{title}</h1>
                    )}
                </div>
                {description && (
                    <p className={`text-center text-[14px] md:text-[16px] leading-[168.75%] w-full ${maxWidth ? `max-w-[${maxWidth}]` : "max-w-[639px]"} mx-auto`}>{description}</p>
                )}
            </div>
        ):(
            <div className='mb-[30px]'>
                <div className='heading-animation'>
                    {title && (
                        <h2 className={`text-[#000244] md:text-[32px] max-md:text-[24px] md:mb-[20px] max-md:mb-[15px] capitalize text-center ${titleClassName}`}>{title}</h2>
                    )}
                </div>
                {description && (
                    <p className={`text-center text-[14px] md:text-[16px] leading-[168.75%] w-full ${maxWidth ? `max-w-[${maxWidth}]` : "max-w-[639px]"} mx-auto`}>{description}</p>
                )}
            </div>
        )
    )
}

export default SectionHeader;