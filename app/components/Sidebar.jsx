'use client';
import Image from 'next/image'
import Hamburger from '../../public/assets/hamburgermenu.svg'
import Dashboard from '../../public/assets/dashboard.svg'
import Sicon from '../../public/assets/search 2.svg'
import Email from '../../public/assets/email.svg'
import DArrow from '../../public/assets/darrow.svg'
import RArrow from '../../public/assets/rarrow.svg'
import Chat from '../../public/assets/comment.svg'
import Contact from '../../public/assets/contact.svg'
import Calendar from '../../public/assets/shop.svg'
import Shop from '../../public/assets/shop.svg'
import Invoices from '../../public/assets/invoice.svg'
import Settings from '../../public/assets/setting.svg'
import Thumbnail from '../../public/assets/thumbnail.svg'
import Courses from '../../public/assets/Video Lesson 2 2.svg'
import { useContext, useRef } from 'react';
import { GlobalInfo } from '../page';
import Karrow from '../../public/assets/Vector (1).svg';
import Kdots from '../../public/assets/Vector.svg';
import Mask from '../../public/assets/mask.svg';
import Notify from '../layouts/Notify';


export default function Sidebar() {
    const { sliderRef } = useContext(GlobalInfo);
    const handleHide = () => {
        sliderRef.current.classList.toggle('-translate-x-full', 'absolute')
    }
    return (
        <div className='bg-[#15132B] z-[60] lg:relative lg:overflow-y-visible lg:translate-x-0  transition-all duration-500 sm:max-w-[345px] lg:flex flex-col 2xl:text-[10px] xl:text-[8px] text-[7px] -translate-x-full fixed top-0 bottom-0 right-0 left-0 overflow-y-scroll pb-8' ref={sliderRef}>
            <div className='flex items-center justify-between md:py-[48px] py-[38px] text-[2.4em] gap-[4px] 2xl:pl-[3.15em] xl:pl-[2.8em] pl-[2.4em] pr-[1.38em]'>
                <h1 className=' text-[#FFFFFF] pr-[2em]'>weframetech</h1>
                <button className='w-[2.03em]'>
                    <Image src={Hamburger} alt="" className='w-full' onClick={handleHide} />
                </button>
            </div>
            <div className='  xl:pl-[2.4em] pl-[1.8em] pr-[30px]'>
                <div className='sm:hidden flex bg-[#211A75] gap-[20px] flex-1 items-center 3xl:px-[38px] px-[28px] mb-5 self-stretch  rounded-[46px] justify-center py-[10px] border-[#464999] border-[1px] '>
                    <button className=' 3xl:w-[2.8em] w-[2.4em]'>
                        <Image src={Sicon} alt="" className='w-full' />
                    </button>
                    <input type="text" placeholder="Search here" className='bg-transparent 3xl:text-[1.6em] flex-1 text-[2em] outline-none text-[#AAAAAA]' />
                </div>
            </div>
            <div className='xl:hidden flex items-center justify-center py-[10px] pb-[25px]  xl:pl-[2.4em] pl-[3em] pr-[44px]'>
                <Notify />
            </div>
            <div className='py-[12px]'>
                <h2 className='text-[#C7C7C7]  pb-[25px] text-[1.65em] font-bold 2x:pl-[3.125em] xl:pl-[2.4em] sm:pl-[1.8em] pl-[30px] flex'>MAIN MENU</h2>
                <ul className='text-[1.8em] flex flex-col gap-[14px] font-semibold text-[#464366]'>
                    <li className='2xl:pl-[2.7em] xl:pl-[2em] sm:pl-[1.4em] pl-[28px] pr-[2.5em]'>
                        <div className='flex gap-[1.45em] items-center py-[11px]'>
                            <button>
                                <Image src={Dashboard} alt="" />
                            </button>
                            <p>Dashboard</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center 2xl:pl-[2.7em] xl:pl-[2em] sm:pl-[1.4em] pl-[28px] pr-[2.5em]'>
                        <div className='flex gap-[1.45em] items-center  py-[11px]'>
                            <button>
                                <Image src={Email} alt="" />
                            </button>
                            <p>Email</p>
                        </div>
                        <div className='flex items-center gap-[14px]'>
                            <div className='xl:text-[0.8em] text-[0.7em]  xl:w-[2em] w-[1.9em] h-[1.9em] xl:h-[2em] flex items-center justify-center text-white rounded-full bg-[#5ECFFF] '>17</div>
                            <button>
                                <Image src={DArrow} alt="" />
                            </button>
                        </div>
                    </li>
                    <li className='2xl:pl-[2.7em] xl:pl-[2em] sm:pl-[1.4em] pl-[28px] pr-[2.5em]'>
                        <div className='flex gap-[1.45em] py-[11px] text-[#7879F1] items-center'>
                            <button>
                                <Image src={Chat} alt="" />
                            </button>
                            <p>Chat</p>
                        </div>
                    </li>
                    <li className='flex justify-between 2xl:pl-[2.7em] xl:pl-[2em] sm:pl-[1.4em] pl-[28px] pr-[2.5em] items-center border-r-[6px]  border-[#6418C3]'>
                        <div className='flex gap-[1.45em] text-[#6418C3] items-center  py-[11px] '>
                            <button className='text-[#6418C3]'>
                                <Image src={Thumbnail} alt="" />
                            </button>
                            <p>Kanban</p>
                        </div>
                        <div className='flex items-center'>
                            <button>
                                <Image src={RArrow} alt="" />
                            </button>
                        </div>
                    </li>
                    <li className='2xl:pl-[2.7em] xl:pl-[2em] sm:pl-[1.4em] pl-[28px] pr-[2.5em] flex justify-between items-center '>
                        <div className='flex gap-[1.45em] items-center text-[#7879F1] py-[11px]'>
                            <button>
                                <Image src={Contact} alt="" />
                            </button>
                            <p>Contact</p>
                        </div>
                        <div className='flex items-center justify-center text-white rounded-[30px] bg-[#E328AF] text-[0.7em] px-[0.75em] py-[0.4em]'>
                            NEW
                        </div>
                    </li>
                    <li className='2xl:pl-[2.7em] xl:pl-[2em] sm:pl-[1.4em] pl-[28px] pr-[2.5em]'>
                        <div className='flex gap-[1.45em] items-center text-[#7879F1]  py-[11px]'>
                            <button>
                                <Image src={Calendar} alt="" />
                            </button>
                            <p>Calender</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center 2xl:pl-[2.7em] xl:pl-[2em] sm:pl-[1.4em] pl-[28px] pr-[2.5em] '>
                        <div className='flex gap-[1.45em] items-center text-[#7879F1] text- py-[11px] '>
                            <button >
                                <Image src={Courses} alt="" />
                            </button>
                            <p>Courses</p>
                        </div>
                        <div className='flex items-center'>
                            <button>
                                <Image src={RArrow} alt="" />
                            </button>
                        </div>
                    </li>
                    <li className='2xl:pl-[2.7em] xl:pl-[2em] sm:pl-[1.4em] pl-[28px] pr-[2.5em]'>
                        <div className='flex items-center text-[#7879F1] gap-[1.45em]  py-[11px]'>
                            <button>
                                <Image src={Shop} alt="" />
                            </button>
                            <p>Shop</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center 2xl:pl-[2.7em] xl:pl-[2em] sm:pl-[1.4em] pl-[28px] pr-[2.5em] '>
                        <div className='flex gap-[1.45em] items-center text-[#7879F1]   py-[11px] '>
                            <button >
                                <Image src={Invoices} alt="" />
                            </button>
                            <p>Invoices</p>
                        </div>
                        <div className='flex items-center'>
                            <button>
                                <Image src={RArrow} alt="" />
                            </button>
                        </div>
                    </li>
                    <li className='2xl:pl-[2.7em] xl:pl-[2em] sm:pl-[1.4em] pl-[28px] pr-[2.5em]'>
                        <div className='flex items-center text-[#7879F1] gap-[1.45em]  py-[11px]'>
                            <button>
                                <Image src={Settings} alt="" />
                            </button>
                            <p>Settings</p>
                        </div>
                    </li>
                </ul>
                <div className=' 2xl:pl-[2.7em] xl:pl-[2em] sm:pl-[1.4em] pl-[28px] sm:pr-[2.5em] pr-[28px] mt-[117px] xl:max-w-none md;:max-w-[245px]'>
                    <div className='flex flex-col gap-[15px] p-[21px] bg-gradient-to-r from-[#A0F9FF82] xl:text-[24px] md:text-[18px] text-[17px]   to-[#A0F9FF33] rounded-[32px] py-[33px] pb-[40px] relative'>
                        <div className='flex flex-col gap-[5px] font-bold text-white'>
                            <div>
                                <Image src={Kdots} alt="" />
                            </div>
                            <p>
                                Increase your work with kanban
                            </p>
                        </div>
                        <button>
                            <Image src={Karrow} alt="" />
                        </button>
                        <div className='absolute bottom-0 right-0'>
                            <Image src={Mask} alt="" className='w-full' />
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}