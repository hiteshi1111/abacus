import React, { useEffect } from "react";
import { Link, navigate } from "gatsby";
import Seo from "../components/shared/seo";

const NotFoundPage = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 5000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
            <Seo title="404"/>
            <section className="pt-[100px] bg-[#fff]">
                <div className="container">
                    <div className="row"> 
                        <div className="col-sm-12">
                            <div className="col-sm-10 col-sm-offset-1 text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center text-[80px]">404</h1>
                                </div>
                                <div className="mt-[-50px]">
                                    <h3 className="text-[30px] md:text-[40px]">Looks like you're lost!</h3>
                                    <p className="capitalize text-[16px]">the page you are looking for, is not available!</p>
                                    <Link to="/" className="text-[#fff] px-[20px] py-[10px] bg-[#39ac31] mx-[20px] inline-block rounded-full" aria-label="Home">Go to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFoundPage;