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

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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
    'Hello Mohamed, I saw your portfolio and would like to discuss an opportunity!'
  )}`;

  return (
    <section id="contact" className="py-24 border-b border-white/10 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">05 / Communication</span>
                <span className="w-8 h-[1px] bg-white/20" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-light text-[#F5F5F5] tracking-tight">
                Get In Touch
              </h2>
              <p className="text-[#A3A3A3] text-sm sm:text-base mt-2 font-light leading-relaxed">
                Whether you have an open mobile engineer role, a technical consultation, or a contract project, reach out directly.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div className="p-5 rounded-sm bg-[#151515] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-sm bg-white/5 border border-white/15 flex items-center justify-center text-white shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] uppercase tracking-widest text-white/40">Direct Email</p>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-white/80 transition-colors truncate block font-mono"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  id="btn-copy-email-contact"
                  onClick={() => handleCopy(profileData.email, 'email')}
                  className="p-2 rounded-full bg-white/5 text-white/50 hover:text-white border border-white/10 shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-5 rounded-sm bg-[#151515] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-sm bg-white/5 border border-white/15 flex items-center justify-center text-white shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] uppercase tracking-widest text-white/40">Phone & WhatsApp</p>
                    <a
                      href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-white/80 transition-colors truncate block font-mono"
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
                    className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors flex items-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    id="btn-copy-phone-contact"
                    onClick={() => handleCopy(profileData.phone, 'phone')}
                    className="p-2 rounded-full bg-white/5 text-white/50 hover:text-white border border-white/10"
                    title="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-sm bg-[#151515] border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-white/5 border border-white/15 flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Base Location</p>
                  <p className="text-xs sm:text-sm font-medium text-white">{profileData.location}</p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={profileData.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-sm bg-[#151515] border border-white/10 hover:border-white/30 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-white/70" />
                    <span className="text-xs font-medium text-white tracking-wider uppercase">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-white/40 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-sm bg-[#151515] border border-white/10 hover:border-white/30 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-white/70" />
                    <span className="text-xs font-medium text-white tracking-wider uppercase">GitHub</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-white/40 group-hover:text-white transition-colors" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-sm bg-[#151515] border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-light text-white tracking-tight">Direct Message Dispatch</h3>
                  <p className="text-xs text-white/40 font-light mt-0.5">Pre-formats and routes directly to Mohamed's personal inbox</p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                  SMTP Ready
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-sm bg-[#0A0A0A] border border-white/15 text-center space-y-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-light text-white uppercase tracking-wider">Message Prepared</h4>
                  <p className="text-xs text-white/60 max-w-md mx-auto font-light leading-relaxed">
                    Your default email client has been summoned with your formatted brief. You can also write directly to{' '}
                    <span className="text-white font-mono">{profileData.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs uppercase tracking-wider font-semibold text-white/70 hover:text-white underline pt-2"
                  >
                    Draft another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-wider text-white/40">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Henderson"
                        className="w-full px-4 py-3 rounded-sm bg-[#0A0A0A] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-wider text-white/40">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-sm bg-[#0A0A0A] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-white/40">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Mobile Developer Position / System Architecture"
                      className="w-full px-4 py-3 rounded-sm bg-[#0A0A0A] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-white/40">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Mohamed, we reviewed your projects and would like to discuss..."
                      className="w-full px-4 py-3 rounded-sm bg-[#0A0A0A] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="btn-submit-message"
                    type="submit"
                    className="w-full py-3.5 bg-white hover:bg-white/90 text-black font-semibold rounded-full shadow-lg transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest"
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
