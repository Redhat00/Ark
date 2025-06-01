'use client';

import {  useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const VerifyPage = () => {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const email = searchParams.get('email') || '';

  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const allowed = localStorage.getItem('canAccessVerify');
    if (allowed !== 'true') {
      router.replace('/forgot-password'); // redirect if accessed directly
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 6) {
      setMessage('Please enter a 6-digit code.');
      return;
    }

    localStorage.removeItem('canAccessVerify'); // remove access after use
    setMessage('Code verified!');
    setTimeout(() => {
      router.push('/reset-password');
    }, 1000);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md shadow-md border rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Enter Verification Code</h2>
        <p className="text-sm mb-6 text-gray-600">
          A code has been sent to <span className="font-medium">your email</span>
        </p>
        <button
            onClick={() => router.back()}
            type="button"
            className="text-sm text-gray-600 underline hover:text-black mb-4">
            ← Back
        </button>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength={6}
            placeholder="Enter 6-digit code"
            className="border rounded-md p-3 text-lg tracking-widest text-center"
          />
          <button
            type="submit"
            className="bg-black text-white p-3 rounded-md hover:scale-[1.02] transition"
          >
            Verify
          </button>
        </form>

        {message && <div className="mt-4 text-sm text-center text-green-600">{message}</div>}
      </div>
    </div>
  );
};

export default VerifyPage;
