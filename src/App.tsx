/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real app, you'd send this to your backend
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full space-y-8"
      >
        {/* Logo Icon */}
        <div className="flex justify-center mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-20 h-20 bg-brand-gradient rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-200/50"
          >
            <Mail className="text-white w-10 h-10" />
          </motion.div>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0f172a]">
            Something Amazing
          </h1>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-gradient">
            Is Coming Soon
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          We're crafting an exceptional experience just for you. Join our
          waitlist to be the first to know when we launch.
        </p>

        {/* Waitlist Form */}
        <div className="pt-8 max-w-xl mx-auto w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-2 rounded-3xl shadow-xl shadow-cyan-100/50 flex flex-col md:flex-row gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-cyan-100 transition-all"
            />
            <button
              type="submit"
              className="bg-brand-gradient text-white font-bold py-4 px-8 rounded-2xl text-lg hover:opacity-90 transition-opacity shadow-md active:scale-95"
            >
              {isSubmitted ? 'Thank You!' : 'Notify Me'}
            </button>
          </form>
          
          {/* Footer Text */}
          <p className="mt-6 text-sm text-slate-400">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </motion.div>

      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
