import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'
const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full")
      ref.current.classList.add("translate-x-0")
    }
    else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0")
      ref.current.classList.add("translate-x-full")
    }
  }
  const ref = useRef()
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-between items-center py-2 shadow-md'>
      <div className='logo'>
        <Link href={"/"}><Image width={200} height={40} /></Link>
      </div>
      <div className='nav mx-5'>
        <ul className='flex item-center space-x-6 font-bold md:text-md'>
          <Link href={"/tshirts"}><li>Tshirts</li></Link>
          <Link href={"/hoodies"}><li>Hoodies</li></Link>
          <Link href={"/stickers"}><li>Stickers</li></Link>
          <Link href={"/mugs"}><li>Mugs</li></Link>
        </ul>
      </div>
      <div onClick={toggleCart} className='cart cursor-pointer absolute right-0 top-4 mx-5'>
        <AiOutlineShoppingCart className="text-xl md:text-2xl" />
      </div>
      <div ref={ref} className='w-72 h-full z-10 sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transfrom translate-x-full'>
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-500'><AiFillCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
          <li>
            <div className='item flex my-5'>
              <div className='font-semibold w-2/3 '>Tshirt</div>
              <div className='font-semibold flex item-center justify-center w-1/3 text-lg'><AiFillMinusCircle className='text-pink-500 cursor-pointer' /><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='text-pink-500 cursor-pointer' /></div>
            </div>
          </li>
          <li>
            <div className='item flex my-5'>
              <div className='font-semibold w-2/3 '>Tshirt</div>
              <div className='font-semibold flex item-center justify-center w-1/3 text-lg'><AiFillMinusCircle className='text-pink-500 cursor-pointer' /><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='text-pink-500 cursor-pointer' /></div>
            </div>
          </li>
          <li>
            <div className='item flex my-5'>
              <div className='font-semibold w-2/3 '>Tshirt</div>
              <div className='font-semibold flex item-center justify-center w-1/3 text-lg'><AiFillMinusCircle className='text-pink-500 cursor-pointer' /><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='text-pink-500 cursor-pointer' /></div>
            </div>
          </li>
          <li>
            <div className='item flex my-5'>
              <div className='font-semibold w-2/3 '>Tshirt</div>
              <div className='font-semibold flex item-center justify-center w-1/3 text-lg'><AiFillMinusCircle className='text-pink-500 cursor-pointer' /><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='text-pink-500 cursor-pointer' /></div>
            </div>
          </li>
          <li>
            <div className='item flex my-5'>
              <div className='font-semibold w-2/3 '>Tshirt</div>
              <div className='font-semibold flex item-center justify-center w-1/3 text-lg'><AiFillMinusCircle className='text-pink-500 cursor-pointer' /><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='text-pink-500 cursor-pointer' /></div>
            </div>
          </li>
        </ol>
        <button className="flex mt-16 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1' />Checkout</button>
      </div>
    </div>
  )
}

export default Navbar