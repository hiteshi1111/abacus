import React from "react";
import { Link } from "gatsby";

const BreadCrumbs = ({pages=[], white=false,className=""}) => {
    return(
        <div aria-label="breadcrumb" className={`w-full flex justify-center text-[14px] mb-[30px] ${white ? "!text-[#fff]" : "!text-[#000]"} ${className}`}>
            <Link
                to="/" 
                className="text-[13px] hover:underline"
                aria-label='Home'
            >
                Home
            </Link>
            {pages.length > 0 && pages.map((item, i) => (
                <div key={i}>
                    <span className="text-[13px] mx-[5px]"> / </span>
                    <Link
                        to={item.handle ? item.handle : "#"}
                        className={`text-[13px] ${item.handle ? "hover:underline pointer-events-auto" : "cursor-default pointer-events-none"}`}
                        aria-label={item.title}
                    >
                        {item.title.length > 50 ? `${item.title.slice(0, 30)}...` : item.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BreadCrumbs;
