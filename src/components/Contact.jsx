import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-40 right-10 w-60 h-60 bg-[#00abf0]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
            Get In <span className="text-gradient-blue">Touch</span>
          </h2>
          <div className="section-divider" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind? Let's work together to make it happen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="card p-4 sm:p-5 flex items-start gap-3 sm:gap-4 hover-lift">
                <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-[#00abf0]/15 to-purple-500/15 text-[#00abf0] glow-sm">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-0.5 sm:mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-xs sm:text-base font-medium hover:text-[#00abf0] transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-xs sm:text-base font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-6 sm:p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00abf0]/15 to-purple-500/15 rounded-full flex items-center justify-center mx-auto mb-4 glow-sm">
                  <Send size={24} className="text-[#00abf0]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#00abf0] text-sm font-medium hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`input-field ${errors.name ? "error" : ""}`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`input-field ${errors.email ? "error" : ""}`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`input-field resize-none ${errors.message ? "error" : ""}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary inline-flex items-center gap-2 text-[#0a0a0f] px-6 py-3 rounded-xl font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
