import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-use';
import Seo from '../components/shared/seo';
import SectionHeader from '../components/shared/sectionHeader';
import stdCodes from "../data/stdCodes.json";
import { PostRequest } from '../utils/requests';
import { validateEmail, validatePhone } from '../utils/formFunctions';
import Loader from '../components/shared/loader';
import BreadCrumbs from '../components/shared/breadCrumbs';
import { TbPhoneCall } from 'react-icons/tb';
import { IoIosMail } from 'react-icons/io';
import { FaMapPin } from 'react-icons/fa';
import TextInput from '../components/shared/textInput';
import Textarea from '../components/shared/textarea';
import GetPageData from '../utils/getPageData';
import { navigate } from 'gatsby';
import { UIContext } from '../context';

const ContactUs = () => {
    const { pathname } = useLocation();
    const { setIsFormSubmitted } = useContext(UIContext);
    const pageData = GetPageData(pathname?.replaceAll("/", ""));
    
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState({
        email: false,
        msg: false,
        phone: false,
        message: "",
        success: false
    });
    const [formInput, setFormInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
        stdCode: "+91"
    })

    const firstNameHandler = (e) => {
        const inputValue = e.target.value;
        const alphaValue = inputValue.replace(/[^A-Za-z]/g, '');
        if (alphaValue.length <= 30) {
            setFormInput(prevState => ({ ...prevState, firstName: alphaValue }));
            setError(prevState => ({...prevState, message: ""}));
        }
    };
    const lastNameHandler = (e) => {
        const inputValue = e.target.value;
        const alphaValue = inputValue.replace(/[^A-Za-z]/g, '');
        if (alphaValue.length <= 30) {
            setFormInput(prevState => ({ ...prevState, lastName: alphaValue }));
            setError(prevState => ({...prevState, message: ""}));
        }
    };
    const handlePhoneInputChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/\D/g, ''); // Remove non-digit characters
    
        if (numericValue.length <= 10) {
            setFormInput((prevState) => ({ ...prevState, phone: numericValue }));
            setError((prevState) => ({ ...prevState, phone: false, message: '' }));
        }
    };
    const handleEmailInputChange = (e) => {
        const inputValue = e.target.value;
        const val = inputValue.replace(" ", '').toLowerCase(); 
        setFormInput((prevState) => ({ ...prevState, email: val }));
        setError((prevState) => ({ ...prevState, email: false, message: '' }));
    };
    const handleSubjectInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 50){
            setFormInput(prevState => ({ ...prevState, subject: inputValue }));
            setError(prevState => ({...prevState, message: ""}));
        }
    };
    const handleMessageInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 500){
            setFormInput(prevState => ({ ...prevState, message: inputValue }));
            setError(prevState => ({...prevState, message: ""}));
        }
    };
    
    function submissionHandler() {
        setDisabled(true);
        setError(prevState => ({...prevState, message: ""}));
        if (!formInput.firstName || !formInput.lastName || !formInput.email || !formInput.phone || !formInput.subject){
            setError(prevState => ({...prevState, success: false, message: "Fields must not be empty!"}));
            setDisabled(false);
        }else if(!validateEmail(formInput.email)){
            setError(prevState => ({...prevState, email: true, message: "Email is invalid!"}));
            setDisabled(false);
        }else if(!validatePhone(formInput.phone)){
            setError(prevState => ({...prevState, phone: true, message: "Phone number is invalid!"}));
            setDisabled(false);
        }else {   
            PostRequest(process.env.GATSBY_API_URL + 'contact/submit',{
                firstName: formInput.firstName,
                lastName: formInput.lastName,
                email: formInput.email,
                phone: `${formInput.stdCode}${formInput.phone}`,
                message: formInput.message,
                subject: formInput.subject
            }).then(response => {
                setIsFormSubmitted(true);
                navigate("/contact-us/thankyou")
            }).catch(err => {
                setError(prevState => ({...prevState, message: err?.data ? err.data.error : "Something went wrong. Try again later!"}));
                setDisabled(false);
            });
        }
    }

    useEffect(() => {
        if(error.success) {
            const timer = setTimeout(() => {
                setFormInput((prevState) => ({ 
                    ...prevState, 
                    firstName: "",
                    lastName: "",
                    email: "",
                    subject: "",
                    phone: "",
                    message: "",
                }))
                setError((prevState) => ({ ...prevState, success: false}));
                setDisabled(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    },[error.success])
    
    return (
        <>
            <Seo 
                title={pageData?.metaTitle}
                description={pageData?.metaDescription?.metaDescription}
                keywords={pageData?.keywords?.keywords}
            />
            <>
                <section>
                    <div className="container ">
                        <BreadCrumbs pages={pages} />
                        <SectionHeader
                            title={pageData?.title}
                            description="Please take a moment to fill out the form."
                            h1
                        />
                        <div className="contact_form grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative w-full grid mb-[50px] lg:mb-0 p-0 lg:md:p-[50px] shadow-none lg:shadow-[0_0_10px_#e5e5e5]">
                                {disabled && (<Loader />)}
                                <form>
                                    <p className={`text-[14px] text-left text-[#FF0000] font-semibold mb-[10px] ${!error.email && !error.msg && !error.phone && error.message ? 'block' : 'hidden '}`}>{error.message}</p>
                                    <div className="grid md:grid-cols-2 md:gap-4">
                                        <div className="relative z-0 w-full mb-[25px] group">
                                            <label htmlFor="firstname" className="inline-block mb-[10px] text-[14px]">First Name<span className="text-[#FF0000]"> *</span></label>
                                            <TextInput 
                                                disabled={disabled}
                                                value={formInput.firstName}
                                                onChange={(e) => firstNameHandler(e)}
                                            />
                                        </div>
                                        <div className="relative z-0 w-full mb-[25px] group">
                                            <label htmlFor="lastname" className="inline-block mb-[10px] text-[14px]">Last Name<span className="text-[#FF0000]"> *</span></label>
                                            <TextInput 
                                                disabled={disabled}
                                                value={formInput.lastName}
                                                onChange={(e) => lastNameHandler(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-4">
                                        <div className="relative z-0 w-full mb-[25px] group">
                                            <label htmlFor="email" className="inline-block mb-[10px] text-[14px]">Email<span className="text-[#FF0000]"> *</span></label>
                                            <TextInput 
                                                disabled={disabled}
                                                placeholder='example@gmail.com'
                                                type='email'
                                                value={formInput.email}
                                                errorText={error.email && error.message}
                                                onChange={(e) => handleEmailInputChange(e)}
                                            />
                                        </div>
                                        <div className="relative z-0 w-full mb-[25px] group">
                                            <label htmlFor="subject" className="inline-block mb-[10px] text-[14px]">Subject<span className="text-[#FF0000]"> *</span></label>
                                            <TextInput 
                                                disabled={disabled}
                                                value={formInput.subject}
                                                onChange={(e) => handleSubjectInputChange(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="relative z-0 w-full mb-[25px] group">
                                        <label htmlFor="phone" className="inline-block mb-[10px] text-[14px]">Phone<span className="text-[#FF0000]"> *</span></label>

                                        <div className='flex justify-between'>
                                            <select className="h-[50px] px-[6px] w-[100px] !border-r-0 border border-[#c4c4c4] rounded-l-[4px] focus:outline-none" value={formInput.stdCode} onChange={(e) => setFormInput(prevState => ({ ...prevState, stdCode: e.target.value }))}>
                                                {stdCodes.map((item, i) => (
                                                    <option key={i} value={item.dial_code} className="h-[20px] border-b">{item.dial_code} ({item.code})</option>
                                                ))}
                                            </select>
                                            <TextInput 
                                                disabled={disabled}
                                                value={formInput.phone}
                                                onChange={(e) => handlePhoneInputChange(e)}
                                                className='rounded-l-none'
                                                // errorText={error.phone && error.message}
                                            />
                                        </div>
                                        {error.phone && (
                                            <span className='text-[#FF0000] text-[12px]'>{error.message}</span>
                                        )}
                                    </div>
                                    <div className="relative z-0 w-full mb-[25px] group">
                                        <label htmlFor="message" className="inline-block mb-[10px] text-[14px]">Leave Us a Message</label>
                                        <Textarea
                                            disabled={disabled}
                                            error={error.msg}
                                            id="message-input"
                                            value={formInput.message}
                                            helperText={error.msg && error.message}
                                            placeholder='Write your message here...'
                                            onChange={(e) => handleMessageInputChange(e)}
                                            className={`${error.msg && "mui-contact-error"}`}
                                        />
                                        {error.msg && (
                                            <span className='text-[#FF0000]'>{error.message}</span>
                                        )}
                                    </div>
                                </form>
                                <button 
                                    onClick={submissionHandler} 
                                    aria-label='contact us'
                                    className="text-white duration-500 h-[52px] mx-auto md:mx-0 bg-[#000244] hover:bg-[#3c62e9] focus:outline-none rounded-[5px] text-[18px] leading-[136.364%] w-full px-5 py-2.5 text-center max-w-[170px]"
                                >Submit</button>
                            </div>
                            <iframe 
                                title='map' 
                                width="100%" 
                                className='min-h-[100%] h-[350px] md:h-[500px] bg-[#e8eaed]' 
                                height=""
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.180033914094!2d76.69176177607471!3d30.713338786568798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef99cc17fe25%3A0x6a593a19f7208f9b!2sAbacus%20Cloud!5e0!3m2!1sen!2sus!4v1705467957769!5m2!1sen!2sus"
                            ></iframe>
                        </div>
                    </div>
                </section>

                <section className='bg-[#f3f5fa]'>
                    <div className="container flex flex-col mx-auto">
                        <div className="w-full">
                            <div className="container flex flex-col items-center">
                                <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
                                    <div className="group flex flex-col items-center gap-3 px-6 py-[50px] justify-center text-center bg-white rounded-3xl shadow-main duration-500">
                                        <span className='h-[60px] md:h-[70px] '>
                                            <IoIosMail color="#3c62e9" size="80px" className='!text-[60px] md:!text-[70px] text-[#3c62e9] group-hover:text-[#0a0ea3] group-hover:mt-[10px] duration-500 group-hover:animate-bounce' />
                                        </span>
                                        <h5 className="text-[22px] md:text-[26px] font-bold text-dark-grey-900 mb-[5px] mt-0 md:mt-[15px]">Email</h5>
                                        <a href={`mailto:info@theabacus.in`} className="text-lg font-medium text-purple-blue-500" aria-label="email">{data.email}</a>
                                    </div>
                                    <div className="group flex flex-col items-center gap-3 px-6 py-[50px] justify-center text-center bg-white rounded-3xl shadow-main duration-500">
                                        <span className='h-[60px] md:h-[70px] '>
                                            <TbPhoneCall color="#3c62e9" size="70px" className='!text-[60px] md:!text-[70px] text-[#3c62e9] group-hover:text-[#0a0ea3] group-hover:mt-[10px] duration-500 group-hover:animate-bounce'/>
                                        </span>
                                        <h5 className="text-[22px] md:text-[26px] font-bold text-dark-grey-900 mb-[5px] mt-0 md:mt-[15px]">Phone</h5>
                                        <a href={`tel:+91 9851198555`} aria-label="phone" className="text-lg font-medium text-purple-blue-500">{data.phone}</a>
                                    </div>
                                    <div className="group flex flex-col items-center gap-3 px-6 py-[50px] justify-center text-center bg-white rounded-3xl shadow-main duration-500">
                                        <span className='h-[50px]'>
                                            <FaMapPin color="#3c62e9" size="50" className='!text-[60px] md:!text-[70px] text-[#3c62e9] group-hover:text-[#0a0ea3] group-hover:mt-[10px] duration-500 group-hover:animate-bounce' />
                                        </span>
                                        <h5 className="text-[22px] md:text-[26px] font-bold text-dark-grey-900 mb-[5px] mt-0 md:mt-[15px]">Location</h5>
                                        <div className="text-lg font-medium text-purple-blue-500 max-w-[190px]">{data.address}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

const pages = [
    {
        title: "Contact Us",
        handle: ""
    }
]

const data = {
    email: "info@theabacus.in",
    phone: "+91 9851198555",
    address: "B-70, Phase 7, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055"
}

export default ContactUs;
