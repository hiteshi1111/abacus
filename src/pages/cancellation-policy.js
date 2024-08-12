import React from 'react'
import Seo from '../components/shared/seo';
import SectionHeader from '../components/shared/sectionHeader';
import BreadCrumbs from '../components/shared/breadCrumbs';
import { useLocation } from 'react-use';
import GetPageData from '../utils/getPageData';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const CancellationPolicy = () => {
    const { pathname } = useLocation();
    const pageData = GetPageData(pathname?.replaceAll("/", ""));
    const content = pageData?.content && JSON.parse(pageData?.content.raw)
    return (
        <>
        <Seo 
            title={pageData?.metaTitle}
            description={pageData?.metaDescription?.metaDescription}
            keywords={pageData?.keywords?.keywords}
        />
        <section>
            <BreadCrumbs pages={pages} />
            <SectionHeader title={pageData?.title} h1 />
            {pageData?.content && (
                <div className='container !max-w-[800px] media_content text-left md:text-justify'>
                    {documentToReactComponents(content)}
                </div>
            )}
        </section>
        </>
    )
}

const pages = [
    {
        title: "Cancellation Policy",
        handle: ""
    }
]

export default CancellationPolicy;
