import React, { useState } from 'react'
import SearchBar from "../components/shared/searchBar";
import MenuDrawer from "../components/shared/drawer";
import { Link } from "gatsby";
import { useLocation } from "react-use";
import { CopyToClipboard } from "../utils/copyToClipboard";
import { FaCopy, FaFacebook } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";

import { windowScroll } from "../utils/windowScroll";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({isSticky, data}) => {
    const [open, setOpen] = useState(false);
    const pathname = useLocation().pathname;
    return (
        <header className="relative z-50 bg-[#000244]">
            <div className="container">
            <div className="flex flex-wrap justify-between items-center py-[10px]">
                <div className="w-[100%] sm:w-[unset] mb-[10px] sm:mb-[0] sm:mx-100 flex sm:gap-[20px] gap-[10px] justify-center md:justify-start items-center">
                <div className="flex items-center gap-[5px]">
                    <TbPhoneCall color="#D7D7D7" size="20px" />
                    <a href={`tel:${data.mobileNo}`} aria-label="Mobile Number" className="text-white sm:text-[14px] text-[13px] leading-[166.667%]">{data.mobileNo}</a>
                </div>
                <button 
                  onClick={() => CopyToClipboard(data.mail)}
                  className="cursor-pointer flex items-center gap-[5px]"
                >
                    <IoIosMail color="#D7D7D7" size="20px" />
                    <span className="flex items-center text-white sm:text-[14px] text-[13px] leading-[166.667%] animate-pulse font-bold">Email Us<FaCopy color="#fff" size="12px" className="ml-[5px]"/></span>
                </button>
                </div>
                <div className="flex gap-[10px] mx-auto sm:mx-0 md:pt-0 items-center">
                    <SearchBar />
                    <a href="https://www.facebook.com/abacuscloudcomputing" target="_blank" className="hover:scale-[1.1] duration-500" aria-label="Facebook" rel="noreferrer">
                        <FaFacebook size="25px" color="#fff"/>
                    </a>
                    <a href="https://www.linkedin.com/company/abacuscloud/" target="_blank" className="hover:scale-[1.1] duration-500" aria-label="Linkedin" rel="noreferrer">
                      <StaticImage
                        src="../icons/social/linkedin.svg"
                        alt="linkedin"
                        className="w-[25px] h-[25px]"
                      />
                    </a>
                    <a href="https://twitter.com/Abacus_cloud" target="_blank" className="hover:scale-[1.1] duration-500" aria-label="Twitter" rel="noreferrer">
                        <AiFillTwitterCircle size="28px" color="#fff" />
                    </a>
                    <a href="https://www.instagram.com/abacus.cloud/" target="_blank" aria-label="Instagram" className="hover:scale-[1.1] duration-500" rel="noreferrer">
                      <StaticImage
                        src="../icons/social/instagram.svg"
                        alt="instagram"
                        className="w-[25px] h-[25px]"
                      />
                    </a>
                </div>
            </div>
            </div>
            <hr className="border-[#2E2F5C]" />
            <div className={`${isSticky ? 'header-position' : ''}`}>
            <div className="container">
                <div className="flex justify-between items-center w-full mx-auto py-[8px]">
                <Link to="/" className="flex items-center space-x-3" onClick={windowScroll} aria-label="The Abacus">
                    <StaticImage
                      src="../images/abacus.webp"
                      className="w-[54px] h-auto"
                      alt="The Abacus"
                      loading="lazy"
                    />
                </Link>
                <div className="hidden lg:flex gap-[40px]">
                    <div className="flex items-center justify-center text-base md:ml-auto gap-[35px] xl:gap-[45px]">
                    {navLinks.map((link, i) => (
                        <div key={i} className="relative group">
                        <Link 
                            to={link.handle} 
                            className="text-[#fff] text-[18px] leading-[18.5px] before:content before:h-[30px] before:absolute before:w-full before:top-[23px]" 
                            onClick={windowScroll}
                            onMouseEnter={() => setOpen(true)}
                            aria-label="Menu"
                        >{link.title}</Link>
                        {pathname === link.handle && (
                            <div className="border border-[#FF0000] h-[1px] max-w-[80%] mx-auto" />
                        )}
                        {open && link.subLinks && (
                            <div 
                              onMouseLeave={() => setOpen(false)} 
                              className="duration-500 left-[-20px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.2)] group-hover:visible group-hover:h-auto group-hover:overflow-visible grid bg-white text-black absolute top-[53px] w-[240px] z-[1111] before:content before:absolute before:top-[-30px] before:left-[15px] before:border-b-[#fff] before:border-[15px] before:border-transparent invisible overflow-hidden h-0"
                              role="columnheader"
                              tabIndex={0}
                            >
                            {link.subLinks.map((item, i) => (
                                <Link 
                                  key={i} 
                                  to={`/service/${item.handle}`} 
                                  onClick={() => {
                                      setOpen(false);
                                      windowScroll();
                                  }}
                                  aria-label="Services"
                                  className={`hover:bg-[#c0c0c0] border-b border-[#3c62e921] text-[16px] hover:text-black px-[20px] py-[12px] ${pathname === `/service/${item.handle}/` && "bg-[#3C62E9] text-white"}`}
                                >{item.title}</Link>
                            ))}
                            </div>
                        )}
                        </div>
                    ))}
                    </div>
                <div className="flex bg-white rounded-[5px] shadow-lg">
                    <a href="https://www.abacuscloud.in/" target="_blank" aria-label="Login" className="text-white bg-[#3C62E9] rounded-l-[5px] rounded-r-[5px] hover:bg-blue-800 w-[133px] h-[45px] flex justify-center items-center text-[20px] leading-[136.364%]" rel="noreferrer">
                        Login
                    </a>
                    <a href="https://abacuscloud.in/register" target="_blank" aria-label="Register" className="text-[#000244] leading-[136.364%] rounded-r-[5px] w-[120px] h-[45px] flex justify-center items-center text-[20px] leading-[136.364%]" rel="noreferrer">
                        Register
                    </a>
                    </div>
                </div>
                <div className="block lg:hidden">
                    <MenuDrawer navLinks={navLinks} />
                </div>
                </div>
            </div>
            </div>
        </header>
    )
}

const navLinks = [
    {
      title: "Services",
      handle: "/cloud-based-services",
      subLinks: [
        {
          title: "Private Cloud",
          handle: "private-cloud"
        },
        {
          title: "Public Cloud",
          handle: "public-cloud"
        },
        {
          title: "Rackspace",
          handle: "rackspace"
        },
        {
          title: "Bare Metal Servers",
          handle: "bare-metal-servers"
        },
        {
          title: "Interconnection",
          handle: "cloud-interconnection"
        },
        {
          title: "Storage Solutions",
          handle: "cloud-storage-solutions"
        },
        {
          title: "Content Delivery",
          handle: "cloud-content-delivery"
        },
        {
          title: "VPS Hosting",
          handle: "vps-hosting"
        },
        {
          title: "Managed network Services",
          handle: "cloud-managed-network",
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
    }
]

export default Header;
