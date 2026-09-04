import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  ExternalLink
} from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `Hello Mohamed,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/201004603038?text=${encodeURIComponent(
    'Hello Mohamed, I reviewed your React / React Native portfolio and would like to discuss an opportunity!'
  )}`;

  return (
    <section id="contact" className={`py-24 border-b relative transition-colors duration-300 ${
      isDark ? 'bg-[#0A0A0A] border-white/10' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-[10px] uppercase tracking-[0.25em] font-mono ${
                  isDark ? 'text-white/40' : 'text-slate-400'
                }`}>
                  05 / Communication
                </span>
                <span className={`w-8 h-[1px] ${isDark ? 'bg-white/20' : 'bg-slate-300'}`} />
              </div>
              <h2 className={`text-4xl sm:text-5xl font-light tracking-tight ${
                isDark ? 'text-[#F5F5F5]' : 'text-slate-900'
              }`}>
                Get In Touch
              </h2>
              <p className={`text-sm sm:text-base mt-2 font-light leading-relaxed ${
                isDark ? 'text-[#A3A3A3]' : 'text-slate-600'
              }`}>
                Available for React / Next.js engineering, React Native mobile apps, full-time engineering roles, and technical consultancies.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div className={`p-5 rounded-sm border transition-all flex items-center justify-between gap-3 ${
                isDark 
                  ? 'bg-[#151515] border-white/10 hover:border-white/20' 
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}>
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className={`w-9 h-9 rounded-sm border flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-white/5 border-white/15 text-white' : 'bg-sky-50 border-sky-200 text-sky-600'
                  }`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className={`text-[10px] uppercase tracking-widest font-mono ${
                      isDark ? 'text-white/40' : 'text-slate-400'
                    }`}>
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${profileData.email}`}
                      className={`text-xs sm:text-sm font-medium transition-colors truncate block font-mono ${
                        isDark ? 'text-white hover:text-sky-400' : 'text-slate-900 hover:text-sky-600'
                      }`}
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  id="btn-copy-email-contact"
                  onClick={() => handleCopy(profileData.email, 'email')}
                  className={`p-2 rounded-full border shrink-0 transition-colors ${
                    isDark 
                      ? 'bg-white/5 text-white/50 hover:text-white border-white/10' 
                      : 'bg-white text-slate-500 hover:text-slate-900 border-slate-200'
                  }`}
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className={`p-5 rounded-sm border transition-all flex items-center justify-between gap-3 ${
                isDark 
                  ? 'bg-[#151515] border-white/10 hover:border-white/20' 
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}>
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className={`w-9 h-9 rounded-sm border flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-white/5 border-white/15 text-white' : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                  }`}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className={`text-[10px] uppercase tracking-widest font-mono ${
                      isDark ? 'text-white/40' : 'text-slate-400'
                    }`}>
                      Phone & WhatsApp
                    </p>
                    <a
                      href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                      className={`text-xs sm:text-sm font-medium transition-colors truncate block font-mono ${
                        isDark ? 'text-white hover:text-emerald-400' : 'text-slate-900 hover:text-emerald-600'
                      }`}
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center gap-1 shadow-xs"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    id="btn-copy-phone-contact"
                    onClick={() => handleCopy(profileData.phone, 'phone')}
                    className={`p-2 rounded-full border transition-colors ${
                      isDark 
                        ? 'bg-white/5 text-white/50 hover:text-white border-white/10' 
                        : 'bg-white text-slate-500 hover:text-slate-900 border-slate-200'
                    }`}
                    title="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className={`p-5 rounded-sm border flex items-center gap-3 ${
                isDark ? 'bg-[#151515] border-white/10' : 'bg-slate-50 border-slate-200 shadow-2xs'
              }`}>
                <div className={`w-9 h-9 rounded-sm border flex items-center justify-center shrink-0 ${
                  isDark ? 'bg-white/5 border-white/15 text-white' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className={`text-[10px] uppercase tracking-widest font-mono ${
                    isDark ? 'text-white/40' : 'text-slate-400'
                  }`}>
                    Base Location
                  </p>
                  <p className={`text-xs sm:text-sm font-medium ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {profileData.location}
                  </p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={profileData.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-sm border transition-all flex items-center justify-between group ${
                    isDark 
                      ? 'bg-[#151515] border-white/10 hover:border-white/30 text-white' 
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-900 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-sky-600" />
                    <span className="text-xs font-medium tracking-wider uppercase">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-sm border transition-all flex items-center justify-between group ${
                    isDark 
                      ? 'bg-[#151515] border-white/10 hover:border-white/30 text-white' 
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-900 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span className="text-xs font-medium tracking-wider uppercase">GitHub</span>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-sm border shadow-xl transition-colors ${
              isDark ? 'bg-[#151515] border-white/10' : 'bg-white border-slate-200'
            }`}>
              <div className={`flex items-center justify-between mb-8 pb-4 border-b ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }`}>
                <div>
                  <h3 className={`text-xl font-light tracking-tight ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Direct Message Dispatch
                  </h3>
                  <p className={`text-xs font-light mt-0.5 ${
                    isDark ? 'text-white/40' : 'text-slate-500'
                  }`}>
                    Pre-formats and routes directly to Mohamed's personal inbox
                  </p>
                </div>
                <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                  isDark ? 'bg-white/5 border-white/10 text-white/50' : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}>
                  Ready
                </span>
              </div>

              {formSubmitted ? (
                <div className={`p-8 rounded-sm border text-center space-y-4 ${
                  isDark ? 'bg-[#0A0A0A] border-white/15' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className={`text-base font-light uppercase tracking-wider ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Message Prepared
                  </h4>
                  <p className={`text-xs max-w-md mx-auto font-light leading-relaxed ${
                    isDark ? 'text-white/60' : 'text-slate-600'
                  }`}>
                    Your email client has been summoned with your formatted brief. You can also write directly to{' '}
                    <span className="font-mono font-medium">{profileData.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs uppercase tracking-wider font-semibold text-sky-600 hover:text-sky-500 underline pt-2"
                  >
                    Draft another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className={`text-[10px] uppercase tracking-wider font-mono ${
                        isDark ? 'text-white/40' : 'text-slate-500'
                      }`}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Henderson"
                        className={`w-full px-4 py-3 rounded-sm border focus:outline-none transition-colors ${
                          isDark
                            ? 'bg-[#0A0A0A] border-white/10 text-white placeholder-white/30 focus:border-white/30'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-500 shadow-2xs'
                        }`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className={`text-[10px] uppercase tracking-wider font-mono ${
                        isDark ? 'text-white/40' : 'text-slate-500'
                      }`}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-sm border focus:outline-none transition-colors ${
                          isDark
                            ? 'bg-[#0A0A0A] border-white/10 text-white placeholder-white/30 focus:border-white/30'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-500 shadow-2xs'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-[10px] uppercase tracking-wider font-mono ${
                      isDark ? 'text-white/40' : 'text-slate-500'
                    }`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. React Developer Position / Front-End Architecture"
                      className={`w-full px-4 py-3 rounded-sm border focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-[#0A0A0A] border-white/10 text-white placeholder-white/30 focus:border-white/30'
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-500 shadow-2xs'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-[10px] uppercase tracking-wider font-mono ${
                      isDark ? 'text-white/40' : 'text-slate-500'
                    }`}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Mohamed, we reviewed your React projects and would like to discuss..."
                      className={`w-full px-4 py-3 rounded-sm border focus:outline-none transition-colors resize-none ${
                        isDark
                          ? 'bg-[#0A0A0A] border-white/10 text-white placeholder-white/30 focus:border-white/30'
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-500 shadow-2xs'
                      }`}
                    />
                  </div>

                  <button
                    id="btn-submit-message"
                    type="submit"
                    className={`w-full py-3.5 font-semibold rounded-full shadow-lg transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest ${
                      isDark
                        ? 'bg-white hover:bg-white/90 text-black'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
