import React from 'react';

const TextInput = ({type="", disabled=false, value={}, onChange=()=>{}, className="", placeholder="", errorText=""}) => {
    return (
        <>
        <input
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type || "text"}
            className={`h-[50px] w-full focus:outline-none hover:border-black border-[#c4c4c4] px-[8px] border focus:border-[#1E40AF] rounded-[5px] focus:shadow-[0_0_2px_#3c62e9] text-[16px] ${className}`}
        />
        {errorText && (
            <span className='text-[#FF0000] text-[12px]'>{errorText}</span>
        )}
        </>
    )
}

export default TextInput;