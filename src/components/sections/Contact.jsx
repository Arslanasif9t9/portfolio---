import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, Check } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import SectionLabel from '../ui/SectionLabel.jsx';
import Headline from '../ui/Headline.jsx';
import { profile } from '../../data/profile.js';
import { fadeUp, pop, stagger, inView } from '../../lib/motion.js';

// Paste a Formspree form ID here to receive messages in your inbox
// (free tier: formspree.io → New Form → copy the ID from the endpoint).
// Until then the form composes the message into the visitor's mail client,
// so it still reaches you — nothing is silently dropped.
const FORMSPREE_ID = '';

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  whatsapp: FaWhatsapp,
  facebook: FaFacebook,
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [state, setState] = useState('idle'); // idle | sending | sent | error

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!FORMSPREE_ID) {
      // Fallback: hand the composed message to the visitor's mail client.
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name}\n${form.email}`
      );
      window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
      setState('sent');
      return;
    }

    setState('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setState('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setState('error');
    }
  };

  const field =
    'w-full bg-ink-800/60 border border-gold-700/30 rounded px-5 py-4 text-sm text-bone-100 placeholder:text-bone-400/60 focus:border-gold-400 focus:outline-none transition-colors duration-300';

  return (
    <section id="contact" className="py-section px-6">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="05">Contact</SectionLabel>

        <Headline top="Have something" bottom="worth building?" />

        <div className="mt-16 grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Details */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
          >
            <motion.p
              variants={fadeUp}
              className="max-w-md text-[15px] md:text-base text-bone-400 leading-relaxed"
            >
              {profile.contact.blurb}
            </motion.p>

            <motion.div variants={stagger(0.09)} className="mt-10 space-y-1">
              <motion.a
                variants={fadeUp}
                href={`mailto:${profile.contact.email}`}
                className="group flex items-center gap-4 py-4 border-b border-gold-700/20 hover:border-gold-400/40 transition-colors"
              >
                <Mail size={17} className="text-gold-400 shrink-0" />
                <span className="text-sm text-bone-100 group-hover:text-gold-400 transition-colors break-all">
                  {profile.contact.email}
                </span>
              </motion.a>
              <motion.a
                variants={fadeUp}
                href={profile.contact.phoneHref}
                className="group flex items-center gap-4 py-4 border-b border-gold-700/20 hover:border-gold-400/40 transition-colors"
              >
                <Phone size={17} className="text-gold-400 shrink-0" />
                <span className="text-sm text-bone-100 group-hover:text-gold-400 transition-colors">
                  {profile.contact.phone}
                </span>
              </motion.a>
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-4 py-4 border-b border-gold-700/20"
              >
                <MapPin size={17} className="text-gold-400 shrink-0" />
                <span className="text-sm text-bone-400">
                  {profile.contact.location}
                </span>
              </motion.div>
            </motion.div>

            <motion.div variants={stagger(0.07, 0.1)} className="mt-10 flex gap-3">
              {profile.socials.map((social) => {
                const Icon = icons[social.icon];
                return (
                  <motion.a
                    variants={pop}
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-12 w-12 place-items-center rounded-full border border-gold-700/35 text-bone-400 hover:text-gold-400 hover:border-gold-400 hover:bg-gold-400/10 transition-all duration-300"
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={stagger(0.08, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="space-y-4"
          >
            <motion.input
              variants={fadeUp}
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={update('name')}
              className={field}
            />
            <motion.input
              variants={fadeUp}
              type="email"
              required
              placeholder="Your email"
              value={form.email}
              onChange={update('email')}
              className={field}
            />
            <motion.textarea
              variants={fadeUp}
              required
              rows={6}
              placeholder="What are you building?"
              value={form.message}
              onChange={update('message')}
              className={`${field} resize-none`}
            />

            <motion.button
              variants={fadeUp}
              type="submit"
              disabled={state === 'sending'}
              className="group inline-flex w-full items-center justify-center gap-2 bg-gold-400 text-ink-900 font-mono text-xs tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-gold-300 disabled:opacity-60 transition-colors duration-300"
            >
              {state === 'sending' && (
                <Loader2 size={15} className="animate-spin" />
              )}
              {state === 'sent' && <Check size={15} />}
              {(state === 'idle' || state === 'error') && <Send size={15} />}
              {state === 'sending'
                ? 'Sending'
                : state === 'sent'
                  ? 'Message sent'
                  : 'Send message'}
            </motion.button>

            {state === 'error' && (
              <p className="text-xs text-center text-bone-400">
                Something went wrong — email{' '}
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="text-gold-400 underline"
                >
                  {profile.contact.email}
                </a>{' '}
                directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
