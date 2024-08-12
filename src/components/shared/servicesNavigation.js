import { Link } from 'gatsby';
import React from 'react';
import { windowScroll } from '../../utils/windowScroll';

const ServicesNavigation = ({currentHandle}) => {
    return (
        <div>
            {services.map((item, i) => (
                <Link
                    key={i}
                    to={`/service/${item.handle}`}
                    onClick={windowScroll}
                    aria-label={item.link}
                    className={`text-[16px] items-center px-[20px] hover:bg-[#aaa] h-[50px] flex border-b last:border-none ${`/${item.handle}` === `/${currentHandle}` && "bg-[#000244] text-white"}`}
                >
                    {item.link}
                </Link>
            ))}
        </div>
    )
}

const services = [
    {
        link: "Private Cloud",
        handle: "private-cloud"
    },
    {
        link: "Public Cloud",
        handle: "public-cloud"
    },
    {
        link: "Rackspace",
        handle: "rackspace"
    },
    {
        link: "Bare Metal Servers",
        handle: "bare-metal-servers"
    },
    {
        link: "Interconnection",
        handle: "cloud-interconnection"
    },
    {
        link: "Storage Solutions",
        handle: "cloud-storage-solutions"
    },
    {
        link: "Content Delivery",
        handle: "cloud-content-delivery"
    },
    {
        link: "VPS Hosting",
        handle: "vps-hosting"
    },
    {
        link: "Managed Network Services",
        handle: "cloud-managed-network"
    }
]

export default ServicesNavigation;