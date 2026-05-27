import React, { useState } from 'react';
import {
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter
} from 'lucide-react';

export default function ContactSection({ theme, isDark }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-500 text-sm font-bold tracking-widest mb-2">GET IN TOUCH</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Let's Build Something <span className="bg-gradient-to-r from-[#af7ed4] to-[#c79ce7] bg-clip-text text-transparent">Safe</span> Together</h2>
          <p className={`max-w-2xl mx-auto ${theme.textMuted}`}>
            Have questions about certifying your AI system or want a personalized demo? Reach out to our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className={`border rounded-2xl p-6 ${theme.cardSolid}`}>
              <Mail className="w-6 h-6 text-[#af7ed4] mb-3" />
              <h4 className="font-bold mb-1">Email Us</h4>
              <p className={`text-sm ${theme.textMuted}`}>contact@azon-ai.com</p>
            </div>
            <div className={`border rounded-2xl p-6 ${theme.cardSolid}`}>
              <MapPin className="w-6 h-6 text-cyan-500 mb-3" />
              <h4 className="font-bold mb-1">Visit Us</h4>
              <p className={`text-sm ${theme.textMuted}`}>European AI Research Hub</p>
            </div>
            <div className={`border rounded-2xl p-6 ${theme.cardSolid}`}>
              <Phone className="w-6 h-6 text-green-500 mb-3" />
              <h4 className="font-bold mb-1">Connect</h4>
              <div className="flex gap-3 mt-3">
                <a href="#" className={`w-9 h-9 rounded-full flex items-center justify-center transition ${isDark ? 'bg-slate-800 hover:bg-[#af7ed4]' : 'bg-slate-100 hover:bg-[#af7ed4] hover:text-white'}`}>
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className={`w-9 h-9 rounded-full flex items-center justify-center transition ${isDark ? 'bg-slate-800 hover:bg-[#af7ed4]' : 'bg-slate-100 hover:bg-[#af7ed4] hover:text-white'}`}>
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className={`w-9 h-9 rounded-full flex items-center justify-center transition ${isDark ? 'bg-slate-800 hover:bg-[#af7ed4]' : 'bg-slate-100 hover:bg-[#af7ed4] hover:text-white'}`}>
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-2 border rounded-2xl p-6 sm:p-8 ${theme.cardSolid}`}>
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className={theme.textMuted}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${theme.textSubtle}`}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition ${theme.input}`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${theme.textSubtle}`}>Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition ${theme.input}`}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${theme.textSubtle}`}>Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition ${theme.input}`}
                    placeholder="Your Company Inc."
                  />
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${theme.textSubtle}`}>Message *</label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition resize-none ${theme.input}`}
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#7f4aa8] via-[#af7ed4] to-[#dfc0f3] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#af7ed4]/35 transition flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
