import React from 'react'
import Seo from '../components/shared/seo';
import SectionHeader from '../components/shared/sectionHeader';
import BreadCrumbs from '../components/shared/breadCrumbs';
import { useLocation } from "react-use";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import GetPageData from '../utils/getPageData';

const RefundPolicy = () => {
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
        <section className="container !max-w-[900px]">
            <BreadCrumbs pages={pages} />
            <SectionHeader title={pageData?.title} h1 />
            {pageData?.content && (
                <div className="mt-[50px] media_content text-left md:text-justify">
                    {documentToReactComponents(content)}
                </div>
            )}
        </section>
        </>
    )
}

const pages = [
    {
        title: "Refund Policy",
        handle: ""
    }
]

export default RefundPolicy;