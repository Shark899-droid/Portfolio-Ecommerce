import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/logo.png"
import { IoIosLogIn } from 'react-icons/io'
import { IoIosCart } from 'react-icons/io'
export default function Header() {
  return (
    <div className='flex justify-between items-center h-20 bg-[#F9F9F9] px-10'>
      <Image src={logo} alt='logo image' width={70} />
      <div className='flex justify-center items-center space-x-6'>
        <Link href={'/donna'} className='text-[#333]'>
          Donna
        </Link>
        <Link href={'/uomo'} className='text-[#333]'>
          Uomo
        </Link>
        <Link href={'/Saldi'} className='text-[#333]'>
          Saldi
        </Link>
      </div>
      <div className='flex justify-center items-center space-x-6'>
        <IoIosLogIn className='w-8 h-8 cursor-pointer' />

        <div className='absolute w-4 h-4 rounded-full top-4 right-2 bg-red-500 flex justify-center items-center'>
          <span className='font-bold'>3</span>
        </div>
        <IoIosCart className='relative w-8 h-8 cursor-pointer ' />
      </div>
    </div>
  )
}