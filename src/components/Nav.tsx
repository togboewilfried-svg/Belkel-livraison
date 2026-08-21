import { useEffect, useState } from 'react';
import { waLink } from '../lib/constants';

const NAV_LINKS = [
  { href: '#apropos', label: 'À propos' },
  { href: '#poles', label: 'Nos pôles' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#confiance', label: 'Nous choisir' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const MOBILE_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#poles', label: 'Nos pôles' },
  { href: '#comment', label: 'Comment ça marche' },
  { href: '#zones', label: 'Zones desservies' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#confiance', label: 'Nous choisir' },
  { href: '#avis', label: 'Avis clients' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="pt-6.5">
      <div className="wrap flex items-center justify-between gap-6 h-11">
        <a href="#accueil" className="inline-flex items-center gap-2.5 font-serif font-bold text-[1.02rem] text-ink-900">
          <span className="inline-flex items-center justify-center w-[30px] h-[30px] leading-none rounded-[9px] bg-near-black text-white font-serif font-bold text-[.85rem]">B</span>
          Belkel <em className="not-italic text-violet-700">Livraison</em>
        </a>

        <nav className="hidden min-[980px]:flex items-center gap-6 font-semibold text-[.85rem] text-ink-700 whitespace-nowrap">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="pb-1 border-b border-transparent hover:border-violet-700 hover:text-violet-700 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="hidden min-[980px]:inline-flex items-center justify-center h-[42px] px-5 rounded-full bg-near-black text-white font-bold text-[.82rem] hover:bg-black transition-colors"
          >
            WhatsApp
          </a>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="min-[980px]:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10"
          >
            <span className="w-5 h-0.5 bg-ink-900" />
            <span className="w-5 h-0.5 bg-ink-900" />
            <span className="w-5 h-0.5 bg-ink-900" />
          </button>
        </div>
      </div>

      {/* Fond assombri */}
      <div
        onClick={() => setOpen(false)}
        className={`min-[980px]:hidden fixed inset-0 bg-[rgba(10,5,16,.5)] transition-opacity duration-200 z-[59] ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Panneau latéral droit */}
      <nav
        className={`min-[980px]:hidden fixed top-0 right-0 h-screen w-[min(78vw,300px)] flex flex-col items-start text-left gap-0.5 pt-17 px-6 pb-6 bg-white overflow-y-auto z-[60] transition-transform duration-[.32s] ease-[cubic-bezier(.16,1,.3,1)] ${
          open ? 'translate-x-0 shadow-[-16px_0_40px_rgba(17,24,39,.18)]' : 'translate-x-full shadow-none'
        }`}
      >
        <button
          type="button"
          aria-label="Fermer le menu"
          onClick={() => setOpen(false)}
          className="self-end absolute top-6 right-6 flex items-center justify-center w-9 h-9 leading-none rounded-full border border-line text-ink-900 text-base"
        >
          ✕
        </button>
        {MOBILE_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="w-full py-2.5 px-1 font-semibold text-[.95rem] border-b border-line text-ink-700"
          >
            {l.label}
          </a>
        ))}
        <a
          href={waLink()}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
          className="mt-2.5 w-full py-3 px-1 text-center rounded-full bg-near-black text-white font-bold"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
