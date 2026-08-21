import { waLink } from '../lib/constants';

const COLS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: 'Navigation',
    links: [
      { label: 'Accueil', href: '#accueil' },
      { label: 'À propos', href: '#apropos' },
      { label: 'Nos pôles', href: '#poles' },
      { label: 'Comment ça marche', href: '#comment' },
    ],
  },
  {
    title: 'En savoir plus',
    links: [
      { label: 'Zones desservies', href: '#zones' },
      { label: 'Tarifs', href: '#tarifs' },
      { label: 'Nous choisir', href: '#confiance' },
    ],
  },
  {
    title: 'Communauté',
    links: [
      { label: 'Avis clients', href: '#avis' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(165deg,#1B0B2E_0%,#140820_55%,#0A0510_100%)] pt-14 pb-8">
      <div className="wrap">
        <div className="grid grid-cols-1 min-[481px]:grid-cols-2 min-[781px]:grid-cols-4 gap-8 pb-10">
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-serif text-[.68rem] font-bold tracking-[.08em] uppercase text-violet-300 mb-3">
                {col.title}
              </h4>
              {col.links.map((l) => (
                <a key={l.label} href={l.href} className="block text-[.86rem] text-white/64 py-1 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          ))}
          <div>
            <h4 className="font-serif text-[.68rem] font-bold tracking-[.08em] uppercase text-violet-300 mb-3">
              Nous joindre
            </h4>
            <a href={waLink()} target="_blank" rel="noopener" className="block text-[.86rem] text-white/64 py-1 hover:text-white transition-colors">
              WhatsApp
            </a>
            <span className="block text-[.86rem] text-white/64 py-1">Zogbo, Cotonou, Bénin</span>
          </div>
        </div>

        <div className="h-px bg-white/12" />

        <div className="flex items-center justify-between max-[480px]:flex-col max-[480px]:items-start flex-wrap gap-4 py-6">
          <a href="#accueil" className="inline-flex items-center gap-2.5 font-serif font-bold text-[1.02rem] text-white">
            <span className="inline-flex items-center justify-center w-[30px] h-[30px] leading-none rounded-[9px] bg-violet-700 text-white font-serif font-bold text-[.85rem]">
              B
            </span>
            Belkel <em className="not-italic text-violet-700">Livraison</em>
          </a>
          <div className="flex items-center gap-2.5 text-[.82rem] text-white/50">
            <span>Politique de confidentialité</span>
            <span className="text-white/25">|</span>
            <span>Mentions légales</span>
          </div>
        </div>

        <p className="text-center text-[.78rem] text-white/40">© 2026 Belkel Livraison. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
