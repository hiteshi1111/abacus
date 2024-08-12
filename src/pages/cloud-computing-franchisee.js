import React from 'react';
import Seo from '../components/shared/seo';
import { Link } from 'gatsby';
import BreadCrumbs from '../components/shared/breadCrumbs';
import { money } from '../utils/money';
import { windowScroll } from '../utils/windowScroll';
import SectionHeader from '../components/shared/sectionHeader';
import GetPageData from '../utils/getPageData';
import { useLocation } from 'react-use';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Franchisee = () => {
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
            <section>
                <div className='container mx-auto'>
                    <BreadCrumbs pages={pages} />
                    <SectionHeader
                        title={pageData?.title}
                        h1
                    />
                    <div className="text-center text-[14px] md:text-[16px] leading-[168.75%] w-full mt-[50px] media_content text-center mb-[50px]">
                        {documentToReactComponents(content)}
                    </div>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-[35px] md:gap-[30px] sm:gap-[20px] gap-[30px] sm:max-w-[100%] max-w-[400px] mx-[auto]'>
                        {ServicesList.map((item) => (
                            <div className='overflow-hidden rounded-[25px] border-[#f1f3f5] border-b-[8px]'>
                                <div className='p-[40px] bg-[#f1f3f5] '>
                                    <h4 className="text-[24px] font-extrabold mb-0 text-center">{item.title}</h4>
                                </div>
                                <h3 className='!text-[18px] text-center text-white py-[13px] bg-[#0d1e67] font-semibold mb-0 mt-[-20px]'>{item.block}</h3>
                                <div className='border-[#f1f3f5] border-x-[1px] p-[40px] pt-35px] relative after:content-[""] after:absolute after:right-[-76px] after:h-3/5 after:rotate-[19deg] after:w-[105px] after:transition-[0.1s] after:duration-[all] after:ease-[ease-in] after:rounded-[30px] after:bottom-[30%] after:!bg-[#f5f7fd] hover:after:!bg-[#3c62e9]'>
                                    <div className='text-[18px] mb-[20px] text-center'>
                                        <div className='font-bold mb-[6px]'>Assured Rental :</div>
                                        <span>{money(item.monthlyRental)}</span>
                                    </div>
                                    <div className='text-[18px] mb-[20px] text-center'>
                                        <div className='font-bold mb-[6px]'>Rental Duration :</div>
                                        <span>{item.duration} years</span>
                                    </div>
                                    <div className='text-[26px] font-bold text-[#ffa500] mb-[30px] text-center'>{money(item.totalPrice)}</div>
                                    <div className='text-center'>
                                        <Link
                                            className="text-white hover:text-white duration-500 text-[18px] !h-[52px] bg-[#0d1e67] hover:bg-[#3c62e9] rounded-[30px] font-medium px-[50px] py-[10px]"
                                            to="/contact-us"
                                            aria-label="Order Now"
                                            onClick={() => {
                                                // setSubject(item.title);
                                                windowScroll();
                                            }}
                                        >Order Now</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

const pages = [
    {
        title: "Franchisee",
        handle: ""
    }
]

const ServicesList = [
    {
        title: "LEAD",
        block: "1 BLOCK",
        monthlyRental: 1012,
        duration: "10",
        totalPrice: 28780,
    },
    {
        title: "BRONZE",
        block: "2 BLOCKS",
        monthlyRental: 1889,
        duration: "10",
        totalPrice: 52530,
    },
    {
        title: "COPPER",
        block: "5 BLOCKS",
        monthlyRental: 4735,
        duration: "10",
        totalPrice: 130200,
    },
    {
        title: "SILVER",
        block: "10 BLOCKS",
        monthlyRental: 9485,
        duration: "10",
        totalPrice: 258000,
    },
    {
        title: "GOLD",
        block: "24 BLOCKS",
        monthlyRental: 23952,
        duration: "10",
        totalPrice: 618000,
    },
    {
        title: "PLATINUM",
        block: "48 BLOCKS",
        monthlyRental: 48754,
        duration: "10",
        totalPrice: 1220000,
    }, {
        title: "TITANIUM",
        block: "96 BLOCKS",
        monthlyRental: 98070,
        duration: "10",
        totalPrice: 2382000,
    }, {
        title: "DIAMOND",
        block: "192 BLOCKS",
        monthlyRental: 198984,
        duration: "10",
        totalPrice: 4740000,
    }
]

export default Franchisee;