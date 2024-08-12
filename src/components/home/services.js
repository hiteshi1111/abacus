import React from 'react';
import SectionHeader from '../shared/sectionHeader';
import { Link } from 'gatsby';
import { windowScroll } from '../../utils/windowScroll';
import { FaCloud, FaMixcloud, FaCloudUploadAlt, FaNetworkWired } from "react-icons/fa";
import { SiSonarcloud } from "react-icons/si";
import { GrServerCluster, GrStorage } from "react-icons/gr";
import { MdComputer } from "react-icons/md";
import { BsHddRackFill } from "react-icons/bs";
import inneraboutshape from "../../images/home/inner-about-shape.webp"

const Services = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute w-[250px] right-0 top-[250px] animate-[animate-bounceTop_5s_infinite_ease-in-out_alternate] max-lg:opacity-30 opacity-40">
        <img className="object-cover" src={inneraboutshape} alt=""/>
      </div>
      <div className='container'>
        <SectionHeader title='Services' description='' maxWidth='639px'/>
        <div className="pt-[20px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] max-lg:gap-[20px]">
          {data.map((item, i) => (
            <Link key={i} to={`/service/${item.handle}`} onClick={windowScroll} 
              className={`relative bg-[#fff] shadow-[0_0_1.25rem_rgba(108,_118,_134,_0.1)] hover:mt-[-8px] rounded-[5px] group flex flex-col px-[30px] py-[40px] duration-500`}
              aria-label={item.title}>
                <div className='flex justify-center group'>
                    <div className='flex justify-center items-center sm:h-[55px] sm:w-[55px] h-[50px] w-[50px] duration-500 rounded-[10px] rotate-45 shadow-[5px_8.66px_30px_0px_rgba(0,0,0,0.15)] bg-[#000244] text-[55px] group-hover:text-[#fff] group-hover:bg-[#3C62E9]'>
                      <span className='-rotate-45'>{item.icon}</span>
                    </div>
                    <div className='flex items-center sm:pl-[20px] pl-[15px] text-left sm:w-[calc(100%_-_55px)] w-[calc(100%_-_50px)]'>
                      <h3 className='md:text-[24px] max-md:text-[20px]'>{item.title}</h3>
                    </div>
                </div>
              {/* <figure className='md:w-[85px] md:h-[85px] w-[70px] h-[70px] flex duration-500 center items-center justify-center bg-[#3C62E9] group-hover:bg-[#000244] rounded-[15px]  border-[#215F7E] p-[15px] mb-[25px]'>
                {item.icon}
              </figure>
              <h3>{item.title}</h3> */}
              <p className='md:text-[16px] max-md:text-[15px] mt-[20px] mb-[0px]'>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const data = [
  {
      title: "Private Cloud",
      handle: "private-cloud",
      description: "Experience an exemplary cloud computing server platform designed to meet 	the unique regulatory requirements of your business",
      icon: <FaCloud color='#fff' size="35px"/>
  },
  {
      title: "Public Cloud",
      handle: "public-cloud",
      description: "Public cloud is the solution for you if you want a cloud computing server at lower prices, suitable for both commercial and public cloud regions.",
      icon: <FaMixcloud color='#fff' size="35px" />
  },
  {
      title: "Rackspace",
      handle: "rackspace",
      description: "The Abacus rackspace cloud solutions facilitate secure and managed access which is utmost for computer racks.",
      icon: <BsHddRackFill color='#fff' size="35px" />
  },
  {
      title: "Bare Metal Servers",
      handle: "bare-metal-servers",
      description: "Renting a devoted hardware resource is easy with us, without any need to get any operating system installed and any virtualisation infrastructure.",
      icon: <GrServerCluster color='#fff' size="35px" />
  },
  {
      title: "Interconnection",
      handle: "cloud-interconnection",
      description: "With cloud interconnection, establish easier connections with different networks in accordance with their rules.",
      icon: <SiSonarcloud color='#fff' size="35px" />
  },
  {
      title: "Storage Solutions",
      handle: "cloud-storage-solutions",
      description: "Make management of heavy workloads effortless for uninterrupted business operations.",
      icon: <GrStorage color='#fff' size="35px" />
  },
  {
      title: "Content Delivery",
      handle: "cloud-content-delivery",
      description: "With the integration of a comprehensive CDN marketplace, accelerate your content delivery capabilities.",
      icon: <MdComputer color='#fff' size="35px" />
  },
  {
      title: "VPS Hosting",
      handle: "vps-hosting",
      description: "Take your digital journey to new heights and stay abreast with the Abacus Virtual private Servers.",
      icon: <FaCloudUploadAlt color='#fff' size="35px" />
  },
  {
      title: "Managed Network Services",
      handle: "cloud-managed-network",
      description: "The Abacus managed network services allow you to experience advanced technology while working on heterogeneous networks.",
      icon: <FaNetworkWired color='#fff' size="35px" />
  },
];

export default Services;