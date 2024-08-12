import React from 'react'
import Seo from '../components/shared/seo';
import Message from '../components/about/message';
import Leadership from '../components/about/leadership';
import SectionHeader from '../components/shared/sectionHeader';
import BreadCrumbs from '../components/shared/breadCrumbs';
import { StaticImage } from 'gatsby-plugin-image';
import { useLocation } from 'react-use';
import GetPageData from '../utils/getPageData';

const AboutUs = () => {
    const { pathname } = useLocation();
    const pageData = GetPageData(pathname?.replaceAll("/", ""));
    return (
        <>
            <Seo 
                title={pageData?.metaTitle}
                description={pageData?.metaDescription?.metaDescription}
                keywords={pageData?.keywords?.keywords}
            />
            <>
            <section className='container'>
                <BreadCrumbs pages={pages} />
                <SectionHeader
                    title={pageData?.title}
                    h1
                />
                <div className="md:pt-[20px] pt-0 grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
                    <div>
                        <p className='text-[17px] mb-[20px] leading-[30px]'>Abacus Cloud Computing extends its service area across Punjab, holding a prestigious Grade A ISP license granted by the Department of Telecommunications (DOT), Government of India, affirming its commitment to providing exceptional connectivity solutions throughout the region.</p>
                        <p className='text-[17px] mb-0 leading-[30px]'>Born in the last decade, Abacus embarked on a mission to connect visionaries to robust cloud computing and network management services. Originating in Chandigarh, Patiala, and Sangrur, Abacus Cloud Computing prides itself on being a dedicated team of professionals offering high-speed cloud and networking solutions.</p>
                    </div>
                    <div className='xl:pl-[50px] pl-0'>
                        <StaticImage
                            src="../images/about_us_banner.webp"
                            alt='About banner'
                        />
                    </div>
                </div>
            </section>

            <Message />
            <Leadership />
            </>
        </>
    )
}

const pages = [
    {
        title: "About Us",
        handle: ""
    }
]

export default AboutUs;
