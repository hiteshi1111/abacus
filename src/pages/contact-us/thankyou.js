import { Link, navigate } from 'gatsby'
import React, { useContext, useEffect } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import Seo from '../../components/shared/seo'
import { UIContext } from '../../context'
import NotFoundPage from '../404'

const ThankYou = () => {
    const { isFormSubmitted, setIsFormSubmitted } = useContext(UIContext);
    
    useEffect(() => {
        if (isFormSubmitted){
            const timer = setTimeout(() => {
                navigate("/")
            }, 3000);
            return () => clearTimeout(timer);
        }
    },[isFormSubmitted])

    if (isFormSubmitted){
        return(
            <>
            <Seo 
                title='Thank You'
                noIndex
            />
            <div className="w-full flex flex-col justify-between text-center py-[50px] lg:py-[100px] px-[20px] md:px-[30px]">
                <div>
                    <h2>Thank You</h2>
                    <p className='text-[20px] text-[#008000] font-bold'>Your form has been submitted successfully!</p>
                    <div className='flex justify-center'>
                        <FaCheckCircle color='#008000' className='text-[60px] md:text-[100px]'/>
                    </div>
                </div>
                <p className='text-[16px] font-bold'>We appreciate you reaching out and will get back to you soon.</p>
                <Link 
                    to="/" 
                    onClick={() => setIsFormSubmitted(false)}
                    className='text-[12px] text-[#00f] hover:underline'
                >Return to Home</Link>
            </div>
            </>
        )
    }
    return <NotFoundPage />
}

export default ThankYou;