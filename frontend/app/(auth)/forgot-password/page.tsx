'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ForgotPasswordPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

//  useEffect(() => {
//   if (codeSent) {
//     localStorage.setItem('canAccessVerify', 'true');
//     router.push(`/verify?email=${email}`);
//   }
// }, [codeSent]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage({ type: 'error', text: 'Email is required' });
      return;
    }

    setLoading(true);
    try {
      
      await new Promise((res) => setTimeout(res, 1000));

      setMessage({ type: 'success', text: 'Verification code sent.' });

      setTimeout(() => {
        router.push(`/verify?email=${encodeURIComponent(email)}`);
      }, 1200);
    } catch {
      setMessage({ type: 'error', text: 'Failed to send code.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full h-screen bg-white flex md:p-8'>
      <div className='w-full bg-white flex gap-4'>
        <div className='hidden md:flex w-[50%] h-full bg-black items-center justify-center rounded-lg'>
          <Image src="/Ark 2.svg" alt="Ark Logo" width={550} height={280} />
        </div>

        <div className='w-full max-h-full md:w-[50%] pt-8 md:pt-0'>
          <form onSubmit={handleSubmit} className='flex flex-col py-8 px-4 items-center lg:pr-24'>
            <span className="font-bold text-xl md:text-3xl pb-2">Forgot Password</span>
            <span className="text-xs md:text-base text-center">
              Enter your email address and we’ll send you a verification code.
            </span>

            <div className="flex flex-col gap-3 pt-4 px-1 md:pt-8 xl:pt-10 w-full">
              <label htmlFor="forgot-email" className="text-sm font-semibold">Email</label>
              <input
                type="email"
                id="forgot-email"
                placeholder="johndoe@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border p-2 text-sm md:text-base outline-none h-[44px] pl-4"
              />
            </div>

            <div className="pt-4 block w-full px-1">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#2e2e2e] hover:scale-[1.02] transition duration-200 text-white w-full rounded-sm p-3 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Code'}
              </button>
            </div>
          </form>

          <div className="flex justify-center items-center lg:pr-24 md:pl-2">
            <p className="gap-3 text-sm px-1 justify-center">
              Back to <Link href="/login" className="font-semibold text-md">Log In</Link>
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

export default ForgotPasswordPage;
