import * as React from 'react';
import { useLocation } from 'react-use';
import { Link, navigate } from 'gatsby';
import { IoMenu } from "react-icons/io5";
import { MdOutlineExpandLess, MdOutlineExpandMore  } from "react-icons/md";
import { StaticImage } from 'gatsby-plugin-image';

const MenuDrawer = ({ navLinks }) => {
    const pathname = useLocation().pathname;
    const [state, setState] = React.useState(false);
    const [toggleDropdown, setToggleDropdown] = React.useState(false);

    React.useEffect(() => {
        document.body.classList.toggle('overflow_hidden_body', state);
    
        return () => {
            document.body.classList.remove('overflow-visible');
        };
    },[state]);  

    return (
        <React.Fragment key={'left'}>
            <button onClick={() => setState(prev => !prev)} aria-label='Menu'>
                <IoMenu size="30px" color='#fff' />
            </button>
            <div 
                className={`fixed h-screen top-0 left-0 w-full overflow-y-none z-[9999999] duration-700 ${state ? "left-0 overflow-visible duration-700" : " left-[-100%] overflow-hidden duration-700"}`} 
                onClick={() => setState(false)}
                onKeyDown={() => setState(false)}
                role='button'
                tabIndex={0}
            >
                <div 
                    className={`max-w-[280px] h-full bg-white w-full overflow-y-auto flex flex-col justify-between drawer-menu duration-700 ${state ? "open" : ""}`} 
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    role="menu"
                    tabIndex={0}
                >
                    <div>
                        <div className='p-[16px] border-b-[1px] border-[#ddd]'>
                            <Link to="/" aria-label='The Abacus'>
                                <StaticImage 
                                    src="../../images/logo.png"
                                    alt='logo' 
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                        <div>
                            {navLinks.map((item, index) => (
                                <div key={index}>
                                    <Link 
                                        to={item.handle} 
                                        onClick={() => {
                                            if (item.handle !== "/cloud-based-services"){
                                                setState(false)
                                            }
                                        }}
                                        aria-label={item.title} 
                                        className={`flex justify-between items-center px-[20px] py-[10px] border-solid border-b border-[#ddd] last:border-none hover:bg-[#aaa] ${pathname === item.handle && "bg-[#000244] text-white border-none"}`}
                                    >
                                        <div className='text-[14px]'>{item.title}</div>
                                        {item.subLinks && (
                                            <button 
                                                onClick={() => setToggleDropdown(prev => !prev)} 
                                                aria-label='services'
                                            >
                                                {toggleDropdown ? <MdOutlineExpandLess color='#000' size="25px"/> : <MdOutlineExpandMore color='#000' size="25px"/>}
                                            </button>
                                        )}
                                    </Link>
                                    {item.subLinks && (
                                        <div className={`grid ${toggleDropdown ? "grid": "hidden"}`}>
                                            {item.subLinks.map((item, i) => (
                                                <button 
                                                    key={i}
                                                    aria-label='service'
                                                    onClick={() => {
                                                        setState(false);
                                                        navigate(`/service/${item.handle}`)
                                                    }}
                                                    className='border-solid border-b text-left text-[14px] px-[20px] py-[10px] bg-[#010467] text-white border-[#ffffff29] last:border-none'
                                                >{item.title}</button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='p-[20px] grid gap-[15px] mb-[80px]'>
                        <a href="https://www.abacuscloud.in/" aria-label='Login' className='duration-500 text-[#000244] hover:text-[#fff] text-[14px] font-bold border-[1px] border-[#2E2F5C] hover:border-[#2E2F5C] hover:!bg-[#000244] !w-full flex justify-center items-center h-[50px]' style={{ border: '1px solid' }}>
                            <span>Login</span>
                        </a>
                        <a href="https://abacuscloud.in/register" aria-label='Register' className='duration-500 bg-[#000244] hover:bg-[#020573] text-white text-[14px] font-bold h-[50px] w-full flex justify-center items-center'>
                            <span>Register</span>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MenuDrawer;