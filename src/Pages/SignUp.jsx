import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function GoogleLog() {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log('User Info:', decoded);
    localStorage.setItem('user', JSON.stringify(decoded));
    navigate('/');
  };

  const handleError = () => {
    console.error('Login Failed');
  };

  return (
    <div className=" flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <Navigation />
      <main className="flex-grow flex items-center justify-center min-h-screen">
        <section className="bg-white flex flex-col rounded-lg shadow-lg p-8 max-w-md w-full text-center items-center justify-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Sign in with Google</h1>
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
          <p className="mt-6 text-gray-600">
            By signing in, you agree to our{' '}
            <a href="/terms" className="text-indigo-600 underline hover:text-indigo-800">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-indigo-600 underline hover:text-indigo-800">
              Privacy Policy
            </a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
