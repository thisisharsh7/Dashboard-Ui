'use client';

import Arrow from '../../public/assets/arrow.svg'
import Sicon from '../../public/assets/search 2.svg'
import Profile from '../../public/assets/profilePicture.svg'
import Flag from '../../public/assets/united-states 1.svg'
import Hamburger from '../../public/assets/hamburgermenu.svg'
import Image from 'next/image'
import Notify from '../layouts/Notify'
import { useContext } from 'react';
import { GlobalInfo } from '../page';



export default function Header() {
    const { sliderRef } = useContext(GlobalInfo);
    const ShowMenu = () => {
        sliderRef.current.classList.toggle('-translate-x-full')
    }
    return (
        <nav className='bg-[#1E1C3A]  py-[24px] 3xl:px-[48px] xl:px-[20px] pl-[5px] pr-[10px] lg:py-[22px] sm:px-[14px] px-[8px]'>
            <div className='flex  justify-between 3xl:text-[10px]  lg:text-[9.5px] text-[8.5px] items-center 3xl:gap-[7.9em] xl:gap-[6em] sm:gap-[2.5em]'>
                <div className='lg:hidden flex items-center sm:gap-[10px] gap-[4px]'>
                    <button className='lg:hidden flex sm:w-[6em] w-[5.5em]' onClick={ShowMenu} >
                        <Image src={Hamburger} alt="" className='w-full' />
                    </button>
                    <p className='sm:hidden flex text-[18px] text-white'>weframetech</p>
                </div>
                <div className='sm:flex bg-[#211A75] gap-[20px] flex-1 items-center 3xl:px-[38px] px-[28px] lg:py-[20px] self-stretch  rounded-[46px] hidden border-[#464999] border-[1px]'>
                    <button className=' 3xl:w-[2.8em] w-[2.4em]'>
                        <Image src={Sicon} alt="" className='w-full' />
                    </button>
                    <input type="text" placeholder="Search here" className='bg-transparent 3xl:text-[1.6em] text-[1.4em] outline-none text-[#AAAAAA]' />
                </div>





                <div className="flex 3xl:gap-[6em] xl:gap-[4em]  self-stretch">

                    <div className='flex items-center 3xl:gap-[5.4em] self-center'>
                        <button className='3xl:flex hidden text-[#6418C3] text-[1.6em] font-bold underline truncate '>
                            OTHER MENUS
                        </button>
                        <div className='xl:flex hidden '>
                            <Notify />
                        </div>
                    </div>


                    <div className='flex gap-[3em] items-center'>
                        <div className='sm:flex   hidden items-center bg-[#211A75] rounded-[46px] 3xl:px-[20px] px-[12px] self-stretch   gap-[14px] text-white text-[1.6em] '>
                            <button className='lg:w-[2em] w-[1.8em]'>
                                <Image src={Flag} alt="" className='w-full' />
                            </button>
                            <p>English</p>
                            <button className='3xl:w-[1.2em] w-[1em]'>
                                <Image src={Arrow} alt="" className='w-full' />
                            </button>
                        </div>
                        <div className='flex items-center justify-center lg:gap-[24px] sm:gap-[12px] gap-[8px] '>
                            <div className='lg:w-[5.7em] border-l-[1px]  sm:pl-[3em] pl-[1.5em]  sm:w-[4.5em] lg:mr-2 sm:mr-5 mr-2 border-[#36346b]'>
                                <Image src={Profile} alt="" className='max-w-[4em]' />
                            </div>
                            <div className=' flex flex-col '>
                                <p className='sm:truncate sm:text-[1.6em] text-[1.4em] text-white font-bold'>Instructor Day</p>
                                <p className='text-[#7879F1] text-[1.4em] font-normal'>Super Admin</p>
                            </div>
                            <button>
                                <Image src={Arrow} alt="" />
                            </button>
                        </div>
                    </div>

                </div>



            </div>
        </nav>
    )
}