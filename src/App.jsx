export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">

      {/* HERO */}
      <header className="flex flex-col items-center justify-center flex-1 px-6 py-24 text-center">
        <div className="mb-2 tracking-[0.25em] text-sm text-gray-500 uppercase">
          Glenford Corp s.r.o.
        </div>
        <h1
          className="text-6xl sm:text-8xl md:text-[120px] font-black uppercase tracking-[0.1em] leading-none select-none"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #c8c8c8 30%, #8a8a8a 60%, #c0c0c0 80%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.15))',
          }}
        >
          GLENFORD
        </h1>

        {/* CORP s linkami */}
        <div className="flex items-center gap-4 mt-2 mb-16">
          <div className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent to-gray-500" />
          <span
            className="text-sm sm:text-base tracking-[0.5em] font-light uppercase"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #aaaaaa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            CORP
          </span>
          <div className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent to-gray-500" />
        </div>

        {/* Svislý oddělovač */}
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-600 to-transparent mb-16" />

        {/* Popis */}
        <div className="max-w-2xl text-gray-400 text-base sm:text-lg leading-relaxed font-light space-y-6 text-center">
          <p>
            Glenford Corp s.r.o. je společnost zaměřená na správu vlastních aktiv,
            strategické investice a rozvoj inovativních obchodních projektů s
            mezinárodním přesahem. Společnost působí v prostředí evropského trhu
            a při realizaci svých aktivit využívá know-how, obchodní zkušenosti a
            kapitálové zázemí svých zahraničních partnerů, vycházející z
            mezinárodní spolupráce a dlouhodobých partnerství.
          </p>
          <p>
            Obchodní filozofie společnosti je postavena na efektivitě, strategickém
            řízení a schopnosti identifikovat příležitosti tam, kde tradiční obchodní
            modely často narážejí na vysoké provozní náklady nebo omezené tržní
            možnosti. Díky propojení na mezinárodní obchodní struktury a
            zahraniční kapitálové vazby je společnost schopna rozvíjet projekty s
            ambiciózní dlouhodobou vizí a stabilním finančním zázemím.
          </p>
          <p>
            Součástí portfolia společnosti je mimo jiné projekt{' '}
            <a
              href="https://nejlevnejsi-skoda.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors duration-200"
            >
              nejlevnejsi-skoda.cz
            </a>
            , zaměřený na prodej nových vozů Škoda v České republice za
            mimořádně výhodných podmínek. Projekt využívá efektivní provozní
            model, nízké režijní náklady a především široké obchodní možnosti
            celého trhu EU, díky čemuž dokáže zákazníkům nabídnout atraktivní
            cenové podmínky při zachování standardních záručních podmínek a
            profesionálního přístupu.
          </p>
          <p>
            Glenford Corp s.r.o. dlouhodobě usiluje o budování stabilních a
            perspektivních obchodních projektů s důrazem na transparentnost,
            profesionalitu a vytváření dlouhodobé hodnoty pro zákazníky i obchodní
            partnery.
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
        </p>
      </footer>

    </div>
  )
}
