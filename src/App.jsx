import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0614] px-8 py-12 text-white sm:px-12">
      <div className="vibe-bg pointer-events-none absolute inset-0 opacity-90" />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-5xl content-center gap-8">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-fuchsia-300/80">
          GRANT123
        </p>
        <h1 className="max-w-3xl bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-6xl font-black leading-[0.95] tracking-tight text-transparent drop-shadow-[0_0_30px_rgba(217,70,239,0.35)] sm:text-8xl">
          vibey babe
        </h1>
        <p className="max-w-xl text-lg text-white/70">
          good vibes only. tap it and feel the glow.
        </p>
        <button
          type="button"
          onClick={() => setCount((value) => value + 1)}
          className="group min-h-12 w-fit rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 px-7 text-base font-bold text-white shadow-[0_0_25px_rgba(168,85,247,0.6)] transition hover:scale-105 hover:shadow-[0_0_45px_rgba(168,85,247,0.9)] active:scale-95"
        >
          <span className="drop-shadow">vibes {count}</span>
        </button>
      </section>
    </main>
  );
}
