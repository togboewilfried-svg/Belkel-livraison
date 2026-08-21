import { ChatIcon, MapPinIcon, ShieldCheckIcon, ZapIcon } from './icons';

const PILLARS = [
  { icon: ZapIcon, title: 'Rapide', desc: 'Livraison le jour même' },
  { icon: ShieldCheckIcon, title: 'Fiable', desc: 'Coursier assigné au colis' },
  { icon: ChatIcon, title: 'Accessible', desc: 'Tout par WhatsApp' },
  { icon: MapPinIcon, title: 'Multi-villes', desc: '5 axes couverts' },
];

export default function About() {
  return (
    <section id="apropos" className="py-[clamp(60px,8vw,96px)] border-t border-line">
      <div className="wrap grid grid-cols-1 min-[900px]:grid-cols-[.95fr_1.05fr] gap-15 min-[900px]:gap-16 items-center">
        <div className="relative max-w-[440px] pr-[34px] pb-[34px] mx-auto min-[900px]:mx-0">
          <div className="relative rounded-3xl bg-[linear-gradient(165deg,#1B0B2E_0%,#140820_100%)] pt-11 pr-[calc(38%+20px)] pb-7.5 pl-7 text-white min-h-[320px]">
            <span className="absolute -top-4 -left-4 z-2 flex flex-col items-start bg-white text-ink-900 rounded-[14px] shadow-[0_14px_30px_rgba(17,24,39,.16)] px-3.5 py-2.5 text-[.72rem] font-semibold leading-[1.2] max-w-[120px]">
              <strong className="block font-serif text-[1.15rem] font-bold text-orange-500 mb-0.5">5</strong>
              Villes desservies
            </span>
            <span className="block font-serif text-[2.2rem] font-bold text-violet-500 leading-none">“</span>
            <p className="mt-1.5 text-[1.08rem] font-semibold leading-[1.42]">
              Chaque colis mérite d'arriver comme s'il était le seul qu'on transportait ce jour-là.
            </p>
            <div className="flex items-center gap-3 mt-7">
              <span className="flex items-center justify-center w-[38px] h-[38px] leading-none rounded-full bg-orange-500 text-white font-serif font-bold text-[.85rem] shrink-0">
                B
              </span>
              <strong className="text-[.85rem]">L'équipe Belkel Livraison</strong>
            </div>
          </div>
          <div className="absolute z-2 right-0 bottom-0 w-[38%] aspect-[4/5] rounded-[18px] overflow-hidden border-[5px] border-white shadow-[0_24px_48px_rgba(17,24,39,.22)]">
            <img
              src="/images/about-handoff.jpg"
              alt="Remise d'un colis Belkel Livraison à un client"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 border border-line rounded-full px-3.5 py-1.5 text-[.7rem] font-bold tracking-[.06em] uppercase text-violet-700">
            À propos
          </span>
          <h2 className="mt-4">
            Une livraison pensée <span className="text-violet-700">pour le terrain béninois</span>
          </h2>
          <p className="mt-4 max-w-[52ch] text-[.98rem]">
            Belkel Livraison est une agence de collecte et de livraison basée à Zogbo, Cotonou. Nous accompagnons
            e-commerçants, restaurants et particuliers sur l'axe Cotonou – Porto-Novo, avec une équipe de coursiers
            qui connaît le terrain.
          </p>
          <p className="mt-4 max-w-[52ch] text-[.98rem]">
            Pas d'application à installer, pas de formulaire à remplir — juste une conversation WhatsApp, un prix
            clair, et un colis qui arrive.
          </p>

          <div className="grid grid-cols-2 min-[480px]:grid-cols-2 max-[480px]:grid-cols-1 gap-x-7 gap-y-5.5 mt-8 max-w-[460px]">
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <Icon className="w-[22px] h-[22px] text-violet-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[.9rem] text-ink-900">{title}</strong>
                  <span className="block mt-0.5 text-[.8rem] text-ink-500">{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
