"use client"

import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
import CheckAuth from './signin/checkAuth';

interface FormData {
  email: string;
  password: string;
}

export default function Signin() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert('Please fill out all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/auth/login', formData);
      // const response = await CheckAuth(formData.email,formData.password)

      console.log(response.data);
      
      if(response){
        localStorage.setItem('email',response.data.email)
        toast.success('Sign in successful');
        router.push('/')
      }
      // router.push('/dashboard');
    } catch (error) {
      console.error('Error signing in:', error);
      toast.error('Sign in failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-[674px] flex items-center justify-center bg-green-0 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {/* <Toaster /> */}
          <h2 className="-mt-10 text-center text-3xl font-extrabold text-green-800">Sign In</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" name="email" type="text" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Email address" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Password" value={formData.password} onChange={handleChange} />
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-none text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-2">
          <button onClick={() => window.location.href = '/signup'} className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-green-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
  
}
