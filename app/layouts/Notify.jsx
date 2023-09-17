import Bell from '../../public/assets/bell 1.svg'
import Checker from '../../public/assets/checkbox (1) 1.svg'
import Office from '../../public/assets/office 1.svg'
import Lessons from '../../public/assets/Video Lesson 2 2.svg'


import Image from 'next/image'


const style = 'absolute w-[26px] h-[26px] flex items-center justify-center   z-10  -translate-y-[9px] translate-x-2/4 text-[#0D0B21] whitespace-nowrap rounded-full bg-[#5ECFFF] text-sm font-bold leading-none'
export default function Notify() {
    return (


        <ul className='flex w-full justify-between xl:gap-[4em] '>
            <li className='relative'>
                <div
                    className={style}>
                    12
                </div>
                <button className='w-[2.8em]'>
                    <Image className='w-full' src={Bell} alt="" />
                </button>
            </li>
            <li className='relative'>
                <div
                    className={style}>
                    5
                </div>
                <button className='w-[2.8em]'>
                    <Image className='w-full' src={Lessons} alt="" />
                </button>
            </li>
            <li className='relative'>
                <div
                    className={style}>
                    2
                </div>
                <button className='w-[2.8em]'>
                    <Image className='w-full' src={Checker} alt="" />
                </button>
            </li>
            <li className='relative'>
                <div
                    className="absolute w-[26px] h-[26px] flex items-center justify-center   z-10  -translate-y-[9px] translate-x-2/4 text-[#0D0B21] whitespace-nowrap rounded-full bg-[#E328AF] text-sm font-bold leading-none border-[#15132B] border-[3px]">
                    !
                </div>
                <button className='w-[2.8em]'>
                    <Image className='w-full' src={Office} alt="" />
                </button>
            </li>
        </ul>
    )
}