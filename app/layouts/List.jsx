import Image from 'next/image'
import React from 'react'
import Plus from '../../public/assets/Plus.svg'
import Card from './Card'

const Todo = ({ heading, NoOfCards }) => {
    return (
        <div className='flex flex-col justify-between text-white mt-5'>
            <div className='flex items-center justify-between px-3 py-5'>
                <div className='text-[20px] font-bold'>
                    {heading}
                </div>
                <div className='rounded-[14px] p-4 bg-[#6418C3;] cursor-pointer'>
                    <Image src={Plus} alt='' />
                </div>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <Card caption="Important" title={"Create sign up sheet for holiday student/parent conferences."} done={96} bcolor="#FFAB2D" />
                <Card caption="Instructor Meeting" title={"Plan holiday demonstration program. Create outline."} done={32} bcolor="#E328AF" />
                <Card caption="Databse" title={"Determine how many boards need to be ordered for testing and demo."} done={20} bcolor="#38E25D" />
            </div>
        </div>
    )
}

export default Todo
