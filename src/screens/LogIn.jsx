import { useState } from "react";
import Logo from "../assets/logo.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Column - Branding */}
      <div className="w-[35%] bg-[#1F58A9] flex flex-col items-center justify-center text-white px-12">
        <div className="text-center">
          {/* Logo */}
          <div className="w-[60px] h-[60px] bg-white rounded-[12px] flex items-center justify-center mx-auto mb-6">
            <img src="./logo.svg" alt="" />
          </div>

          {/* Brand Name */}
          <div className="text-[16px] font-semibold tracking-[2px] mb-12">
            KALORIVA
          </div>

          {/* Welcome Message */}
          <div className="space-y-3">
            <h1 className="text-[28px] font-bold leading-tight">
              Welcome back!
            </h1>
            <p className="text-[16px] text-white/90 leading-relaxed max-w-[240px]">
              Let's continue optimizing
              <br />
              your nutrition journey.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="flex-1 bg-[#F8F9FA] flex items-center justify-center px-16">
        <div className="w-full max-w-[320px]">
          <form className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-[13px] text-[#6B7280] font-medium">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[44px] px-4 bg-white border border-[#E5E7EB] rounded-[6px] text-[14px] text-[#374151] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#4A6CF7] focus:border-transparent"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-[13px] text-[#6B7280] font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[44px] px-4 pr-12 bg-white border border-[#E5E7EB] rounded-[6px] text-[14px] text-[#374151] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#4A6CF7] focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280]"
                >
                  {showPassword ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a
                href="#"
                className="text-[13px] text-[#6B7280] hover:text-[#374151]"
              >
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full h-[44px] bg-[#1F58A9] hover:bg-[#3B5CF0] text-white text-[14px] font-medium rounded-[6px] transition-colors duration-200"
            >
              Sign In
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8 space-y-4">
            <div className="text-center text-[13px] text-[#6B7280]">
              Or sign in with
            </div>

            <div className="flex gap-3 justify-center">
              {/* Facebook Button */}
              <button className="w-[40px] h-[40px] bg-white border border-[#E5E7EB] rounded-full flex items-center justify-center hover:bg-[#F9FAFB] transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              {/* Google Button */}
              <button className="w-[40px] h-[40px] bg-white border border-[#E5E7EB] rounded-full flex items-center justify-center hover:bg-[#F9FAFB] transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center text-[13px] text-[#6B7280]">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-[#4A6CF7] hover:text-[#3B5CF0] font-medium"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
