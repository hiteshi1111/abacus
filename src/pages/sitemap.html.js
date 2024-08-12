import React from 'react';
import Seo from '../components/shared/seo';
import { Link } from 'gatsby';
import { windowScroll } from '../utils/windowScroll';

const Sitemap = () => {
    return (
        <>
            <Seo 
                title='The Abacus | Organized Navigation for Website Structure' 
                description="The Abacus sitemap for easy navigation. Find structured layout of website sections and content hierarchy. Simplify your browsing experience." 
                keywords='clod computing, data server, data center, cloud computing services, abacus'
            />
            <div className='container'>
                <section className='flex flex-col items-center'>
                    <Link to="/" className='py-[10px] border border-black px-[40px] bg-[#000244] text-white'>HOME</Link>
                    <div className='h-[30px] border-l border-black' />
                    <div className='flex flex-col items-center max-md:p-[20px] max-md:border max-md:border-black'>
                        <div className='w-[86.5%] border-b border-black max-md:border-0' />
                        <div className='grid grid-cols-7 max-md:grid-cols-1 gap-[10px]'>
                            {navLinks.map((item, i) => (
                                <div key={i} className='flex flex-col items-center'>
                                    <div className='md:h-[30px] h-[10px] border-l border-black max-md:hidden' />
                                    <Link to={item.handle} onClick={windowScroll} className='py-[15px] w-full text-center bg-[#000244] text-white '>{item.title}</Link>
                                    {item.subLinks && (
                                        <div className='md:h-[30px] h-[15px] ml-[20px] border-l border-black' />
                                    )}
                                    <div className='flex flex-col gap-y-[10px] w-[90%]'>
                                        {item.subLinks?.map((item, i) => (
                                            <div key={i} className='flex items-center'>
                                                <Link to={item.handle} onClick={windowScroll} className='py-[15px]  px-[10px] w-full text-center bg-[#3c62e9] text-white'>{item.title}</Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

const navLinks = [
    {
        title: "Services",
        handle: "/cloud-based-services",
        subLinks: [
            {
                title: "Private Cloud",
                handle: "/service/private-cloud"
            },
            {
                title: "Public Cloud",
                handle: "/service/public-cloud"
            },
            {
                title: "Rackspace",
                handle: "/service/rackspace"
            },
            {
                title: "Bare Metal Servers",
                handle: "/service/bare-metal-servers"
            },
            {
                title: "Interconnection",
                handle: "/service/cloud-interconnection"
            },
            {
                title: "Storage Solutions",
                handle: "/service/cloud-storage-solutions"
            },
            {
                title: "Content Delivery",
                handle: "/service/cloud-content-delivery"
            },
            {
                title: "VPS Hosting",
                handle: "/service/vps-hosting"
            },
            {
                title: "Managed network Services",
                handle: "/service/cloud-managed-network",
            }
        ]
    },
    {
        title: "Franchisee",
        handle: "/cloud-computing-franchisee"
    },
    {
        title: "Media",
        handle: "/media"
    },
    {
        title: "About Us",
        handle: "/about-us"
    },
    {
        title: "Contact Us",
        handle: "/contact-us"
    },
    {
        title: "Data Center",
        handle: "/data-center"
    },
    {
        title: "Blogs",
        handle: "/blog",
        subLinks: [
            {
                title: "What is Cloud Computing? A Guide for Beginners",
                handle: "/blog/beginners-guide-cloud-computing"
            },
            {
                title: "Unlocking the Potential of Private Cloud Services for Enterprises",
                handle: "/blog/private-cloud-services-enterprises"
            },
            {
                title: "How Secure are Public Cloud Computing Solutions?",
                handle: "/blog/secure-public-cloud-computing-solutions"
            },
            {
                title: "The Power of Rackspace Cloud Computing and Services",
                handle: "/blog/rackspace-cloud-computing-services"
            },
            {
                title: "Advantages of Using Bare Metal Server Provider Services",
                handle: "/blog/bare-metal-server-provider-services"
            },
            {
                title: "Discover The Perfect Cloud Storage Solutions For Your Agency",
                handle: "/blog/cloud-storage-solutions-for-your-agency"
            },
            {
                title: "A Beginner's Guide To Understanding Data Centers In Mohali",
                handle: "/blog/beginners-guide-understanding-data-centers-mohali"
            }
        ]
    }
];

export default Sitemap;