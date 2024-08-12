import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, graphql, useStaticQuery } from "gatsby";
import animate1 from "../../images/home/animate1.webp"
import animate2 from "../../images/home/animate2.webp"
import animate3 from "../../images/home/animate3.webp"
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    const { allContentfulHero } = useStaticQuery(graphql`
        query{
            allContentfulHero(sort: {createdAt: ASC}) {
                edges {
                    node {
                        title
                        actionTitle
                        actionHandle
                        description {
                            description
                        }
                        featuredImage {
                            gatsbyImageData
                            title
                        }
                    }
                }
            }
        }
    `)
    let settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <section className="relative overflow-hidden banner relative bg-[#000244] lg:pt-[30px] lg:pb-[100px] md:pt-[30px] md:pb-[60px] max-md:py-[30px]">
            <Slider {...settings} className="container relative z-10">
                {allContentfulHero.edges.map(({node}, i) => (
                    <div key={i} className="!flex 2xl:px-0 lg:px-[50px] md:px-[40px] px-0 flex-col md:flex-row w-full !justify-between items-center">
                        <div className="md:w-[50%]">
                            <div>
                                {node.title && (
                                    <div className="text-[#fff] md:text-[38px] lg:text-[60px] max-md:text-[25px] text-[#fff] font-bold leading-[114.167%] md:mb-[20px] max-md:mb-[15px]">
                                        {node.title}
                                    </div>
                                )}
                                {node.description && (
                                    <p className="md:text-[18px] lg:text-[20px] max-md:text-[14px] leading-[162.5%] text-white mt-0 md:mb-[35px] max-md:mb-[20px]">{node.description.description}</p>
                                )}
                                <Link
                                    to={node.actionHandle}
                                    className="btn-switch-text relative overflow-hidden w-full md:max-w-[190px] max-md:max-w-[170px] text-white bg-[#355adc] lg:px-[5px] lg:py-[17px] max-lg:py-[13px] max-lg:px-[30px] flex justify-center items-center md:text-[16px] max-md:text-[14px] rounded-full hover:bg-[#355adc]" 
                                ><span className="btn-double-text" data-text={node.actionTitle}>{node.actionTitle}</span><FaArrowRightLong className="ml-[10px]"/></Link>
                            </div>
                        </div>
                        <div className="hero-right-imginfo flex justify-center md:w-[50%] max-md:mt-[20px]">
                            {node.featuredImage && (
                                <GatsbyImage
                                    image={node.featuredImage.gatsbyImageData}
                                    alt={node.featuredImage.title || "banner"}
                                    decoding="async"
                                    loading="eager"
                                />
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
                <div className="shape-image-animation absolute left-0 bottom-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" widht="3000" height="400" viewBox="0 180 2500 200" fill="#ffffff">
                    <path class="st1" d="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250">
                    <animate attributeName="d" dur="5s" values="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250;
                                                M 0 250 C 400 50 400 400 3000 250 L 3000 550 L 0 550 L 0 250;
                                                M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250" repeatCount="indefinite"></animate>
                    </path>
                    </svg>
                </div>
                <div className="over-shape">
                    <img src={animate1} alt="shape icon" />
                    <img src={animate1} alt="shape icon" />
                    <img src={animate2} alt="shape icon" />
                    <img src={animate2} alt="shape icon" />
                    <img src={animate3} alt="shape icon" />
                </div>
        </section>
    )
}

export default Hero;