'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaGoogle, FaApple, FaFacebookF } from 'react-icons/fa';

const SignUpPage = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      setMessage({ type: 'error', text: 'All fields are required.' });
      return;
    }

    setMessage({ type: 'success', text: 'Signed up successfully!' });

    setTimeout(() => {
      setMessage(null);
      router.push('/home');
    }, 1500);
  };

  return (
    <div className='w-full h-screen md:max-h-[700px] bg-white flex md:p-8'>
      <div className='w-full bg-white flex gap-4'>
        
        <div className='hidden md:flex w-[50%] h-full bg-black items-center justify-center rounded-lg'>
          <Image src="/Ark 2.svg" alt="Ark Logo" width={550} height={280} />
        </div>

        
        <div className='w-full max-h-full md:w-[50%] pt-8 md:pt-0'>
          <form onSubmit={handleSubmit} className='flex flex-col py-6 px-4 items-center lg:pr-24'>
            <span className="font-bold text-xl md:text-3xl pb-2">Create an account</span>
            <span className="text-xs md:text-base text-center">
              Sign up to start your journey with ARK.
            </span>

            <div className="flex flex-col gap-3 pt-4 px-1 md:pt-8 xl:pt-10 w-full">
              <label htmlFor="signup-name" className="text-sm font-semibold">Full Name</label>
              <input
                type="text"
                id="signup-name"
                placeholder="John Doe"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="rounded-lg border p-2 text-sm md:text-base outline-none h-[44px] pl-4"
              />

              <label htmlFor="signup-email" className="text-sm font-semibold">Email</label>
              <input
                type="email"
                id="signup-email"
                placeholder="johndoe@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border p-2 text-sm md:text-base outline-none h-[44px] pl-4"
              />

              <label htmlFor="signup-password" className="text-sm font-semibold">Password</label>
              <input
                type="password"
                id="signup-password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-lg border p-2 text-sm outline-none h-[44px] pl-4"
              />
            </div>

            <div className="pt-4 block w-full px-1">
              <button
                type="submit"
                className="bg-[#2e2e2e] items-center justify-center p-3 text-white w-full rounded-sm"
              >
                Sign Up
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm pt-6 w-full">
              <hr className="flex-grow border-gray-300" />
              <span>or continue with</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="grid grid-cols-3 gap-3 mt-4 w-full px-1">
              <button type="button" className="border p-3 rounded-sm flex items-center justify-center hover:bg-gray-100">
                <FaGoogle />
              </button>
              <button type="button" className="border p-3 rounded-sm flex items-center justify-center hover:bg-gray-100">
                <FaApple />
              </button>
              <button type="button" className="border p-3 rounded-sm flex items-center justify-center hover:bg-gray-100">
                <FaFacebookF />
              </button>
            </div>
          </form>

          <div className="flex justify-center items-center lg:pr-24 md:pl-2">
            <p className="gap-3 text-sm px-1 justify-center">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-md">Log In</Link>
            </p>
          </div>
        </div>
      </div>

      
      {message && (
        <div className={`fixed top-6 right-6 px-4 py-2 rounded-md text-white shadow-md transition-all duration-300
          ${message.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          {message.text}
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
