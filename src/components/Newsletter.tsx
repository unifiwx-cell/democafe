import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

interface NewsletterProps {
  onSubscribeSuccess: (email: string) => void;
}

export const Newsletter: React.FC<NewsletterProps> = ({ onSubscribeSuccess }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      onSubscribeSuccess(trimmed);
    }, 500);
  };

  return (
    <section className="py-20 sm:py-24 px-6 sm:px-8 bg-[#F5EADF]/60 border-y border-[#E8D6C4]/80 relative">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center p-3 rounded-full bg-[#FFF9F2] text-[#A66B45] mb-4 border border-[#E8D6C4]"
        >
          <Mail className="w-5 h-5" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#29211D] font-normal tracking-tight text-balance"
        >
          A Little Something in Your Inbox
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-3 text-base text-[#29211D]/75 max-w-lg mx-auto leading-relaxed"
        >
          Get updates on seasonal specials, new favorites, and what's brewing at our café. No spam, ever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-md mx-auto"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-[#FFF9F2] p-5 rounded-xl border border-[#A66B45]/40 text-center shadow-xs"
              >
                <div className="flex items-center justify-center gap-2 text-emerald-800 font-medium mb-1">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Welcome to the Table</span>
                </div>
                <p className="text-xs text-[#29211D]/80">
                  We've sent a welcome note to <strong>{email}</strong>. Enjoy 15% off your next pour-over or viennoiserie order!
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setEmail('');
                  }}
                  className="mt-3 text-xs text-[#A66B45] hover:underline"
                >
                  Register another email
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-[#FFF9F2] text-[#29211D] placeholder-[#29211D]/45 text-sm rounded-md border border-[#E8D6C4] focus:outline-none focus:border-[#4A2C20] transition-colors"
                    aria-label="Email Address for newsletter"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#FFF9F2] bg-[#4A2C20] hover:bg-[#382016] active:scale-[0.98] rounded-md transition-all shadow-xs whitespace-nowrap shrink-0 disabled:opacity-70"
                >
                  <span>{status === 'loading' ? 'Joining...' : 'Subscribe'}</span>
                  <ArrowRight className="w-4 h-4 text-[#E8D6C4]" />
                </button>
              </form>
            )}
          </AnimatePresence>

          {status === 'error' && (
            <p className="mt-2 text-xs text-rose-700 font-medium text-left">
              {errorMessage}
            </p>
          )}

          <p className="mt-3 text-[11px] text-[#29211D]/55">
            By subscribing, you agree to receive our occasional seasonal dispatches.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
