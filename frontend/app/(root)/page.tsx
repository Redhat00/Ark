'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Marquee from '@/components/Banner';
import Image from 'next/image';
import Link from 'next/link';
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";


const Homepage = () => {
  return (
    <div className="min-h-screen w-full scroll-smooth">
      <section className="relative w-full min-h-screen flex flex-col pt-8 px-6 md:px-12">
        <div className="h-[40px]">
          <Header />
        </div>

        <div className="flex-1 flex flex-col md:flex-row pt-6 md:pt-24 gap-4">
          <div className="flex flex-col w-full md:w-2/4 gap-4">
            <span className="text-6xl/8 text-[#2e2e2e] font-bold leading-tight">
              Ark <br /> Collections
            </span>
            <span className="text-xl pt-4 pb-4">
              Fresh drops, bold fits <br />
              and everyday essentials made for every mood.
            </span>
            <div className="bg-black p-4 w-fit rounded-md pt-4 cursor-pointer">
              <span className="text-white font-semibold">Explore Collection</span>
            </div>
          </div>

          <div className="w-full md:w-2/4 flex py-6 md:py-0 top-0 justify-center">
            <Image src="/45979eh 1.svg" alt="" height={300} width={400} />
          </div>
        </div>

        <Marquee />
      </section>

      <section className="md:h-screen w-full flex flex-col md:flex-row pt-6 md:pt-12 px-6 md:px-12 gap-8">

        <div className="relative group h-full flex items-center justify-center overflow-hidden">
          <Image
            src="/Rectangle 77.svg"
            alt=""
            height={500}
            width={350}
            className="z-0 transition duration-500 delay-200 group-hover:blur-sm group-hover:brightness-75"
          />
          <div className="absolute py-2 px-4 bg-white bottom-32 cursor-pointer rounded-md shadow-md z-10">
            <span className="font-bold">Explore more</span>
          </div>
        </div>

 
        <div className="relative group h-full flex items-center justify-center overflow-hidden">
          <Image
            src="/Rectangle 64.svg"
            alt=""
            height={500}
            width={350}
            className="z-0 transition duration-500 delay-200 group-hover:blur-sm group-hover:brightness-75"
          />
          <div className="absolute py-2 px-4 bg-white bottom-32 cursor-pointer rounded-md shadow-md z-10">
            <span className="font-bold">Explore more</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-8 pt-4 md:pt-9">

          <div className="h-[250px] px-4 flex justify-between bg-[#f1f1f1] rounded-lg overflow-hidden">
            <div className="flex flex-col justify-center w-2/3 pt-4 md:pt-8 leading-6 gap-4">
              <p className="text-3xl">Stylish Corporate</p>
              <p className="text-2xl">wear for Men.</p>
              <div className="py-2 px-4 w-fit bg-transparent border border-black rounded-md cursor-pointer">
                <p>Buy Now</p>
              </div>
            </div>
            <div className="relative h-full w-[190px]">
              <Image
                src="/man1.svg"
                alt="Man in suit"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="h-[250px] px-4 flex justify-between bg-[#f1f1f1] rounded-lg overflow-hidden">
            <div className="flex flex-col justify-center w-2/3 pt-4 md:pt-8 leading-6 gap-4">
              <p className="text-3xl">Stylish Casual</p>
              <p className="text-2xl">fit for Men.</p>
              <div className="py-2 px-4 w-fit bg-transparent border border-black rounded-md cursor-pointer">
                <p>Buy Now</p>
              </div>
            </div>
            <div className="relative h-full w-[190px]">
              <Image
                src="/man2.svg"
                alt="Man in suit"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className='pt-6 md:pt-12 w-full px-6 md:px-12 h-fit snap-y'>
        <div className='flex items-center justify-center pt-6'>
          <span className='font-extrabold text-2xl md:text-4xl '>Explore Our bestsellers</span>
        </div>

        {/* coming back to this later to impement use state */}
        <div className='flex items-center justify-center gap-12 md:gap-16 py-8'>
          <Link href='' className='font-bold text-base md:text-xl'>All</Link>
          <Link href='' className='font-bold text-base md:text-xl'>Women</Link>
          <Link href='' className='font-bold text-base md:text-xl'>Men</Link>
        </div>

        <div className='flex flex-col md:flex-row w-full  gap-4 md:gap-8 relative'>
          <div className='w-full md:w-1/3 flex flex-col gap-3'>
            <div className='w-full h-fit rounded-md'>
              <Image src='/man3.svg' alt='' width={300} height={500} className='w-full h-auto object-contain'/>
            </div>
            <div className='flex justify-between py-2'>
              <div className='flex-col'>
                <span className="text-base font-semibold">Men classic wear</span>
                <div className='font-semibold'>$100</div>
              </div>
              <div className='flex gap-3'>
                <CiHeart className='stroke-1 cursort-pointer' />
                <TiShoppingCart className='cursor-pointer'/>
              </div>
            </div>
          </div>

          <div className='w-full md:w-1/3 flex flex-col gap-3'>
            <div className='w-full h-fit rounded-md'>
              <Image src='/man4.svg' alt='' width={300} height={500} className='w-full h-auto object-contain'/>
            </div>
            <div className='flex justify-between py-2'>
              <div className='flex flex-col'>
                <span className="text-base font-semibold">Black Jacket</span>
                <span className='font-semibold'>$75</span>
              </div>
              <div className='flex gap-3'>
                <CiHeart className='stroke-1 cursor-pointer' />
                <TiShoppingCart className='cursor-pointer'/>
              </div>
            </div>
          </div>

          <div className='w-fulol md:w-1/3 flex flex-col gap-3'>
            <div className='w-full h-fit rounded-md'>
              <Image src='/woman1.svg' alt='' width={300} height={500} className='w-full h-auto object-contain'/>
            </div>
            <div className='flex justify-between py-2'>
              <div className='flex flex-col'>
                <span className="text-base font-semibold">Female Hoodie</span>
                <span className='font-semibold'>$85</span>
              </div>
              <div className='flex gap-3'>
                <CiHeart className='stroke-1 cursor-pointer' />
                <TiShoppingCart className='cursor-pointer'/>
              </div>
            </div>
          </div>

        </div>
    
      </section>

      <section className='pt-6 md:pt-12 w-full px-6 md:px-12 h-fit snap-y'>
        <div className='pt-4'>
          <span className='text-4xl font-bold'>Our Collection</span>

          <div className='flex flex-col md:flex-row py-6 h-fit w-full gap-6'>
            <div className='w-full md:w-1/3 flex flex-col gap-3 '>
              <div className='w-full h-fit rounded-md bg-[#f1f1f1]'>
                <Image src='/cart3.svg' alt='' width={300} height={500} className='w-full h-[500px] object-contain'/>
              </div>
              <div className='flex justify-between py-2'>
                <span className="text-base font-semibold">Ark Satchel</span>
                <span className='font-semibold'>$30</span>
                
              </div>
            </div>

            <div className='w-full md:w-1/3 flex flex-col gap-3 '>
              <div className='w-full h-fit rounded-md bg-[#f1f1f1]'>
                <Image src='/cart2.svg' alt='' width={300} height={500} className='w-full h-[500px] object-contain'/>
              </div>
              <div className='flex justify-between py-2'>
                <span className="text-base font-semibold">Ark Shirt</span>
                <span className='font-semibold'>$45</span>
                
              </div>
            </div>

            <div className='w-full md:w-1/3 flex flex-col gap-3'>
              <div className='w-full h-fit rounded-md bg-[#f1f1f1]'>
                <Image src='/cart1.svg' alt='' width={300} height={500} className='w-full h-[500px] object-contain'/>
              </div>
              <div className='flex justify-between py-2'>
                <span className="text-base font-semibold">Ark Hoodie</span>
                <span className='font-semibold'>$50</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-6 pb-8 md:pb-24 md:pt-12 w-full px-6 md:px-12 h-fit bg-black'>
        <div className='flex flex-col items-center justify-center text-white pt-6 gap-3'>
          <span className='text-4xl md:text-8xl font-bold'>Elevate Your Style </span>
          <p className='text-white text-base py-6 tracking-wider text-center'>Discover Ark&apos;s curated collection of timeless clothing and footwear designed for every mood and moment</p>
        </div>

        <div className='flex items-center justify-center gap-6'>
          <div className='flex py-2 px-4 items-center justify-center bg-white rounded-lg'>
            <Link href=''><span className='text-black'>Shop Now</span></Link>
          </div>
          <div className='flex py-2 px-4 items-center justify-center bg-black border border-white rounded-lg'>
            <Link href=''><span className='text-white'>Explore Now</span></Link>
          </div>

        </div>

        <div className="pt-12 flex flex-col">
          <span className="text-4xl font-bold py-6 text-white">Clothing Collection</span>

          <div className="flex flex-col md:flex-row py-6 gap-8">
            
            <div className="w-full md:w-1/2">
              <Image
                src="/Rectangle 79.svg"
                alt="Shoe Collection"
                width={700}
                height={900}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex flex-col  w-full md:w-1/2 py-8 md:py-24 gap-6">
              <span className="text-white font-medium text-base md:text-lg tracking-wide">
                Crafted with care for every occasion, our clothing blends style, comfort, and individuality.
              </span>

              <Link href="" className="w-fit">
                <div className="flex items-center py-3 px-6 bg-black border border-white rounded-lg hover:bg-white hover:text-black transition">
                  <span className="text-white font-semibold">Explore Product</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col">
          <span className="text-4xl font-bold py-6 text-white w-full justify-right">Shoe Collection</span>

          <div className="flex flex-col md:flex-row py-6 gap-8">

            <div className="flex flex-col  w-full md:w-1/2 py-8 md:py-24 gap-6">
              <span className="text-white font-medium text-base md:text-lg tracking-wide">
                From sleek to sporty, our footwear collection is designed for all-day confidence and ease.
              </span>

              <Link href="" className="w-fit">
                <div className="flex items-center py-3 px-6 bg-black border border-white rounded-lg hover:bg-white hover:text-black transition">
                  <span className="text-white font-semibold">Explore Product</span>
                </div>
              </Link>
            </div>
            
            <div className="w-full md:w-1/2">
              <Image
                src="/Rectangle 80.svg"
                alt="Shoe Collection"
                width={700}
                height={900}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white w-full py-32 px-6 md:px-12 flex items-center text-center rounded-lg">
        <div className='bg-[#2e2e2e] w-full h-full py-16 px-6 md:px-12 flex flex-col items-center text-center rounded-lg'>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 max-w-xl leading-snug">
            Sign up for massive discounts and latest deals!
          </h2>

          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md w-full sm:w-[300px] focus:outline-none text-black"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Homepage;
