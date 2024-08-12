import React, { useState } from 'react'
import Seo from '../components/shared/seo';
import SectionHeader from '../components/shared/sectionHeader';
import BreadCrumbs from '../components/shared/breadCrumbs';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import data from "../data/faq.json";
import GetPageData from '../utils/getPageData';
import { useLocation } from 'react-use';

const FAQ = () => {
    const { pathname } = useLocation();
    const pageData = GetPageData(pathname?.replaceAll("/", ""));
    const [expanded, setExpanded] = useState(null);

    function toggleHandler(i) {
        if (expanded === i){
            setExpanded(null);
        }else{
            setExpanded(i);
        }
    }
    return (
        <>
            <Seo 
                title={pageData?.metaTitle}
                description={pageData?.metaDescription?.metaDescription}
                keywords={pageData?.keywords?.keywords}
                schema={`
                    {
                        "@context": "https://schema.org/", 
                        "@type": "FAQPage", 
                        "mainEntity": [{
                        "@type": "Question", 
                        "name": "What is a Private Cloud, and how does it differ from other cloud models?",
                        "acceptedAnswer": { 
                            "@type": "Answer",
                            "text": "Abacus Cloud offers a dedicated Private Cloud solution, exclusively catering to a single organization. Unlike public clouds, it ensures heightened security and complete control as it isn't shared. Unlike hybrid clouds, it solely operates within the infrastructure of the organization, guaranteeing unparalleled privacy and customization."
                        } 
                        },{
                        "@type": "Question", 
                        "name": "What is the Public Cloud, and how does it cater to different business needs?",
                        "acceptedAnswer": { 
                            "@type": "Answer",
                            "text": "Abacus Cloud, a leading provider, offers Public Cloud services accessible to multiple users via the internet. It delivers scalable resources like storage and computing power, ensuring cost-effective solutions, flexibility, and on-demand scalability."
                        }  
                        },{"@type": "Question","name": "Can I easily scale my resources up or down in a Public Cloud setup?","acceptedAnswer": {"@type": "Answer","text": "Yes, with Abacus Cloud's public cloud setups, you can effortlessly scale up or down computing power, storage, and other resources. This flexibility ensures you pay for what you use, accommodating fluctuations in demand seamlessly without worrying about infrastructure constraints."}},{"@type": "Question","name": "What services does Rack Space include, and how does it contribute to infrastructure management?","acceptedAnswer": {"@type": "Answer","text": "Yes, Abacus Cloud provides us with a suite of managed cloud services including rack space hosting, storage, security and application management. Their expertise spans public, private and hybrid cloud environments, enabling seamless infrastructure management. "}},{"@type": "Question","name": "Is Rack Space suitable for both small businesses and enterprise-level Organizations?","acceptedAnswer": {"@type": "Answer","text": "Yes, Abacus Cloud, including Rack Space, is suitable for both small businesses and enterprise-level Organizations, offering hosting solutions customizable to specific needs."}},{"@type": "Question","name": "What are the key features that set Rack Space apart from other hosting options?","acceptedAnswer": {"@type": "Answer","text": "Key features like scalability, flexibility, and comprehensive hosting solutions set Rack Space, and by extension, Abacus Cloud, apart, making it a preferred choice for businesses with varying infrastructure needs."}},{"@type": "Question","name": "What are Bare Metal Servers, and how do they differ from virtualized servers?","acceptedAnswer": {"@type": "Answer","text": "Bare Metal Servers, provided by Abacus Cloud, are dedicated physical servers, distinct from virtualized servers. They offer superior performance, resource isolation, and customization for specific application requirements."}},{"@type": "Question","name": "What advantages does using Bare Metal Servers offer in terms of performance?","acceptedAnswer": {"@type": "Answer","text": "Using Bare Metal Servers from Abacus Cloud provides performance advantages due to dedicated hardware resources, making them well-suited for resource-intensive applications."}},{"@type": "Question","name": "Can I connect my on-premises infrastructure to your cloud services through Interconnection?","acceptedAnswer": {"@type": "Answer","text": "Yes, with Abacus Cloud, you can seamlessly connect your on-premises infrastructure to our cloud services through Interconnection, facilitating integration with our cloud environment."}},{"@type": "Question","name": "Is Interconnection essential for businesses of all sizes, or is it more beneficial for larger enterprises?","acceptedAnswer": {"@type": "Answer","text": "Interconnection, provided by Abacus Cloud, is beneficial for businesses of all sizes, improving network performance, reducing latency, and ensuring efficient data transfer."}},{"@type": "Question","name": "Can I scale my storage resources as my data requirements grow?","acceptedAnswer": {"@type": "Answer","text": "Yes, with Abacus Cloud's storage solutions, designed for scalability, you can easily expand storage resources as your data requirements grow."}},{"@type": "Question","name": "What security measures are in place to protect data stored in your storage solutions?","acceptedAnswer": {"@type": "Answer","text": "Abacus Cloud's storage solutions incorporate robust security measures, including redundancy and regular backups, ensuring data integrity and protection against potential threats."}},{"@type": "Question","name": "What is Content Delivery, and how does it impact website and application performance?","acceptedAnswer": {"@type": "Answer","text": " Content Delivery, as provided by Abacus Cloud, improves performance by globally distributing content, reducing latency, and enhancing user experience for websites and applications."}},{"@type": "Question","name": "What is VPS Hosting, and how does it differ from other hosting options?","acceptedAnswer": {"@type": "Answer","text": "VPS Hosting, such as that offered by Abacus Cloud, provides virtualized environments with dedicated resources, offering enhanced control, isolation, and flexibility compared to other hosting options."}},{"@type": "Question","name": "How does VPS Hosting contribute to security and data privacy?","acceptedAnswer": {"@type": "Answer","text": "VPS Hosting from Abacus Cloud contributes to security and data privacy by providing isolated virtual environments, minimizing security risks associated with shared hosting."}},{"@type": "Question","name": "What services are included in Managed Network Services, and how do they benefit my business?","acceptedAnswer": {"@type": "Answer","text": "Managed Network Services from Abacus Cloud include monitoring, maintenance, and support, benefiting businesses with a secure and efficient network infrastructure."}},{"@type": "Question","name": "What monitoring and support options are included with Managed Network Services?","acceptedAnswer": {"@type": "Answer","text": "Abacus Cloud's Managed Network Services offer support options, including proactive monitoring, immediate response to potential threats, and regular updates, ensuring network stability and reliability."} 
                    }]
                }
                `}
            />
            <section>
                <BreadCrumbs pages={pages} />
                <SectionHeader title={pageData?.title} h1/>
                <div className='container !max-w-[1000px] pt-[10px]'>
                    {data.map((item, i) => (
                        <>
                            <button 
                                key={i} 
                                onClick={() => toggleHandler(i)} 
                                className='flex justify-between items-center px-[20px] py-[15px] bg-[#EFF0F5] text-[16px] gap-[20px] [cursor-pointer mt-[10px] w-full'
                            >
                                <span className='select-none text-left'>{item.question}</span>
                                {expanded === i ? (
                                    <IoIosArrowUp size="20px" color='#6E6E70'/>
                                ):(
                                    <IoIosArrowDown size="20px" color='#6E6E70'/>
                                )}
                            </button>
                            <p className={`select-none text-[14px] text-justify p-[20px] border-x border-b ${expanded === i ? "block": "hidden"}`}>{item.answer}</p>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}

const pages = [
    {
        title: "FAQ",
        handle: ""
    }
]

export default FAQ;