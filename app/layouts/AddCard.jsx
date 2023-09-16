import React from 'react'
import Image from 'next/image'
import Plus from '../../public/assets/Plus.svg'

const Revised = ({heading}) => {
  return (
    <div className='flex flex-col text-white mt-5'>
        <div className='flex items-center justify-between px-3 py-5'>
            <div className='text-[20px] font-bold'>
                {heading}
            </div>
            <div className='rounded-[14px] p-4 bg-[#6418C3;] cursor-pointer'>
                <Image src={Plus} alt=''/>
            </div> 
        </div>
        <div className="flex flex-col gap-y-4 gap lg:w-[339px] md:w-[327px] w-[280px] bg-[#211A75] p-6 rounded-[14px] text-white">
            <div className="flex items-center  justify-center text-[#7879F1] bg-[#15132B] h-[67px] p-[20px] rounded-[14px] outline-dotted cursor-pointer">
                Move card Here
            </div>
        </div>
    </div>
  )
}

export default Revised
