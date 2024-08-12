import React from 'react';
import Slider from "react-slick";
import SectionHeader from '../shared/sectionHeader';
import { graphql, useStaticQuery } from "gatsby";

import { GatsbyImage } from 'gatsby-plugin-image';

const Collaborators = () => {
    const { allContentfulCollaborators } = useStaticQuery(graphql`
        query{
            allContentfulCollaborators {
                edges {
                    node {
                        logo {
                            gatsbyImageData
                        }
                        imageTitle
                        altText
                    }
                }
            }
        }
    `)
    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        // easing: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 450,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
           
            <section className='py-0'>
                <div className='container'>
                    <SectionHeader
                        title='Collaborators'
                        description="Steering innovation, fueling growth and generating long lasting impact is possible by associating with the best cloud server agency. We have ascertained that our partners are a vital component of our system to provide best cloud solutions to our clients."
                        maxWidth='800px'
                    />
                    <Slider {...settings} className="collaborators-slider-info pt-[0px]">
                        {allContentfulCollaborators.edges.map(({node}, i) => (
                            <div key={i}>
                                <div className="max-sm:max-w-[130px] sm:max-w-[185px] px-[10px] py-[15px] mx-auto my-[10px] text-center shadow-[0_0_10px_rgba(0,0,0,.08)] rounded-[5px]">
                                    {node.logo && (
                                        <GatsbyImage
                                            image={node.logo.gatsbyImageData}
                                            alt={node.altText || node.imageTitle}
                                            title={node.imageTitle}
                                            className='h-full w-full object-center object-contain my-auto'
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Collaborators;