import { waLink } from '../lib/constants';

export default function Hero() {
  return (
    <section id="accueil" className="pt-7 pb-3">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(165deg,#1B0B2E_0%,#140820_55%,#0A0510_100%)] px-[clamp(28px,7vw,76px)] py-[clamp(44px,8vw,92px)] min-h-[460px] flex items-center justify-center text-center">
          <div className="relative z-2 max-w-[620px] mx-auto">
            <h1 className="mt-4.5 text-white text-[clamp(2.3rem,4.6vw,3.6rem)] font-bold leading-[1.18] -tracking-[.01em]">
              Vous vendez ?
              <span className="block text-orange-500">Nous livrons.</span>
            </h1>
            <p className="mx-auto mt-5.5 max-w-[46ch] text-[1.02rem] text-white/66">
              Belkel Livraison collecte vos colis et les met en route le jour même sur l'axe Cotonou – Porto-Novo, en
              passant par Abomey-Calavi, Ouidah et Allada. Une commande se passe par WhatsApp, pas par formulaire.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-4 rounded-full bg-white/7 border border-white/16 py-1 pl-5.5 pr-1 text-white font-semibold text-[.92rem] hover:bg-white/13 transition-colors"
              >
                <span>Envoyer un colis</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white text-[1.05rem] shrink-0">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
