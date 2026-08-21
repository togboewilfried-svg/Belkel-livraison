import { MapPinIcon } from './icons';

const ZONES = [
  { title: 'Cotonou', text: "Notre base. Collecte et livraison en moins d'une heure dans la plupart des quartiers." },
  { title: 'Abomey-Calavi', text: 'Rotations régulières vers et depuis Cotonou, plusieurs fois par jour.' },
  { title: 'Ouidah', text: "Collecte groupée avec l'axe Cotonou – Allada pour un délai maîtrisé." },
  { title: 'Allada', text: 'Desservie sur le même passage que Ouidah et Calavi.' },
  { title: 'Porto-Novo', text: 'Liaison quotidienne avec Cotonou pour les colis et courses ponctuelles.' },
];

export default function Zones() {
  return (
    <section id="zones" className="py-[clamp(60px,8vw,96px)] border-t border-line">
      <div className="wrap">
        <div className="max-w-[640px] mx-auto text-center mb-12">
          <span className="inline-block text-[.72rem] font-bold tracking-[.1em] uppercase text-violet-700">Zones desservies</span>
          <h2 className="mt-3">Cinq villes, un seul réseau de coursiers</h2>
          <p className="mt-3.5 text-[.98rem] text-ink-700">
            Nos coursiers tournent en continu sur cet axe, ce qui permet des collectes rapides même en dehors de
            Cotonou.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[560px]:grid-cols-2 min-[820px]:grid-cols-3 gap-7 max-[560px]:max-w-[320px] max-[560px]:mx-auto">
          {ZONES.map((z) => (
            <div key={z.title} className="text-center border border-line rounded-[20px] px-5.5 py-9">
              <div className="flex items-center justify-center w-14 h-14 leading-none mx-auto mb-4.5 rounded-full bg-violet-100">
                <MapPinIcon className="w-6 h-6 text-violet-700" />
              </div>
              <h3 className="flex items-center justify-center gap-2 flex-wrap">{z.title}</h3>
              <p className="mt-2.5 text-[.88rem]">{z.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
