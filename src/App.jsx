export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">

      {/* HERO */}
      <header className="flex flex-col items-center justify-center flex-1 px-6 py-24 text-center">
        <img
          src="/logo.webp"
          alt="Glenford Corp"
          className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl mb-16 select-none"
        />

        {/* Svislý oddělovač */}
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-600 to-transparent mb-16" />

        {/* Popis */}
        <div className="max-w-2xl text-gray-400 text-base sm:text-lg leading-relaxed font-light space-y-6 text-center">
          <p>
            Glenford Corp s.r.o. je společnost opřená o zahraniční kapitálové spojení, zaměřená
            na správu vlastních aktiv, strategické investice a rozvoj inovativních obchodních
            projektů s mezinárodním přesahem. Společnost působí na evropském trhu a při
            realizaci svých aktivit využívá know-how, obchodní zkušenosti a kapitálové zázemí
            svých zahraničních partnerů, vycházející z mezinárodní spolupráce a dlouhodobých
            partnerství.
          </p>
          <p>
            Obchodní filozofie společnosti je postavena na efektivitě, strategickém řízení a
            schopnosti identifikovat příležitosti tam, kde tradiční obchodní modely často narážejí
            na vysoké provozní náklady nebo nevhodné tržní možnosti.
          </p>
          <p>
            V České Republice je součástí portfolia společnosti mimo jiné projekt{' '}
            <a
              href="https://nejlevnejsi-skoda.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors duration-200"
            >
              nejlevnejsi-skoda.cz
            </a>
            , zaměřený na prodej nových vozů Škoda v ČR za mimořádně výhodných
            podmínek. Efektivní provozní model, nízké režijní náklady a především široké
            obchodní možnosti celé EU, díky čemuž zákazníkům nabízí atraktivní cenové
            podmínky při zachování standardních záručních podmínek a profesionálního
            přístupu.
          </p>
          <p>
            Druhotně se společnost zaměřuje na pronájem vlastních nemovitostí, případně
            nemovitostí svých obchodních partnerů.
          </p>
          <p>
            Glenford Corp s.r.o. jako nástupnická organizace své evropské mateřské společnosti,
            bude dlouhodobě usilovat o budování stabilních a perspektivních obchodních
            projektů s důrazem na transparentnost, profesionalitu a vytváření dlouhodobých
            hodnot pro zákazníky a obchodní partnery.
          </p>
        </div>
      </header>

      {/* Vodorovný oddělovač */}
      <div className="mx-auto w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      {/* KONTAKT */}
      <section className="flex flex-col items-center py-20 px-6 text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-gray-600 mb-5">Kontakt</p>
        <a
          href="mailto:info@glenfordcorp.cz"
          className="text-xl sm:text-2xl font-light tracking-widest text-white hover:text-gray-400 transition-colors duration-200"
        >
          info@glenfordcorp.cz
        </a>
      </section>

      {/* Vodorovný oddělovač */}
      <div className="mx-auto w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      {/* FOOTER */}
      <footer className="py-10 px-6 text-center">
        <p className="text-xs text-gray-700 tracking-wider leading-loose">
          Glenford Corp s.r.o.&nbsp;&nbsp;·&nbsp;&nbsp;IČ: 24602400
          <br />
          Primátorská 296/38, Libeň (Praha 8), 180 00 Praha
          <br />
          ID datové schránky: 8xq2ue8&nbsp;&nbsp;·&nbsp;&nbsp;Číslo bankovního účtu: 368 512 688 / 0300 nebo 7064728369 / 0800
        </p>
      </footer>

    </div>
  )
}
