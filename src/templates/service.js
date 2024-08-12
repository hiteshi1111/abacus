import React from 'react';
import Seo from '../components/shared/seo';
import BreadCrumbs from '../components/shared/breadCrumbs';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import ContactBar from '../components/service/contactBar';

const Service = ({ pageContext }) => {
  const serviceData = pageContext.data;
  const pages = [
    {
      title: "Service",
      handle: "/cloud-based-services"
    },
    {
      title: serviceData?.title,
      handle: ""
    }
  ]
  const content = pageContext && JSON.parse(pageContext.data.content.raw);

  return (
    <>
      <Seo
        title={serviceData.metaTitle}
        description={serviceData.metaDescription}
        keywords={serviceData.keywords?.keywords}
      />
      <div>
        <div className='relative sm:pt-[35%] pt-[40%] w-full'>
          {serviceData?.bannerImage && (
            <GatsbyImage
              image={serviceData.bannerImage.gatsbyImageData}
              alt={serviceData.title}
              className='!absolute top-0 left-0 w-full h-full object-center object-cover '
            />
          )}
          {/* <div className="absolute z-[1] w-full h-full bg-[#00000075] top-0"/> */}
          <div className="absolute z-[2] top-[25%] md:top-[30%] lg:top-[40%] left-[0] w-full">
            <BreadCrumbs pages={pages} white className='max-md:!mb-[10px]' />
            <h1 className='capitalize font-bold text-white w-full text-center px-[10px] md:px-[30px]'>{serviceData?.title}</h1>
          </div>
        </div>

        {serviceData.types?.length > 0 && (
          <section className="md:py-[50px] py-[30px] private-cloud-section">
            <div className="container">
              <div className="service_content mb-[50px]">
                {documentToReactComponents(content)}
              </div>
              <h2 className="text-[28px] text-[#000244]">What are the types of {serviceData.title}?</h2>
              <p dangerouslySetInnerHTML={{__html: LongText(serviceData.typesDescription?.typesDescription)}} />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] lg:gap-[30px] mt-[50px]  lg:mt-[90px] justify-center">
                {serviceData.types.map((item, i) => (
                  <div key={i} className="relative rounded-[30px] border pt-[70px] lg:pt-[90px] pb-[40px] lg:pb-[60px] flex flex-col justify-start w-full px-[20px] lg:px-[47px] my-[30px] bg-white">
                    <div className="absolute top-[-45px] lg:top-[-60px] left-[0] right-[0] w-[90px] h-[90px] lg:h-[120px] lg:w-[120px] p-[25px] lg:p-[20px] bg-[#fff] rounded-full flex justify-center items-center border mx-auto">
                      {item.icon ? (
                        <GatsbyImage 
                          image={item.icon.gatsbyImageData}
                          alt="arrow"
                          className="w-full"
                        />
                      ):(
                        <StaticImage 
                          src="../images/cloud.png"
                          alt="arrow"
                          className="w-full"
                        />
                      )}
                    </div>
                    <h3 className="capitalize font-bold w-full text-center text-black">{item.title}</h3>
                    <p className="text-center text-[16px] leading-[168.75%] w-full max-w-[472px] mx-auto mt-[20px]" dangerouslySetInnerHTML={{__html: LongText(item.description?.description)}} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {serviceData.howDoesItWorks?.length > 0 && (
          <section className="md:py-[50px] py-[30px] bg-[#3C62E9] text-[white]">
            <div className="container">
              <h3 className="text-[white] text-[40px] font-normal">How does {serviceData.title} work?</h3>
              <p className="text-[white] font-normal text-[22px] pt-[16px]" dangerouslySetInnerHTML={{__html: LongText(serviceData.howDoesItWorkDescription?.howDoesItWorkDescription)}} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceData.howDoesItWorks.map((item, i) => (
                  <div key={i} className="mt-[25px] flex justify-center group">
                    <span className="w-[50px] text-[55px] text-[white]">{i + 1}
                    </span>
                    <div className="sm:pl-[20px] pl-[15px] text-left">
                      <h5 className="mb-[10px] md:text-[20px] text-[white] font-normal test-[24px]">{item.title}</h5>
                      <p dangerouslySetInnerHTML={{__html: LongText(item.description?.description)}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {serviceData.keypoints && (
          <section className='md:py-[50px] py-[30px]'>
            <div className='container'>
              <h3 className='text-[36px] text-[#000244] text-center mb-[18px]'>Key Points</h3>
              <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 xl:gap-x-[30px] lg:gap-x-[20px] sm:gap-x-[30px] md:gap-y-[50px] lg:gap-y-[40px] sm:gap-y-[0px] btn-holder sm:max-w-[unset] max-w-[360px] m-auto md:block sm:block lg:inline-grid'>
                <div className="mt-[25px] flex justify-center group">
                  <ul>
                    {serviceData.keypoints[0] && (
                      <li className="relative mb-[24px]">
                        <p className='rounded border p-3 m-0'>{serviceData.keypoints[0].title}</p>
                        <span className='hidden lg:block img-after-div2 absolute top-[50%] right-[-242px]'>
                          <StaticImage 
                            src="../images/key-after.png"
                            alt="arrow"
                            className="w-[78%]"
                          />
                        </span>
                      </li>
                    )}
                    {serviceData.keypoints[2] && (
                      <li className="relative">
                        <p className='rounded border p-3 m-0'>{serviceData.keypoints[2].title}</p>
                        <span className='hidden lg:block img-after-div2 absolute top-[50%] right-[-242px]'>
                          <StaticImage 
                            src="../images/key-after.png"
                            alt="arrow"
                            className="w-[78%]"
                          />
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="flex justify-center group">
                  <div className="hidden lg:block sm:pl-[20px]  lg:my-[24px]">
                    <StaticImage 
                      src="../images/key.webp"
                      alt="arrow"
                      className="w-[68%]"
                    />
                  </div>
                </div>
                <div className="mt-[25px] flex justify-center group ">
                  <ul>
                    {serviceData.keypoints[1] && (
                      <li className="relative flex items-center lg:h-[228px] sm:h-[123px]">
                        <p className='rounded border p-3 m-0'>{serviceData.keypoints[1].title}</p>
                        <span className='hidden lg:block img-after-div absolute top-[50%] left-[-215px]'>
                          <StaticImage 
                            src="../images/key-before.png"
                            alt="arrow"
                            className="w-[88%]"
                          />
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        <ContactBar />

        {serviceData.reasons.length > 0 && (
          <section>
            <div className='container'>
              <h2 className="text-[30px] text-[#000244] leading-[42px]">What are the types of {serviceData.title}?</h2>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 col:grid-cols-1 gap-[20px] lg:gap-[30px] md:gap-[20px] sm:pt-[10px] lg:pt-[40px]">
                {serviceData.reasons.map((item, i) => (
                  <div key={i} className="relative duration-500 hover:shadow-[0_0_10px_#3333] hover:mt-[-8px] rounded-[5px] border group flex flex-col px-[30px] py-[40px] hover:bg-[#fff]">
                    <div className="flex-col md:flex-row items-start justify-center gap-[30px] md:gap-[10px] lg:gap-[30px]">
                      <div className="md:w-[85px] md:h-[85px] w-[70px] h-[70px] flex duration-500 center items-center justify-center bg-[#3C62E9] group-hover:bg-[#000244] group-hover:text-[#fff] rounded-[15px]  border-[#215F7E] p-[15px] mb-[25px] ">
                        <div className="w-[62px] h-[62px] flex items-center justify-center ">
                          <GatsbyImage
                            image={item.icon.gatsbyImageData}
                            alt={item.title || "service"}
                            className="max-w-[60px]"
                          />
                        </div>
                      </div>
                      <div>
                        <h5 className="mb-[5px] text-[24px] mt-0 ">{item.title}</h5>
                        <p
                          dangerouslySetInnerHTML={{ __html: item.description.description }}
                          className="mb-[0]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

function LongText(text) {
  const regex = /__(.*?)__/g;
  const result = text.replace(regex, '<b>$1</b>');
  return result;
}

export default Service;
