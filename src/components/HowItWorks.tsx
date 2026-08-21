import { waLink } from '../lib/constants';

const STEPS = [
  {
    label: 'Étape 1',
    title: 'Vous commandez',
    text: "Écrivez-nous l'adresse de collecte, l'adresse de livraison et ce que vous envoyez. Le prix est confirmé avant que le coursier ne se déplace.",
    photo: '/images/step1-courier.jpg',
    alt: 'Coursier Belkel Livraison en route à moto',
    reverse: false,
  },
  {
    label: 'Étape 2',
    title: 'On livre',
    text: "Le coursier collecte le colis, livre le destinataire et vous reverse l'encaissement le jour même.",
    photo: '/images/step2-colis.jpg',
    alt: 'Collecte et transport de colis Belkel Livraison',
    reverse: true,
  },
];

export default function HowItWorks() {
  return (
    <section id="comment" className="bg-near-black py-[clamp(56px,8vw,96px)]">
      <div className="wrap flex flex-wrap justify-between items-start gap-8 mb-[clamp(40px,6vw,64px)]">
        <h2 className="text-white max-w-[10ch]">Comment ça marche</h2>
        <div className="max-w-[380px]">
          <p className="text-white/62 text-[.94rem]">
            Une seule conversation WhatsApp suffit pour organiser la collecte, le prix et la livraison de votre colis.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="mt-4.5 inline-flex items-center justify-center h-11 px-5.5 rounded-full bg-orange-500 text-white font-bold text-[.85rem] hover:bg-orange-700 transition-colors"
          >
            Discuter sur WhatsApp
          </a>
        </div>
      </div>

      <div className="wrap flex flex-col gap-7">
        {STEPS.map((s) => (
          <div
            key={s.label}
            className={`grid grid-cols-1 min-[760px]:grid-cols-[1fr_1.3fr] items-center gap-[clamp(24px,4vw,48px)] ${
              s.reverse ? 'min-[760px]:grid-cols-[1.3fr_1fr]' : ''
            }`}
          >
            <div className={s.reverse ? 'min-[760px]:order-2' : ''}>
              <span className="block text-[.74rem] font-bold tracking-[.1em] uppercase text-violet-300 mb-2.5">
                {s.label}
              </span>
              <h3 className="flex items-center gap-2.5 text-white text-[clamp(1.2rem,2.4vw,1.6rem)]">
                {s.title} <span className="text-orange-500">↗</span>
              </h3>
              <p className="mt-3.5 max-w-[34ch] text-[.92rem] text-white/62">{s.text}</p>
            </div>
            <div className={`relative rounded-[28px] overflow-hidden aspect-[16/8] max-[760px]:aspect-[16/10] ${s.reverse ? 'min-[760px]:order-1' : ''}`}>
              <img src={s.photo} alt={s.alt} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
