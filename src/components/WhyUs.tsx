const REASONS = [
  { title: '1. Coursiers à moto', text: 'Sur les cinq axes, du centre-ville aux quartiers excentrés.' },
  { title: '2. Encaissement à la livraison', text: 'Géré et reversé, sans allers-retours comptables.' },
  { title: '3. Tout passe par WhatsApp', text: 'Aucune application à installer, tout dans la même conversation.' },
  { title: '4. Un interlocuteur fixe', text: 'La même équipe, à chaque commande.' },
];

export default function WhyUs() {
  return (
    <section id="confiance" className="bg-near-black py-[clamp(56px,8vw,96px)]">
      <div className="wrap grid grid-cols-1 min-[860px]:grid-cols-2 gap-10 min-[860px]:gap-14 items-center">
        <div className="relative max-w-[460px] mx-auto min-[860px]:mx-0 rounded-3xl overflow-hidden aspect-[4/5] w-full max-[860px]:max-w-[320px] max-[860px]:min-h-[380px]">
          <img
            src="/images/confiance-portrait.jpg"
            alt="Coursier Belkel Livraison à moto"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,8,32,0)_55%,rgba(20,8,32,.65)_100%)]" />
          <span className="absolute z-2 left-5.5 bottom-5 flex items-center gap-2 text-white font-serif font-bold text-[.82rem]">
            <span className="inline-flex items-center justify-center w-[30px] h-[30px] leading-none rounded-[9px] bg-violet-700 text-white font-serif font-bold text-[.85rem]">
              B
            </span>
            Belkel Livraison
          </span>
        </div>

        <div>
          <span className="inline-block text-[.72rem] font-bold tracking-[.1em] uppercase text-violet-300">Nous choisir</span>
          <h2 className="text-white mt-3.5">Un service pensé pour la confiance, pas pour l'anonymat</h2>
          <p className="mt-4 max-w-[46ch] text-[.96rem] text-white/62">
            On ne gère pas des livraisons anonymes — on gère les vôtres, avec un coursier qui connaît déjà votre
            adresse.
          </p>

          <ol className="mt-8 flex flex-col gap-5.5">
            {REASONS.map((r) => (
              <li key={r.title}>
                <strong className="block text-white font-serif text-[.9rem] font-bold">{r.title}</strong>
                <span className="block mt-1.5 text-[.86rem] text-white/60">{r.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
