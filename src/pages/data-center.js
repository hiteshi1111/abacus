import React from 'react'
import Seo from '../components/shared/seo';
import SectionHeader from '../components/shared/sectionHeader';
import BreadCrumbs from '../components/shared/breadCrumbs';
import { useLocation } from "react-use";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import GetPageData from '../utils/getPageData';
import { StaticImage } from 'gatsby-plugin-image';
import ServicesNavigation from '../components/shared/servicesNavigation';
import ContactBar from '../components/service/contactBar';

const DataCenter = () => {
    const { pathname } = useLocation();
    const pageData = GetPageData(pathname?.replaceAll("/", ""));
    const content = pageData?.content && JSON.parse(pageData.content.raw);
    return (
        <>
        <Seo 
            title={pageData?.metaTitle}
            description={pageData?.metaDescription?.metaDescription}
            keywords={pageData?.keywords?.keywords}
        />
        <section className="container">
            <BreadCrumbs pages={pages} />
            <SectionHeader title={pageData?.title} h1/>
            <div className='relative pt-[35%] lg:pt-[35%] w-full'>
                <StaticImage
                    src="../images/data-center.webp"
                    alt='Abacus Data Center'
                    title='Abacus Cloud Data Center'
                    className='top-0 left-0 !absolute w-full h-full object-center'
                />
            </div>
            <div className='flex flex-col-reverse lg:flex-row px-0 lg:px-[40px] max-lg:pt-0 py-[50px] w-full'>
                <div className='w-full lg:w-[30%] border-border-none lg:border-r pr-[0] lg:pr-[20px] mt-[20px]'>
                    <SectionHeader
                        title='Our Services'
                    />
                    <ServicesNavigation />
                    <div className='mt-[30px]'>
                        <ContactBar vertical/>
                    </div>
                </div>
                {pageData?.content && (
                    <div className="w-full lg:w-[70%] pl-[0] lg:pl-[30px] service_content">
                        {documentToReactComponents(content)}
                    </div>
                )}
            </div>
            <ContactBar />
        </section>
        </>
    )
}

const pages = [
    {
        title: "Data Center",
        handle: ""
    }
]

export default DataCenter;