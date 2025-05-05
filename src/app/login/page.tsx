"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      setEmailError("Email wajib diisi.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value: string) => {
    if (!value.trim()) {
      setPasswordError("Password wajib diisi.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    validateEmail(email);
    validatePassword(password);

    if (!email.trim() || !password.trim()) {
      setSubmitError("Mohon isi semua kolom.");
      return;
    }

    if (email === "admin@gmail.com" && password === "admin123") {
      setSubmitError("");
      router.push("/admin");
    } else {
      setSubmitError("Email atau password salah.");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              "url(https://storage.googleapis.com/danacita-website-v3-prd/website_v3/images/DSC05909_1.original.jpg)",
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Politeknik Harapan Bersama</h2>
              <p className="max-w-xl mt-3 text-gray-300">
                Tempat lahirnya talenta vokasi unggulan - siap kerja, berkarya, siap memimpin masa depan.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <img
                  className="mx-auto h-50 w-50 object-contain"
                  src="/logo_phb.png"
                  alt="PHB Logo"
                  width={150}
                  height={150}
                />
              </div>
              <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border 
                      border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 
                      dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 
                      focus:outline-none focus:ring focus:ring-opacity-40"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmail(e.target.value);
                    }}
                  />
                  {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border 
                      border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 
                      dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 
                      focus:outline-none focus:ring focus:ring-opacity-40"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      validatePassword(e.target.value);
                    }}
                  />
                  {passwordError && <p className="mt-1 text-sm text-red-500">{passwordError}</p>}
                </div>

                {submitError && (
                  <p className="mt-4 text-sm text-center text-red-600">{submitError}</p>
                )}

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 
                      transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 
                      focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Don&apos;t have an account yet?{" "}
                <a
                  href="/register"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
