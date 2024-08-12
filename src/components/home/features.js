import React from 'react';
import SectionHeader from '../shared/sectionHeader';
import { StaticImage } from 'gatsby-plugin-image';

const Features = () => {
  return (
    <section className="bg-white pt-0">
      <div className="container !max-w-[1135px]">
          <SectionHeader title='Our Key Features'
            description='Start your journey with Abacus’ cloud powered revolution and reveal the key features that would assist you completely Transform your Business Dynamics.'
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-[20px] max-lg:gap-[10px] mt-[35px] justify-center">
              <div className='md:p-[35px] max-md:p-[20px] bg-[#F3F3F3] rounded-[20px] flex items-center flex-col'>
                <StaticImage
                  src="../../icons/partners/partner1.svg"
                  alt={data[0].title}
                  className="max-w-[80px] w-full mx-auto"
                />
                <h4 className='text-center md:text-[18px] max-md:text-[16px] mt-[20px] mb-0'>{data[0].title}</h4>
              </div>
              <div className='md:p-[35px] max-md:p-[20px] bg-[#F3F3F3] rounded-[20px] flex items-center flex-col'>
                <StaticImage
                  src="../../icons/partners/partner2.svg"
                  alt={data[1].title}
                  className="max-w-[80px] w-full mx-auto"
                />
                <h4 className='text-center md:text-[18px] max-md:text-[16px] mt-[20px] mb-0'>{data[1].title}</h4>
              </div>
              <div className='md:p-[35px] max-md:p-[20px] bg-[#F3F3F3] rounded-[20px] flex items-center flex-col'>
                <StaticImage
                  src="../../icons/partners/partner3.svg"
                  alt={data[2].title}
                  className="max-w-[80px] w-full mx-auto"
                />
                <h4 className='text-center md:text-[18px] max-md:text-[16px] mt-[20px] mb-0'>{data[2].title}</h4>
              </div>
              <div className='md:p-[35px] max-md:p-[20px] bg-[#F3F3F3] rounded-[20px] flex items-center flex-col'>
                <StaticImage
                  src="../../icons/partners/partner4.svg"
                  alt={data[3].title}
                  className="max-w-[80px] w-full mx-auto"
                />
                <h4 className='text-center md:text-[18px] max-md:text-[16px] mt-[20px] mb-0'>{data[3].title}</h4>
              </div>
              <div className='md:p-[35px] max-md:p-[20px] bg-[#F3F3F3] rounded-[20px] flex items-center flex-col'>
                <StaticImage
                  src="../../icons/partners/partner5.svg"
                  alt={data[4].title}
                  className="max-w-[80px] w-full mx-auto"
                />
                <h4 className='text-center md:text-[18px] max-md:text-[16px] mt-[20px] mb-0'>{data[4].title}</h4>
              </div>
              <div className='md:p-[35px] max-md:p-[20px] bg-[#F3F3F3] rounded-[20px] flex items-center flex-col'>
                <StaticImage
                  src="../../icons/partners/partner6.svg"
                  alt={data[5].title}
                  className="max-w-[80px] w-full mx-auto"
                />
                <h4 className='text-center md:text-[18px] max-md:text-[16px] mt-[20px] mb-0'>{data[5].title}</h4>
              </div>
          </div>
      </div>
    </section>
  )
}

const data = [
  {
    title: "Quality Assurance"
  },
  {
    title: "Impregnable Security"
  },
  {
    title: "Best Cloud Based Servers"
  },
  {
    title: "Global Connectivity"
  },
  {
    title: "Unmatched Performance"
  },
  {
    title: "Easy Access"
  }
];

export default Features;
