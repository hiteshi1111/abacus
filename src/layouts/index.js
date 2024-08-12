import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { useLocation } from "react-use";
import { FaCopy, FaFacebook } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp, MdOutlineKeyboardDoubleArrowRight  } from "react-icons/md";
import { FaMapPin } from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import useScrollPosition from "../hooks/useScrollPosition";
import { windowScroll } from "../utils/windowScroll";
import FloatingActions from "../components/shared/floatingAction";
import { CopyToClipboard } from "../utils/copyToClipboard";
import { StaticImage } from "gatsby-plugin-image";
import { ToastContainer } from "react-toastify";
import Header from "./header";
import ContextProvider from '../context';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import footoneshape1 from "../images/home/foot-one-shape-1.webp";
import footoneshape2 from "../images/home/foot-one-shape-2.webp";

const Layout = ({ children }) => {
  const [isSticky, setSticky] = useState(false);

  const { pathname } = useLocation();

  const scrollPosition = useScrollPosition();

  const handleScroll = () => {
    const offset = window.scrollY;
    setSticky(offset > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const windowScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }
  const d = new Date();
  let year = d.getFullYear();
  
  return (
    <ContextProvider>
        <ToastContainer />
        <Header isSticky={isSticky} data={data} />
        {children}
        <footer className='bg-[#000244] footer-bg-info relative overflow-hidden'>
            <div>
              <div className="absolute top-0 left-0 animate-[floatboby_1.8s_ease-in-out_infinite_alternate]">
                <img src={footoneshape1} alt="" className='w-auto'/>
              </div>
              <div className="absolute bottom-0 right-0 animate-[floatbobz_1.8s_ease-in-out_infinite_alternate]">
                <img src={footoneshape2} alt="" className='w-auto'/>
              </div>
            </div>
            <div className="relative max-md:py-[30px] md:py-[40px] lg:py-[78px]">
            <div className="container flex flex-col lg:flex-row gap-[30px] !px-[20px]">
                <div className="flex flex-col justify-start items-center lg:items-start w-full lg:w-[25%]">
                  <Link to="/" className="flex mt-[10px] mx-auto lg:ml-0" aria-label="The Abacus" onClick={windowScroll}>
                    <StaticImage 
                      src="../images/abacus.webp"
                      alt="The Abacus"
                      title="The Abacus Cloud Server"
                      className="max-w-[70px] w-full"
                    />
                  </Link>
                  <p className="!m-0 !lg:ml-0 text-white text-[16px] w-full text-center lg:text-left max-w-[700px] lg:max-w-[260px] !mt-[30px]">Empowering Your Digital Future with The Abacus. With state-of-the-art cloud solutions tailored to elevate your business, we are committed to innovation, reliability, and unparalleled support. Explore our range of services from scalable cloud infrastructure to bespoke cloud management solutions, all designed to drive your business forward.</p>
                </div>
                <div className="flex flex-wrap justify-between w-full lg:w-[80%]">
                {footerLinks.map((link, i) => (
                    <div className="w-[100%] md:w-[50%] lg:w-[25%] my-[20px] lg:my-[0]" key={i}>
                    <h3 className="text-white font-medium	pb-[8px] mb-[25px] text-[20px] md:text-[24px] relative before:content before:left-[0] before:bottom-[0] before:absolute before:h-[1.5px] before:w-[60px] before:bg-[#fff]">{link.title}</h3>
                    <div className="grid gap-[12px] sm:gap-[15px] md:gap-[10px]">
                      {link.subLinks.map((item, i) => (
                        <Link 
                            key={i} 
                            to={item.handle} 
                            className={`flex items-center hover:pl-[6px] text-[16px] leading-[164.706%] text-[#D7D7D7] hover:text-[#fff] ${pathname === `${item.handle}/` && "!text-[#FF0000] hover:text-[#FF0000]"}`} 
                            onClick={windowScroll}
                            aria-label={item.link}
                        ><MdOutlineKeyboardDoubleArrowRight  className="!w-[16px]" />{item.link}</Link>
                      ))}
                    </div>
                    </div>
                ))}
                <div className="w-[100%] md:w-[50%] lg:w-[25%] my-[20px] lg:my-[0]">
                    <h3 className="text-white font-medium	pb-[8px] mb-[25px] text-[20px] md:text-[24px] relative before:content before:left-[0] before:bottom-[0] before:absolute before:h-[1.5px] before:w-[60px] before:bg-[#fff]">Contact Info</h3>
                    <div className="grid gap-[12px] sm:gap-[15px] md:gap-[20px]">
                      <div className="flex gap-[15px] items-start">
                          <FaMapPin color="#D7D7D7" size="20px" />
                          <span className="text-[16px] leading-[164.706%] max-w-[219px] text-[#D7D7D7] hover:text-[#fff] duration-500">{data.address}</span>
                      </div>
                      <div className="flex gap-[15px]">
                          <TbPhoneCall color="#D7D7D7" size="20px" />
                          <a href={`tel:${data.whatsAppNo}`} className="text-[16px] leading-[164.706%] text-[#D7D7D7] hover:text-[#fff] duration-500" aria-label="whatsAppNo">{data.whatsAppNo}</a>
                      </div>
                      <button 
                        onClick={() => CopyToClipboard(data.mail)}
                        className="cursor-pointer flex gap-[15px] items-center"
                      >
                          <IoIosMail color="#D7D7D7" size="23px" />
                          <span className="flex items-center text-[16px] leading-[164.706%] text-[#D7D7D7] hover:text-[#fff] duration-500 animate-pulse font-bold">Email Us<FaCopy color="#fff" size="12px" className="ml-[5px]"/></span>
                          
                      </button>
                      <div className="gap-[8px] flex sm:w-auto mt-[8px] w-full">
                    <a href="https://www.facebook.com/abacuscloudcomputing" target="_blank" aria-label="Facebook" rel="noreferrer">
                      <div className="border border-[#6B7499] rounded-full flex justify-center items-center h-[42px] w-[42px] hover:scale-[1.1] duration-500">
                        <FaFacebook size="32" color="#fff" />
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/company/abacuscloud/" target="_blank" aria-label="linkedin" rel="noreferrer">
                      <div className="border border-[#6B7499] rounded-full flex justify-center items-center h-[42px] w-[42px] hover:scale-[1.1] duration-500">
                        <StaticImage
                          src="../icons/social/linkedin.svg"
                          alt="linkedin"
                        />
                      </div>
                    </a>
                    <a href="https://twitter.com/Abacus_cloud" target="_blank" className="hover:scale-[1.1] duration-500" aria-label="Twitter" rel="noreferrer">
                      <div className="border border-[#6B7499] rounded-full flex justify-center items-center h-[42px] w-[42px] ">
                        <AiFillTwitterCircle size="32" color="#fff" />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/abacus.cloud/" target="_blank" aria-label="instagram" rel="noreferrer">
                      <div className="border border-[#6B7499] rounded-full flex justify-center items-center h-[42px] w-[42px] hover:scale-[1.1] duration-500">
                        <StaticImage
                          src="../icons/social/instagram.svg"
                          alt="instagram"
                          className="w-[30px] h-[30px]"
                        />
                      </div>
                    </a>
                  </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="relative bg-[#000244] border-t-[1px] border-[#2E2F5C] py-[20px]">
              <div className="flex flex-col lg:flex-row justify-between items-center container gap-[10px]">
                <div className="text-[#D7D7D7] text-[16px] leading-[164.667%] mx-auto sm:mx-0 text-center sm:text-left">Copyright © {year}. All Rights Reserved By VP Broadband Private Limited</div>
                <div className="text-[#D7D7D7] text-[16px] leading-[164.667%] mx-auto sm:mx-0 text-center sm:text-left">Powered by Digitax India Communications Private Limited</div>
              </div>
            </div>
        </footer>
        {scrollPosition > 500 && (
            <button 
              className='fixed group 2xl:right-[50px] md:right-[30px] bottom-[30px] sm:bottom-[70px] duration-500 right-[15px] bg-[#fff] hover:bg-[#3c62e9] w-[50px] h-[50px] shadow-md rounded-[10px] shadow-[#000244] flex justify-center items-center'
              onClick={windowScrollToTop}
              aria-label='scroll'
            >
              <MdKeyboardDoubleArrowUp 
                color="#040538" 
                size="25px" 
                className="group-hover:!text-white" 
              />
            </button>
        )}
        <FloatingActions />
    </ContextProvider>
  );
};

const data = {
  mobileNo: "+91 9851198555",
  mail: "info@theabacus.in",
  address: "B-70, Phase 7, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055",
  whatsAppNo: "+91 9851198555"
}

const footerLinks = [
  {
    title: "Services",
    subLinks: [
      {
        link: "Private Cloud",
        handle: "/service/private-cloud"
      },
      {
        link: "Public Cloud",
        handle: "/service/public-cloud"
      },
      {
        link: "Rackspace",
        handle: "/service/rackspace"
      },
      {
        link: "Bare Metal Servers",
        handle: "/service/bare-metal-servers"
      },
      {
        link: "Interconnection",
        handle: "/service/cloud-interconnection"
      },
      {
        link: "Storage Solutions",
        handle: "/service/cloud-storage-solutions"
      },
      {
        link: "Content Delivery",
        handle: "/service/cloud-content-delivery"
      },
      {
        link: "VPS Hosting",
        handle: "/service/vps-hosting"
      },
      {
        link: "Managed Network Services",
        handle: "/service/cloud-managed-network"
      }
    ]
  },
  {
    title: "Company",
    subLinks: [
      {
        link: "Data Center",
        handle: "/data-center"
      },
      {
        link: "Services",
        handle: "/cloud-based-services"
      },
      {
        link: "Franchisee",
        handle: "/cloud-computing-franchisee"
      },
      {
        link: "Media",
        handle: "/media"
      },
      {
        link: "Contact Us",
        handle: "/contact-us"
      },
      {
        link: "About Us",
        handle: "/about-us"
      },
      {
        link: "Blog",
        handle: "/blog"
      }
    ]
  },
  {
    title: "Solutions",
    subLinks: [
      {
        link: "Terms & Conditions",
        handle: "/terms-conditions"
      },
      {
        link: "Privacy Policy",
        handle: "/privacy-policy"
      },
      {
        link: "Cancellation Policy",
        handle: "/cancellation-policy"
      },
      {
        link: "Refund Policy",
        handle: "/refund-policy"
      },
      {
        link: "FAQ",
        handle: "/faq"
      },
      {
        link: "Sitemap",
        handle: "/sitemap.html"
      }
    ]
  },
];

export default Layout;
