import { WhatsAppIcon } from './icons';
import { waLink } from '../lib/constants';

export default function CtaFinal() {
  return (
    <section className="bg-[linear-gradient(165deg,#1B0B2E_0%,#140820_60%,#0A0510_100%)] py-[clamp(64px,8vw,96px)] text-center border-t border-line">
      <div className="wrap">
        <h2 className="max-w-[18ch] mx-auto text-white">Une course à confier ?</h2>
        <p className="max-w-[46ch] mx-auto mt-3.5 text-white/64">
          Écrivez-nous sur WhatsApp avec l'adresse de collecte et de livraison — on s'occupe du reste.
        </p>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener"
          className="mt-7 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-violet-700 text-white font-bold text-[.88rem] hover:bg-violet-800 transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Discuter sur WhatsApp
        </a>
      </div>
    </section>
  );
}
