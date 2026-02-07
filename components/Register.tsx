"use client";

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, Lock, User, Briefcase } from 'lucide-react';

const Register: React.FC = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  if (step === 2) {
    return (
      <div className="w-full overflow-hidden">
        <div className="max-w-xl mx-auto py-20 px-6 text-center animate-in zoom-in duration-500">
          <div className="bg-silver p-12 rounded-3xl border border-primary/10 shadow-card">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={48} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-secondary mb-4">Registration Successful!</h2>
            <p className="text-neutralGrey mb-8 text-lg leading-relaxed">
              Welcome to Nexora! We've sent a confirmation email to your address. Please verify your account to start your 14-day free trial.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-primary text-white rounded-md font-bold hover:brightness-105 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
            Start growing your community with <span className="text-primary">Nexora</span>
          </h1>
          <p className="text-neutralGrey text-lg leading-relaxed max-w-lg">
            Join over 2.2M+ organizations around the world using our platform to manage their members, events, and growth.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={16} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-secondary">No Credit Card Required</h4>
                <p className="text-neutralGrey">Start your 14-day free trial immediately without any commitment.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={16} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-secondary">Unlimited Members</h4>
                <p className="text-neutralGrey">Scale your organization without worrying about member limits.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={16} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-secondary">24/7 Expert Support</h4>
                <p className="text-neutralGrey">Our team of specialists is always here to help you succeed.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-card animate-in slide-in-from-right duration-700">
          <h3 className="text-2xl font-bold text-secondary mb-8">Create your account</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutralGrey" size={20} />
              <input
                required
                type="text"
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-4 bg-silver border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutralGrey" size={20} />
              <input
                required
                type="email"
                placeholder="Work Email"
                className="w-full pl-12 pr-4 py-4 bg-silver border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-neutralGrey" size={20} />
              <input
                required
                type="text"
                placeholder="Organization Name"
                className="w-full pl-12 pr-4 py-4 bg-silver border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutralGrey" size={20} />
              <input
                required
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-4 bg-silver border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:brightness-105 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20 hover:shadow-xl flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              Create Account <ArrowRight size={22} />
            </button>

            <p className="text-center text-neutralGrey text-sm">
              By signing up, you agree to our <a href="#" className="text-primary font-medium hover:underline">Terms</a> and <a href="#" className="text-primary font-medium hover:underline">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
