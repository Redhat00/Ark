'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {useState} from 'react';


const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // Handle actual login logic here
    router.push('/')
  };
  return (
    <>
      <div className='w-full h-screen md:max-h-[700px] bg-white flex md:p-8'>
        <div className='w-full bg-white flex gap-4'>
          <div className='hidden md:flex w-[50%] h-full bg-black items-center justify-center rounded-lg'>
            {/* <div className="w-[500px] h-[280px] bg-green-400 flex items-center justify-center"> */}
              <Image src="/Ark 2.svg" alt="" width={550} height={280} className=""/>
            {/* </div> */}
          </div>

          <div className='w-full max-h-full md:w-[50%] pt-8 md:pt-0'>

          <form onSubmit={handleSubmit} className='flex flex-col py-8 px-4 items-center lg:pr-24 '>
            <span className="font-bold text-xl md:text-3xl pb-2">Welcome Back</span>
            <span className="text-xs md:text-base">Login to your ark account to continue shopping the latest trends.</span>
            
            <div className="flex flex-col gap-3 pt-4 px-1 md:pt-8 xl:pt-10 w-full">
              <label htmlFor="login-Email" className="text-sm font-semibold">Email</label>
              <input type="email" id="login-Email" inputMode="text" placeholder="JohnDoe@gmail.com" required value={email} onChange={(e) => setEmail(e.target.value)}className="rounded-lg border p-2 text-sm md:text-base inset-x-0 outline-none h-[44px] pl-4 text-black-300 cursor-text"/>
              <label htmlFor="login-Passwd" className="text-sm font-semibold">Password</label>
              <input type="password"id="signIn-passwd" placeholder="Enter password" required value={password} onChange={(e) => setPassword((e.target.value)) } className="rounded-lg border p-2 text-sm ring-0 inset-x-0 outline-none h-[44px] pl-4 focus-none  cursor-text"/>
            </div>

            <div className='w-full flex pt-3 items-center justify-between px-1'>
              <div className='flex gap-2 items-center p-2'>
                <input type='checkbox' id='login-Checkbox' className='cursor-pointer'/>
                <span className='text-sm font-semibold'>Remember Me</span>
              </div>

              <Link href="/forgot-password" className="text-sm font-semibold underline hover:text-blue-400">Forgot password?</Link>

            </div>

            <div className="pt-4 block w-full px-1 ">
              <button type="submit" className="bg-[#2e2e2e] items-center justify-center p-3 text-white w-full rounded-sm hover:border-black transition duration-200">Log In</button>
            </div>

            <div className="pt-4 block w-full px-1 ">
              <button type="submit" className="bg-transparent border border-black hover:border-black items-center justify-center p-3 w-full rounded-sm transition duration-200 text-black" onClick={() => router.push('/')}>Continue as guest</button>
            </div>  

          </form>

          <div className="flex justify-center items-center lg:pr-24 md:pl-2">
            <p className="gap-3 text-sm px-1 justify-center">Don&apos;t have an account with us? <Link href="/signup" className="font-semibold text-md">Sign up</Link></p>
          </div>

          </div>

          
        </div>
      </div>
    </>
  )
}

export default LoginPage

