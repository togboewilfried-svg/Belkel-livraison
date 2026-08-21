import { ClockIcon } from './icons';
import { waLink } from '../lib/constants';

const TARIFS = [
  {
    title: 'Course simple',
    price: '1 000 FCFA',
    duration: 'Selon distance',
    items: ['Un colis ou document', 'Intra-ville, un seul axe', 'Coursier à moto', 'Paiement à la livraison'],
    popular: false,
  },
  {
    title: 'Livraison e-commerce',
    price: '1 500 FCFA',
    duration: 'Le jour même',
    items: ['Collecte chez vous', 'Livraison chez le client', 'Encaissement inclus', 'Reversement le jour même'],
    popular: true,
  },
  {
    title: 'Tournées restaurant',
    price: 'Sur devis',
    duration: 'Tarif dégressif',
    items: ['Trajet direct dès la sortie cuisine', 'Tarif dégressif au volume', 'Suivi dédié', 'Facturation groupée'],
    popular: false,
  },
];

export default function Tarifs() {
  return (
    <section id="tarifs" className="py-[clamp(60px,8vw,96px)] border-t border-line">
      <div className="wrap">
        <div className="max-w-[640px] mx-auto text-center mb-12">
          <span className="inline-block text-[.72rem] font-bold tracking-[.1em] uppercase text-violet-700">Tarifs indicatifs</span>
          <h2 className="mt-3">Un prix confirmé avant chaque course</h2>
          <p className="mt-3.5 text-[.98rem] text-ink-700">
            Les montants ci-dessous donnent un ordre de grandeur. Le tarif exact dépend de la distance et du volume
            — il est toujours confirmé par WhatsApp avant que le coursier ne se déplace.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[860px]:grid-cols-3 gap-6 items-start max-[860px]:max-w-[400px] max-[860px]:mx-auto max-[860px]:gap-10">
          {TARIFS.map((t) => (
            <article
              key={t.title}
              className={`relative rounded-[20px] px-6.5 py-8 ${
                t.popular
                  ? 'border-2 border-violet-700 pt-10 max-[860px]:order-first'
                  : 'border border-line'
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-violet-700 text-white text-[.66rem] font-bold tracking-[.04em] uppercase px-3.5 py-1.5 rounded-full whitespace-nowrap">
                  Le plus demandé
                </span>
              )}
              <h3 className="text-[.98rem]">{t.title}</h3>
              <span className={`block mt-3.5 font-serif font-bold text-[1.7rem] ${t.popular ? 'text-violet-700' : 'text-ink-900'}`}>
                {t.price}
              </span>
              <span className="flex items-center gap-1.5 mt-1.5 text-[.78rem] text-ink-500">
                <ClockIcon className="w-[15px] h-[15px]" />
                {t.duration}
              </span>
              <ul className="mt-5.5 flex flex-col gap-2.5">
                {t.items.map((item) => (
                  <li key={item} className="relative pl-4.5 text-[.86rem] text-ink-700">
                    <span
                      className={`absolute left-0 top-[7px] w-1.5 h-1.5 rounded-full ${
                        t.popular ? 'bg-violet-700' : 'bg-violet-500'
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                className={`flex items-center justify-center mt-6.5 h-[46px] rounded-[10px] font-bold text-[.85rem] text-white transition-colors ${
                  t.popular ? 'bg-violet-700 hover:bg-violet-800' : 'bg-near-black hover:bg-black'
                }`}
              >
                Choisir cette offre
              </a>
            </article>
          ))}
        </div>

        <p className="mt-7 text-[.78rem] text-ink-500 italic text-center">
          * Tarifs à titre indicatif — remplacez par vos grilles tarifaires réelles avant publication.
        </p>
      </div>
    </section>
  );
}
