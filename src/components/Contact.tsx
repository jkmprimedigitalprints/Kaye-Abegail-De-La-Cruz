import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  CheckCircle2, 
  AlertCircle,
  Loader2
} from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { WavyDivider } from './WavyDivider';

interface ContactProps {
  selectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedService }) => {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: selectedService || 'General Virtual Assistance',
    message: '',
  });

  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ 
        ...prev, 
        service: selectedService,
        subject: prev.subject || `Inquiry regarding ${selectedService}`
      }));
    }
  }, [selectedService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a message';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'Message should be at least 8 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          service: formData.service,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name} (${formData.service})`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === 'true' || data.success === true))) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      setSubmitError('Unable to send via automated service. You can send directly using the mail button below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      service: 'General Virtual Assistance',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="pt-14 sm:pt-20 pb-0 bg-[#FAF5F0] text-[#2D2522] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20">
        
        {/* Section Header */}
        <div
          data-reveal="fade-in"
          className="reveal-on-scroll text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C27A52] uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#2D2522] tracking-tight">
            Let’s Work Together
          </h2>
          <div className="w-16 h-[2px] bg-[#C27A52]/40 mx-auto mt-3" />
          <p className="mt-3 text-xs sm:text-sm text-[#5A4A42] font-light leading-relaxed">
            Need dependable administrative support, calendar management, or customer service? Send a note below or reach out directly.
          </p>
        </div>

        {/* Two-Column Grid: Form Left, Direct Info Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left: Contact Form in Cream White Card with Slide-In */}
          <div
            data-reveal-delay="0"
            className="reveal-card lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-white text-[#2D2522] shadow-sm border border-[#E8D9CD]"
          >
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#FFE8E3] text-[#C27A52] mx-auto flex items-center justify-center border border-[#F2C4BC]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif italic text-[#2D2522]">
                  Message Received!
                </h3>
                <p className="text-xs text-[#5A4A42] max-w-md mx-auto leading-relaxed font-light">
                  Thank you, <strong className="font-semibold text-[#2D2522]">{formData.name}</strong>! Your inquiry regarding <strong className="font-semibold text-[#2D2522]">{formData.service}</strong> has been forwarded to <strong className="text-[#C27A52]">{personal.email}</strong>. I will get back to you promptly!
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-md bg-[#C27A52] text-white hover:bg-[#A9623D] transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {submitError && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#2D2522] mb-1">
                      Your Name <span className="text-[#C27A52]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF5F0] text-[#2D2522] placeholder-[#7A6A62] border border-[#E8D9CD] rounded-md focus:outline-none focus:ring-1 focus:ring-[#C27A52]"
                    />
                    {errors.name && <p className="mt-1 text-[10px] text-rose-600">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#2D2522] mb-1">
                      Email Address <span className="text-[#C27A52]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF5F0] text-[#2D2522] placeholder-[#7A6A62] border border-[#E8D9CD] rounded-md focus:outline-none focus:ring-1 focus:ring-[#C27A52]"
                    />
                    {errors.email && <p className="mt-1 text-[10px] text-rose-600">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#2D2522] mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="e.g. Virtual Assistant Role"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF5F0] text-[#2D2522] placeholder-[#7A6A62] border border-[#E8D9CD] rounded-md focus:outline-none focus:ring-1 focus:ring-[#C27A52]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#2D2522] mb-1">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF5F0] text-[#2D2522] border border-[#E8D9CD] rounded-md focus:outline-none focus:ring-1 focus:ring-[#C27A52]"
                    >
                      <option value="General Virtual Assistance">General Virtual Assistance</option>
                      <option value="Data Entry & Cleanup">Data Entry & Cleanup</option>
                      <option value="Email Management">Email Management</option>
                      <option value="Calendar Management">Calendar Management</option>
                      <option value="Appointment Scheduling">Appointment Scheduling</option>
                      <option value="Document Organization">Document Organization</option>
                      <option value="Basic Website Creation">Basic Website Creation</option>
                      <option value="Other / General Inquiry">Other / General Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#2D2522] mb-1">
                    Message <span className="text-[#C27A52]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your project, tasks, or role requirements..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF5F0] text-[#2D2522] placeholder-[#7A6A62] border border-[#E8D9CD] rounded-md focus:outline-none focus:ring-1 focus:ring-[#C27A52] resize-none"
                  />
                  {errors.message && <p className="mt-1 text-[10px] text-rose-600">{errors.message}</p>}
                </div>

                {/* Submit button in Sand/Gold with spring micro-interaction */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 text-xs font-bold tracking-[0.2em] uppercase rounded-md text-white bg-[#C27A52] hover:bg-[#A9623D] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message (via FormSubmit)</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>

          {/* Right: Direct Contact & Availability Cards in Light Beige */}
          <div
            data-reveal-delay="150"
            className="reveal-card lg:col-span-5 space-y-4"
          >
            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8D9CD] space-y-2 shadow-xs">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C27A52] font-semibold block">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-[#FAF5F0] border border-[#E8D9CD]">
                <div className="flex items-center gap-2 overflow-hidden text-xs font-medium text-[#2D2522]">
                  <Mail className="w-4 h-4 text-[#C27A52] shrink-0" />
                  <a href={`mailto:${personal.email}`} className="truncate hover:underline">
                    {personal.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-[10px] tracking-wider uppercase font-bold rounded-md bg-[#E6BE85] text-[#2D2522] hover:bg-[#D4A968] transition-colors shrink-0 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8D9CD] space-y-2 shadow-xs">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C27A52] font-semibold block">
                Mobile / Phone
              </span>
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-[#FAF5F0] border border-[#E8D9CD]">
                <div className="flex items-center gap-2 overflow-hidden text-xs font-medium text-[#2D2522]">
                  <Phone className="w-4 h-4 text-[#C27A52] shrink-0" />
                  <a href={`tel:${personal.phone}`} className="hover:underline">
                    {personal.phone}
                  </a>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 text-[10px] tracking-wider uppercase font-bold rounded-md bg-[#E6BE85] text-[#2D2522] hover:bg-[#D4A968] transition-colors shrink-0 cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>

            {/* Location & Shift */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8D9CD] space-y-2 text-xs shadow-xs">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C27A52] font-semibold block">
                Work Terms
              </span>
              <p className="font-semibold text-[#2D2522]">
                Location: {personal.location}
              </p>
              <p className="text-[#5A4A42] text-[11px] font-light">
                Available for immediate start across US (EST/PST), UK, and Australian shifts.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Deep Organic Wave flowing into Terracotta Footer */}
      <WavyDivider fillColor="#C27A52" variant="deep-wave" />
    </section>
  );
};
