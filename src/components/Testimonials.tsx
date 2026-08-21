import { StarIcon } from './icons';
import { waLink } from '../lib/constants';

const TESTIMONIALS = [
  {
    text: "Je confie mes commandes le matin, elles sont chez mes clientes avant midi. Je n'ai plus besoin de gérer les livreurs moi-même.",
    avatar: '/images/avatar-aicha.jpg',
    name: 'Aïcha B.',
    role: 'E-commerçante, Cotonou',
  },
  {
    text: 'Les plats partent chauds et arrivent chauds. Le coursier est déjà là quand la commande sort de cuisine.',
    avatar: '/images/avatar-rodrigue.jpg',
    name: 'Rodrigue A.',
    role: 'Restaurant, Calavi',
  },
  {
    text: "J'ai fait livrer un dossier urgent à Porto-Novo en fin de journée, sans sortir de mon bureau.",
    avatar: '/images/avatar-chantal.jpg',
    name: 'Chantal M.',
    role: 'Particulier, Cotonou',
  },
];

export default function Testimonials() {
  return (
    <section id="avis" className="py-[clamp(60px,8vw,96px)] border-t border-line">
      <div className="wrap">
        <div className="max-w-[640px] mx-auto text-center mb-12">
          <span className="inline-block text-[.72rem] font-bold tracking-[.1em] uppercase text-violet-700">Avis clients</span>
          <h2 className="mt-3">Ce qu'en disent nos clients</h2>
          <p className="mt-1.5 text-[.78rem] text-ink-500 italic">
            Exemples à remplacer par de vrais avis avant mise en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[781px]:grid-cols-3 gap-6 max-[780px]:max-w-[400px] max-[780px]:mx-auto">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="border border-line rounded-[18px] px-6.5 py-7">
              <div className="flex gap-[3px] text-orange-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-[15px] h-[15px]" />
                ))}
              </div>
              <p className="mt-4 text-[.92rem] text-ink-900 italic leading-[1.55]">« {t.text} »</p>
              <div className="flex items-center gap-3 mt-5.5">
                <span className="block w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <img src={t.avatar} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
                </span>
                <div>
                  <strong className="block text-[.86rem] text-ink-900">{t.name}</strong>
                  <span className="block mt-0.5 text-[.78rem] text-ink-500">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-[.92rem] text-ink-700">
          Envie de partager votre expérience ?{' '}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center ml-2 font-bold text-[.85rem] text-violet-700 border border-violet-700 rounded-full px-5 py-2.5 hover:bg-violet-700 hover:text-white transition-colors"
          >
            Écrivez-nous sur WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
