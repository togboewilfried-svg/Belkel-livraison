import { type FormEvent } from 'react';
import { ClockIcon, MapPinIcon, WhatsAppIcon } from './icons';
import { waLink } from '../lib/constants';

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const text = `Bonjour, je suis ${name} (${phone}).\n${message}`;
    window.open(waLink(text), '_blank', 'noopener');
  };

  return (
    <section id="contact" className="py-[clamp(60px,8vw,96px)] border-t border-line">
      <div className="wrap grid grid-cols-1 min-[860px]:grid-cols-2 gap-10 min-[860px]:gap-14 items-start">
        <div>
          <span className="inline-block text-[.72rem] font-bold tracking-[.1em] uppercase text-violet-700">Contact</span>
          <h2 className="mt-3">Une question ? Écrivez-nous</h2>
          <p className="mt-3.5 text-[.98rem] text-ink-700 max-w-[42ch]">
            Notre équipe répond directement sur WhatsApp, généralement en quelques minutes.
          </p>

          <ul className="mt-8 flex flex-col gap-5.5">
            <li className="flex items-start gap-3.5">
              <span className="flex items-center justify-center w-[22px] h-[22px] mt-0.5 text-violet-700 shrink-0">
                <MapPinIcon className="w-full h-full" />
              </span>
              <div>
                <strong className="block text-[.85rem] text-ink-900">Adresse</strong>
                <span className="block mt-0.5 text-[.9rem] text-ink-700">Zogbo, Cotonou, Bénin</span>
              </div>
            </li>
            <li className="flex items-start gap-3.5">
              <span className="flex items-center justify-center w-[22px] h-[22px] mt-0.5 text-violet-700 shrink-0">
                <WhatsAppIcon className="w-full h-full" />
              </span>
              <div>
                <strong className="block text-[.85rem] text-ink-900">WhatsApp</strong>
                <a href={waLink()} target="_blank" rel="noopener" className="block mt-0.5 text-[.9rem] text-violet-700 font-bold">
                  +229 01 40 32 63 87
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3.5">
              <span className="flex items-center justify-center w-[22px] h-[22px] mt-0.5 text-violet-700 shrink-0">
                <ClockIcon className="w-full h-full" />
              </span>
              <div>
                <strong className="block text-[.85rem] text-ink-900">Disponibilité</strong>
                <span className="block mt-0.5 text-[.9rem] text-ink-700">Cotonou, Calavi, Ouidah, Allada, Porto-Novo</span>
              </div>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4.5 border border-line rounded-[20px] px-7 py-8">
          <label className="flex flex-col gap-1.5 text-[.8rem] font-semibold text-ink-700">
            <span>Nom</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Votre nom"
              className="font-sans text-[.92rem] px-3.5 py-3 border border-line rounded-[10px] text-ink-900 focus:outline-none focus:border-violet-700"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-[.8rem] font-semibold text-ink-700">
            <span>Téléphone</span>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+229 00 00 00 00"
              className="font-sans text-[.92rem] px-3.5 py-3 border border-line rounded-[10px] text-ink-900 focus:outline-none focus:border-violet-700"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-[.8rem] font-semibold text-ink-700">
            <span>Message</span>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Adresse de collecte, adresse de livraison, ce que vous envoyez..."
              className="font-sans text-[.92rem] px-3.5 py-3 border border-line rounded-[10px] text-ink-900 resize-y focus:outline-none focus:border-violet-700"
            />
          </label>
          <button
            type="submit"
            className="mt-1 w-full inline-flex items-center justify-center h-12 px-6 rounded-full bg-violet-700 text-white font-bold text-[.88rem] hover:bg-violet-800 transition-colors"
          >
            Envoyer sur WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

