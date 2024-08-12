import React from 'react';
import { CiCloud } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";
import { GiCrystalGrowth } from "react-icons/gi";
import hostinghomeslider01 from "../../images/home/demo-hosting-home-slider-01.webp"
import hostinghomeslider02 from "../../images/home/demo-hosting-home-slider-02.webp"

const Technology = () => {
  return (
    <section className="bg-[#fff] pt-0">
      <div className="container">
        <div className="flex max-lg:flex-col items-center gap-[30px]">
          <div className="w-full lg:w-1/2">
            <div className="">
               {/* <SectionHeader
          title='Unbridle the potential of endless versatility with Abacus Cloud Server Services'
          description="Transferring data to the cloud is a necessity for many businesses but with Abacus Private cloud, it's also an opportunity.Get your data powered through Abacus cloud server services which offer smartest cloud storage."
          maxWidth=''/> */}
                <div className='heading-animation before:left-[50px] !text-left after:left-[50px] after:right-auto'> 
                  <h2 className="text-[#000244] md:text-[32px] max-md:text-[24px] md:mb-[20px] max-md:mb-[15px] capitalize">Unbridle the potential of endless versatility with Abacus Cloud Server Services</h2>       
                </div>
                <p className='my-0'>Transferring data to the cloud is a necessity for many businesses but with Abacus Private cloud, it's also an opportunity. Get your data powered through Abacus cloud server services which offer smartest cloud storage.</p>    
                <div className='mt-[30px] mb-[20px] flex justify-center group rounded-xl bg-white p-6 shadow-[0_0_1.25rem_rgba(108,_118,_134,_0.1)] hover:text-white hover:bg-[#040538] duration-500'>
                    <div className='flex justify-center items-center sm:h-[55px] sm:w-[55px] h-[50px] w-[50px] duration-500 rounded-[10px] rotate-45 shadow-[5px_8.66px_30px_0px_rgba(0,0,0,0.15)] bg-[#000244] text-[55px] group-hover:text-[#fff] group-hover:bg-[#3C62E9]'>
                      <span className='-rotate-45'><CiCloud style={{color: 'white', fontSize: '34px'}} /></span>
                    </div>
                    <div className='flex items-center sm:pl-[20px] pl-[15px] text-left sm:w-[calc(100%_-_55px)] w-[calc(100%_-_50px)]'>
                      <div>
                        <h3 className='group-hover:text-white md:text-[24px] max-md:text-[20px]'>{data[0].title}</h3>
                        <p className='group-hover:text-white md:text-[16px] max-md:text-[15px] mt-[10px] mb-[0px]'>{data[0].desc}</p>
                      </div>
                    </div>
                </div>
                <div className='mt-[20px] flex justify-center group rounded-xl bg-white p-6 shadow-[0_0_1.25rem_rgba(108,_118,_134,_0.1)] hover:text-white hover:bg-[#040538] duration-500'>
                    <div className='flex justify-center items-center sm:h-[55px] sm:w-[55px] h-[50px] w-[50px] duration-500 rounded-[10px] rotate-45 shadow-[5px_8.66px_30px_0px_rgba(0,0,0,0.15)] bg-[#000244] text-[55px] group-hover:text-[#fff] group-hover:bg-[#3C62E9]'>
                      <span className='-rotate-45'><GrSecure style={{color: 'white', fontSize: '34px'}} /></span>
                    </div>
                    <div className='flex items-center sm:pl-[20px] pl-[15px] text-left sm:w-[calc(100%_-_55px)] w-[calc(100%_-_50px)]'>
                      <div>
                        <h3 className='group-hover:text-white md:text-[24px] max-md:text-[20px]'>{data[1].title}</h3>
                        <p className='group-hover:text-white md:text-[16px] max-md:text-[15px] mt-[10px] mb-[0px]'>{data[1].desc}</p>
                      </div>
                    </div>
                </div>
                <div className='mt-[20px] flex justify-center group rounded-xl bg-white p-6 shadow-[0_0_1.25rem_rgba(108,_118,_134,_0.1)] hover:text-white hover:bg-[#040538] duration-500'>
                    <div className='flex justify-center items-center sm:h-[55px] sm:w-[55px] h-[50px] w-[50px] duration-500 rounded-[10px] rotate-45 shadow-[5px_8.66px_30px_0px_rgba(0,0,0,0.15)] bg-[#000244] text-[55px] group-hover:text-[#fff] group-hover:bg-[#3C62E9]'>
                      <span className='-rotate-45'><GiCrystalGrowth style={{color: 'white', fontSize: '34px'}} /></span>
                    </div>
                    <div className='flex items-center sm:pl-[20px] pl-[15px] text-left sm:w-[calc(100%_-_55px)] w-[calc(100%_-_50px)]'>
                      <div>
                        <h3 className='group-hover:text-white md:text-[24px] max-md:text-[20px]'>{data[2].title}</h3>
                        <p className='group-hover:text-white md:text-[16px] max-md:text-[15px] mt-[10px] mb-[0px]'>{data[2].desc}</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden w-full text-center">
                <img className='w-full' src={hostinghomeslider01} alt="hosting home" loading="lazy" />
                <img className='w-full absolute left-[-2px] top-[-5px] animation-float' src={hostinghomeslider02} alt="hosting home" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const data = [
  {
    title: "Fast Cloud Storage Service",
    desc: "For speed freaks, it is the fastest business cloud server. Uploading and downloading large media files is as quick as a flash. Save precious time and become swift in every aspect."
  },
  {
    title: "Secure Cloud Solutions",
    desc: "Muddled with security concerns, organisations are desperate to look for secure cloud solutions but in your private, hybrid  and multi cloud servers, you can easily find and expel threats. We offer clarity, Practical solutions as well as Disaster recovery."
  },
  {
    title: "Easy Cloud Storage",
    desc: "Unlimited cloud storage is provided at our business cloud server when you purchase along with e-signature. Even collaboration and sharing can be done on any device with anyone you want.Full redundancy and architecture with fault tolerance is offered to focus on your growth."
  }
];

export default Technology;