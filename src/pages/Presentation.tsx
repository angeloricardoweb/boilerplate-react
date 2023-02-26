export default function Presentation() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#202024] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-10 ">
        <img src="/icone-bredi.svg" className="h-44" />
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-[#F7D622]">Bredi</span> Template
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 xl:gap-8">
          <a
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://tailwindcss.com"
            target="_blank"
          >
            <h3 className="text-2xl font-bold text-white">Tailwind →</h3>
            <div className="text-lg">
              Documentação do nosso pré-processador CSS.
            </div>
          </a>
          <a
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://react-hook-form.com"
            target="_blank"
          >
            <h3 className="text-2xl font-bold text-white">
              React-hook-form →
            </h3>
            <div className="text-lg">
              Documentação da nossa biblioteca de validação de formulários.
            </div>
          </a>
          <a
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="#"
            target="_blank"
          >
            <h3 className="text-2xl font-bold text-white"> →</h3>
            <div className="text-lg">
              Documentação da nossa principal biblioteca de componentes.
            </div>
          </a>
          <a
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://swr.vercel.app"
            target="_blank"
          >
            <h3 className="text-2xl font-bold text-white">SWR →</h3>
            <div className="text-lg">
              Documentação da nossa principal biblioteca para consumo de
              dados.
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

