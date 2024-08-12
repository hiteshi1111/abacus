import React from 'react';
import testimonialBg from "../../images/testimonial_bg.webp";
import Slider from "react-slick";
import SectionHeader from '../shared/sectionHeader';
import { MdAccountCircle } from 'react-icons/md';
import { IoMdStar } from 'react-icons/io';
import { ImQuotesLeft } from "react-icons/im";
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Testimonial = () => {
   const { allContentfulReviews } = useStaticQuery(graphql`
      query {
         allContentfulReviews {
            edges {
               node {
                  profilePicture {
                     gatsbyImageData
                  }
                  fullName
                  comment {
                     comment
                  }
               }
            }
         }
      }
   `)

   let settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: false,
      variableWidth: false,
      arrows: false,
      dots: false,
      autoplay: true,
      speed: 500,
      responsive: [
         {
            breakpoint: 1280,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   };
   return (
      <section className="testimonial bg-[#fff] bg-cover bg-repeat bg-fixed border-b" style={{ backgroundImage: `url(${testimonialBg})` }} >
         <div className="container">
         <SectionHeader
            title='Testimonial'
            description="What's Our Clients Say?"
            maxWidth='472px'
         />
         <Slider className='mt-[30px]' {...settings}>
            {allContentfulReviews.edges.map(({node, i}) => (
               <div key={i} className='group'>
               <div className='bg-white p-[30px] mb-[20px] shadow-[0_0_12px_#ddd] relative rounded-[5px] lg:min-h-[225px] md:min-h-[234px] min-h-auto'>
                  <figure className='mt-[-65px] mb-[25px] bg-[#000244] group-hover:bg-[#3c62e9] duration-500 rounded-[10px] h-[70px] w-[70px] flex justify-center content-center justify-items-center p-[15px]'>
                     <ImQuotesLeft size="40px" color="#fff"/>
                  </figure>
                  <p className='text-[16px] lg:text-[18px] italic mb-[0]'>{node.comment?.comment}</p>
               </div>
               <div className='flex justify-between px-[10px]'>
                  <div className="flex items-center gap-x-6">
                     {node.profilePicture ? (
                        <GatsbyImage
                           image={node.profilePicture.gatsbyImageData}
                           alt={node.fullName}
                           className='rounded-full w-[50px] w-[50px]'
                        />
                     ):(
                        <MdAccountCircle size={50} color='#aaa' />   
                     )}
                     <div className='pr-[10px]'>
                        <h3 className='mb-[0] !text-[19px] lg:!text-[20px]'>{node.fullName}</h3>
                     </div>
                  </div>
                  <ul className='flex'>
                     <li><IoMdStar color='#f3c513' size="20px"/></li>
                     <li><IoMdStar color='#f3c513' size="20px"/></li>
                     <li><IoMdStar color='#f3c513' size="20px"/></li>
                     <li><IoMdStar color='#f3c513' size="20px"/></li>
                     <li><IoMdStar color='#f3c513' size="20px"/></li>
                  </ul>
               </div>
               </div>
            ))}
         </Slider>
         </div>
      </section>
   )
}

export default Testimonial;