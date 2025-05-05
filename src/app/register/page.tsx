"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";

const signUpSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email"),
  profilePhoto: z.instanceof(File, { message: "Profile photo is required" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignUpData = z.infer<typeof signUpSchema>;

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<Partial<SignUpData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof SignUpData, string>>>({});
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (field: keyof SignUpData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleChange("profilePhoto", file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validated = signUpSchema.parse(formData);
      console.log("Validated Data:", validated);

      // Simulasi request backend 

      // Setelah sukses, redirect ke halaman login
      router.push("/login");
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: typeof errors = {};
        err.errors.forEach((error) => {
          const field = error.path[0] as keyof SignUpData;
          fieldErrors[field] = error.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSubmit} noValidate>
          <div className="flex justify-center mx-auto">
            <img
              className="mx-auto h-50 w-50 object-contain"
              src="/logo_phb.png"
              alt="PHB Logo"
              width={150}
              height={150}
            />
          </div>

          <div className="flex items-center justify-center mt-6">
            <a
              href="/login"
              className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
            >
              sign in
            </a>
            <a
              href="#"
              className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
            >
              sign up
            </a>
          </div>

          {/* Username */}
          <div className="relative flex items-center mt-8">
            <input
              type="text"
              value={formData.username || ""}
              onChange={(e) => handleChange("username", e.target.value)}
              className="block w-full py-3 px-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Username"
            />
          </div>
          {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}

          {/* Profile Photo */}
          <label
            htmlFor="dropzone-file"
            className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
          >
            <h2 className="mx-3 text-gray-400">Upload Profile Photo</h2>
            <input id="dropzone-file" type="file" onChange={handleFileChange} className="hidden" />
          </label>
          {errors.profilePhoto && <p className="text-sm text-red-500">{errors.profilePhoto}</p>}

          {/* Preview */}
          {previewUrl && (
            <div className="flex justify-center mt-4">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-24 h-24 object-cover rounded-full border border-gray-300"
              />
            </div>
          )}

          {/* Email */}
          <div className="relative flex items-center mt-6">
            <input
              type="email"
              value={formData.email || ""}
              onChange={(e) => handleChange("email", e.target.value)}
              className="block w-full py-3 px-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Email address"
            />
          </div>
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

          {/* Password */}
          <div className="relative flex items-center mt-4">
            <input
              type="password"
              value={formData.password || ""}
              onChange={(e) => handleChange("password", e.target.value)}
              className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Password"
            />
          </div>
          {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}

          {/* Confirm Password */}
          <div className="relative flex items-center mt-4">
            <input
              type="password"
              value={formData.confirmPassword || ""}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Confirm Password"
            />
          </div>
          {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Sign Up
            </button>

            <div className="mt-6 text-center">
              <a href="/login" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                Already have an account?
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
